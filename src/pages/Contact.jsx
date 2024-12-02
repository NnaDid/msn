import React from 'react';
import {
  Stack,
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Icon,
  SimpleGrid,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';

const ContactPage = () => {


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    // try {
    //   const response = await fetch("http://localhost/msnapi/contact.php", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const result = await response.json();
    //   if (result.success) {
    //     alert("Message sent successfully!");
    //     setFormData({
    //       firstName: "",
    //       lastName: "",
    //       email: "",
    //       phone: "",
    //       subject: "general",
    //       message: "",
    //     });
    //   } else {
    //     alert("Error sending message: " + result.message);
    //   }
    // } catch (error) {
    //   alert("Error: " + error.message);
    // }
  };

  return (
    <Box p={{ base: 4, md: 8 }} bg="gray.50" minH="100vh">
      {/* Contact Us Section */}
      <Box py={8} textAlign="center">
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold">Contact Us</Text>
        <Text mt={4}>Any question or remarks? Just write us a message!</Text>
      </Box>


      {/* Main Container for Contact Information and Form */}
      <Flex justify="center" align="center" py={8} wrap="wrap">
        <Box
          w={{ base: '100%', lg: '900px' }}
          p={4}
          bg="white"
          rounded="md"
          borderWidth="1px"
          boxShadow="lg"
        >
          
          {/* Contact Information Box */}
          <Box   display="flex"   flexDirection={{ base: 'column', md: 'row' }}>
           <Box
            w={{ base: '100%', md: '45%' }}
            p={8}
            bg="msn.400"
            color="white"
            rounded="md"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            mb={{ base: 8, md: 0 }}
            mr={{ base: 0, md: 8 }}
          >
            <Text fontSize="xl" mb={4} fontWeight="bold">Contact Information</Text>
            <VStack align="start" spacing={4}>
              <HStack>
                <Icon as={FaPhoneAlt} />
                <Text>+211 921 313 848</Text>
              </HStack>
              <HStack>
                <Icon as={FaEnvelope} />
                <Text>msnvocations@gmail.com or info@msnmission.org </Text>
              </HStack>
              <HStack>
                <Icon as={FaMapMarkerAlt} />
                <VStack>
                <Text>
                  Missionary Servants of the Needy (MSN) 
                  Republic of South Sudan
                </Text>
                <Text>
                  Liaison Office:
                  Arua House III Muyenga,
                  P.O. Box 27114
                  Kampala, Uganda.
                </Text>
                </VStack>
              </HStack>
            </VStack>
            <HStack mt={8} spacing={4}>
              <Icon as={FaFacebook} boxSize={6}  cursor="pointer" color="msn.donate" />
              <Icon as={FaTwitter} boxSize={6}   cursor="pointer"  color="msn.donate"/>
              <Icon as={FaInstagram} boxSize={6} cursor="pointer"  color="msn.donate"/>
            </HStack>
          </Box>

          {/* Form Box */}
          <Box
            w={{ base: '100%', md: '55%' }}
            p={4}
            bg="white"
            rounded="md"
            borderWidth="1px"
            boxShadow="sm"
          > 
            <Box 
              as="iframe"
              src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.1458650640707!2d28.399678074978464!3d4.567793595406743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x173ff1837aabd975%3A0x34d356738c9da386!2sWestern%20Equatoria%20State!5e0!3m2!1sen!2sng!4v1730918425884!5m2!1sen!2sng'}
              width="100%"
              height="400px"
              border="0"  
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              borderRadius="0"
              boxShadow="sm"
              overflow="hidden"
            /> 
          </Box>
          </Box>

      
     <Box width={"100%"} p={10} as="form" action="https://msnmission.org/msnapi/contact.php" method="post">
      
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <FormControl id="firstName">
            <FormLabel fontSize="sm">First Name</FormLabel>
            <Input
              type="text"
              variant="outline"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="lastName">
            <FormLabel fontSize="sm">Last Name</FormLabel>
            <Input
              type="text"
              variant="outline"
              placeholder="Last Name"
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
            />
          </FormControl>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={4}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              variant="outline"
              placeholder="Email Address"
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="phone">
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              variant="outline"
              placeholder="Phone Number"
              name='phone'
              value={formData.phone}
              onChange={handleChange}
            />
          </FormControl>
        </SimpleGrid>

        <FormControl id="subject" mt={4}>
          <FormLabel>Select Subject</FormLabel>
          <RadioGroup
            value={formData.subject}
            onChange={(value) => setFormData({ ...formData, subject: value })}
            name='subject'
          >
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Radio value="general">General Inquiry</Radio>
              <Radio value="join">Join Us</Radio>
              <Radio value="help">Need Help</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl id="message" mt={4}>
          <FormLabel>Message</FormLabel>
          <Textarea
            placeholder="Write your message..."
            variant="outline"
            name='message'
            value={formData.message}
            onChange={handleChange}
          />
        </FormControl>

        <Flex justify="flex-end">
          <Button           
            colorScheme="blue"
            size="lg"
            width="full"
            _hover={{ bg: "blue.600" }}
            color="white" mt={6} 
            type="submit">
            Send Message
          </Button>
        </Flex> 
    </Box>

        </Box>

      </Flex>

    </Box>
  );
};

export default ContactPage;
