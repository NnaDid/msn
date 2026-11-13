import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { amount } = req.body || {};
    const parsedAmount = parseFloat(amount);

    if (!parsedAmount || parsedAmount <= 0) {
      return res.status(400).json({ error: 'Invalid donation amount specified.' });
    }

    // Dynamically detect base URL (works across local dev, preview branches, and custom domain)
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const origin = req.headers.origin || `${protocol}://${host}`;

    // Create a Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Donation to MSN',
            },
            unit_amount: Math.round(parsedAmount * 100), // Stripe amounts are in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/donate`,
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}

