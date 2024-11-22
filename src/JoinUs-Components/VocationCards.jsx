// import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Box, Flex, Image, Text, Stack, Icon, SimpleGrid } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import cross from '../assets/cross.png'
import Bible from '../assets/Bible.png'
import jesus from '../assets/jesus.png'

const Vocation = () => {
  const items = [
    {
      image: Bible, // Replace with the actual image link
      text: "The MSN Vocation is a unique and special one. We consider it a holy vocation or a gift from God.",
    },
    {
      image: cross, // Replace with the actual image link
      text: "No one is worthy to embrace this unique call whereby one devotes one’s entire life to the service of humanity, all exclusively to the glory of God.",
    },
    {
      image: jesus, // Replace with the actual image link
      text: "We do not seek to satisfy our own personal interests; we are committed to giving boundless services to the poor and the needy.",
    },
    {
      image: jesus, // Replace with the actual image link
      text: "We try to imitate the priesthood of Jesus Christ, which is one characterized by service and sacrifice.",
    },
    {
      image: jesus, // Replace with the actual image link
      text: "If you feel called to become a priest for people, and not for yourself, and you want to learn more about the uniqueness of our MSN vocation, please feel free to contact our vocations coordinator at msnvocations@gmail.com.",
    },
    {
      image: jesus, // Replace with the actual image link
      text: "God bless you abundantly as you come zealously and enthusiastically to partake in this so noble a mission that Christ has entrusted to us.",
    },
  ];
  return (
    <Box p={8} bg="white" color="black">
      {/* Header */}
      <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb={4}>
        Vocation
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {items.map((item, index) => (
          <Flex
            key={index}
            bg="white"
            p={4}
            borderRadius="md"
            boxShadow="md"
            align="center"
          >
            {/* Thumbnail */}
            <Box boxSize="40px" mr={4}>
            <Icon as={CheckCircleIcon} 
                 color="purple.500" 
                 mr={2}  
                 boxSize="40px"
                 objectFit="cover"
            /> 
            </Box>

            {/* Text Section */}
            <Box> 
              <Text fontSize="lg" color="gray.600" textAlign={'justify'} fontWeight={'400'}>
                {item.text}
              </Text>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Vocation;
