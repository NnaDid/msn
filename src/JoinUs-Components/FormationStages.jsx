import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";

const FormationStages = () => {
  return (
    <Box p={8} bg="white" color="black">
      {/* Header */}
      <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb={4}>
        Formation Stages
      </Text>
      <Text textAlign="center" fontSize="lg" mb={8}>
        Your journey with us unfolds in several stages, each aimed at deepening your commitment and understanding.
      </Text>

      <Flex
  display={{ base: "flex", md: "none" }}
  overflowX="auto"
  gap={4}
  mt={4}
>
  {[
    {
      title: "Postulancy (6–12 months)",
      description:
        "Six months to one year of postulancy during which the postulant lives in our community and explores the beauty of our charism/apostolate. He takes some classes on spirituality, scriptures, and foreign languages.",
    },
    {
      title: "Novitiate (1 Year)",
      description:
        "One year of novitiate (or spiritual formation) during which the novices engage in intense prayers and reflections and take classes on our Constitutions and community/religious life.",
    },
    {
      title: "Temporary Profession",
      description:
        "The profession of temporary promises, which happens immediately upon the completion of novitiate. Following this, brothers are sent to our designated seminaries for studies in philosophy and/or theology.",
    },
    {
      title: "Pastoral Year",
      description:
        "Upon the completion of their philosophy, brothers, if deemed necessary, are sent to any of our parishes or pastoral centers for a year of experience.",
    },
    {
      title: "Vocational Training",
      description:
        "Vocational training in handiwork such as carpentry, building construction, cosmetology, upholstery, shoemaking, furniture production, auto mechanics, tailoring/sewing, paint production, computer repairs, mobile phone repairs, and information technology is mandatory for brothers.",
    },
    {
      title: "Final/Perpetual Profession",
      description:
        "Final/Perpetual Profession is usually done after living in temporary promises for at least three years.",
    },
    {
      title: "Reception of Minor Ministries",
      description:
        "Reception of the ministry of lector takes place after the first year of theology, and that of acolyte after the second year of theology.",
    },
    {
      title: "Diaconate Ordination",
      description:
        "Diaconate ordination happens after the finally incorporated brother must have completed his third year of theology.",
    },
    {
      title: "Priestly Ordination",
      description:
        "Priestly ordination occurs at least six months after diaconate ordination.",
    },
    {
      title: "Ongoing Formation",
      description:
        "Formation is a lifetime process. Every member continues to grow academically, pastorally, spiritually, and humanly even after ordination. Ongoing formation entails docility to learning and growth.",
    },
  ].map(({title, description}, index) => (
    <Box
      key={index}
      minW="80%"
      bg="white"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      p={4}
      textAlign="left"
    >
            <Text fontSize="lg" fontWeight="bold" color="purple.700" mb={2}> {title}  </Text>
            <Text fontSize="sm" color="gray.600">{description}</Text>
    </Box>
  ))}
</Flex>

{/* Grid Layout for Larger Screens */}
<SimpleGrid
  columns={[1, null, 3]}
  spacing={4}
  mt={4}
  display={{ base: "none", md: "grid" }}
>
  {[
    {
      title: "Postulancy (6–12 months)",
      description:
        "Six months to one year of postulancy during which the postulant lives in our community and explores the beauty of our charism/apostolate. He takes some classes on spirituality, scriptures, and foreign languages.",
    },
    {
      title: "Novitiate (1 Year)",
      description:
        "One year of novitiate (or spiritual formation) during which the novices engage in intense prayers and reflections and take classes on our Constitutions and community/religious life.",
    },
    {
      title: "Temporary Profession",
      description:
        "Profession of temporary promises, which happens immediately upon the completion of novitiate. Following this, brothers are sent to our designated seminaries for studies in philosophy and/or theology.",
    },
    {
      title: "Pastoral Year",
      description:
        "Upon the completion of their philosophy, brothers, if deemed necessary, are sent to any of our parishes or pastoral centers for a year of experience.",
    },
    {
      title: "Vocational Training",
      description:
        "Vocational training in handiwork such as carpentry, building construction, cosmetology, upholstery, shoemaking, furniture production, auto mechanics, tailoring/sewing, paint production, computer repairs, mobile phone repairs, and information technology is mandatory for brothers.",
    },
    {
      title: "Final/Perpetual Profession",
      description:
        "Final/Perpetual Profession is usually done after living in temporary promises for at least three years.",
    },
    {
      title: "Reception of Minor Ministries",
      description:
        "Reception of the ministry of lector takes place after the first year of theology, and that of acolyte after the second year of theology.",
    },
    {
      title: "Diaconate Ordination",
      description:
        "Diaconate ordination happens after the finally incorporated brother must have completed his third year of theology.",
    },
    {
      title: "Priestly Ordination",
      description:
        "Priestly ordination occurs at least six months after diaconate ordination.",
    },
    {
      title: "Ongoing Formation",
      description:
        "Formation is a lifetime process. Every member continues to grow academically, pastorally, spiritually, and humanly even after ordination. Ongoing formation entails docility to learning and growth.",
    },
  ].map(({ title, description }, index) => (
    <Box
      key={index}
      bg="white"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      p={4}
      textAlign="justify"
    >
      <Text fontSize="lg" fontWeight="bold" color="purple.700" mb={2}> {title}  </Text>
      <Text fontSize="sm" color="gray.600">{description}</Text>
    </Box>
  ))}
</SimpleGrid>

    </Box>
  );
};

export default FormationStages;
