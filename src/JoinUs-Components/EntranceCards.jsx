import { Box, Flex, Text, Image , List, ListItem, ListIcon,} from "@chakra-ui/react"; 
import { CheckCircleIcon } from "@chakra-ui/icons"; // Fancy check icon

import EwfnI from '../assets/EwfnI.png'
import OL3NXdEwfnI from '../assets/OL3NXdEwfnI-1.png'
import jesus from '../assets/jesus.png'

const EntranceCards = () => {
  return (
    <Box p={8} bg="white" color="black">
    {/* Header */}
    <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb={4}>
      Entrance Requirements
    </Text>
    <Text textAlign="center" fontSize="xl" mb={8}>
      We seek individuals who are eager to dedicate their lives to service. Below are the key requirements:
    </Text>
  
    {/* Cards Container */}
    <Flex justify="space-between" wrap="wrap" gap={4}>
      {/* Card 1: Faith */}
      <Box
        bg="white"
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        boxShadow="md"
        flexBasis={{ base: "100%", md: "48%" }}
      >
        <Flex direction="column" height="100%">
          {/* Image Section */}
          <Box width="100%" height="50%">
            <Image
              src={OL3NXdEwfnI} // Replace with the actual image link
              alt="Faith"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
          {/* Text Section */}
          <Flex direction="column" align="center" justify="center" p={4}>
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Faith
            </Text>
            <List spacing={3} width="100%">
              <ListItem display="flex" alignItems="center">
                <ListIcon as={CheckCircleIcon} color="purple.500" boxSize={5} />
                Must be a baptized and confirmed Catholic man who has beforehand practiced Catholic faith for, at least, five consecutive years. 
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <ListIcon as={CheckCircleIcon} color="purple.500" boxSize={5} />
                   He must be a regular communicant who also participates actively in the sacramental life of the Church. 
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <ListIcon as={CheckCircleIcon} color="purple.500" boxSize={5} />
                  He must be a lover of prayer and spiritual exercises. 
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <ListIcon as={CheckCircleIcon} color="purple.500" boxSize={5} />
                  He must demonstrate an outstanding preparedness and interest in providing selfless services to the poor and the needy and must be able to live in a community with other men of different ages and backgrounds.
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <ListIcon as={CheckCircleIcon} color="purple.500" boxSize={5} />
                Most importantly, he must be in good standing with the Roman Catholic Church, free of any canonical impediments to the priesthood and/or religious life specified in the Code of Canon Law.
              </ListItem>
            </List>
          </Flex>
        </Flex>
      </Box>
  
      {/* Card 2: Academics */}
      <Box
        bg="white"
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        boxShadow="md"
        flexBasis={{ base: "100%", md: "48%" }}
      >
        <Flex direction="column" height="100%">
          {/* Image Section */}
          <Box width="100%" height="50%">
            <Image
              src={EwfnI} // Replace with the actual image link
              alt="Academics"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
          {/* Text Section */}
          <Flex direction="column" align="center" justify="center" p={4}>
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Academics
            </Text>
            <List spacing={3} width="100%">
              <ListItem display="flex" alignItems="center">
                <ListIcon as={CheckCircleIcon} color="purple.500" boxSize={5} />
                   The young man must have completed, at least, his secondary education or its equivalence with results that qualify him to enter a university or other tertiary institutions in his country of origin. For instance, a candidate from Nigeria must have obtained his senior secondary school certificate with, at least, 6 credits in relevant subjects, including English and Mathematics.
              </ListItem> 
            </List>
          </Flex>
        </Flex>
      </Box>
  
      {/* Card 3: Age */}
      <Box
        bg="white"
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        boxShadow="md"
        flexBasis={{ base: "100%", md: "48%" }}
      >
        <Flex direction="column" height="100%">
          {/* Image Section */}
          <Box width="100%" height="50%">
            <Image
              src={jesus} // Replace with the actual image link
              alt="Age"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
          {/* Text Section */}
          <Flex direction="column" align="center" justify="center" p={4}>
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Age
            </Text>
            <List spacing={3} width="100%">
              <ListItem display="flex" alignItems="center">
                <ListIcon as={CheckCircleIcon} color="purple.500" boxSize={5} />
                17-22 years for O’level or A’level holders. 
              </ListItem> 
              <ListItem display="flex" alignItems="center">
                <ListIcon as={CheckCircleIcon} color="purple.500" boxSize={5} />
                17-25 years for pre-bachelor’s degree (Diploma, ND, or NCE) holders. 
              </ListItem> 
              <ListItem display="flex" alignItems="center">
                <ListIcon as={CheckCircleIcon} color="purple.500" boxSize={5} />
                17-28 years for bachelor’s degree (B.A., B.Sc., or HND) holders
              </ListItem> 
              <ListItem display="flex" alignItems="center">
                <ListIcon as={CheckCircleIcon} color="purple.500" boxSize={5} />
                   17-33 years for post-graduate degree (Master’s, or Ph. D.) holders. 
                </ListItem> 
            </List>

          </Flex>
        </Flex>
      </Box>
  
      {/* Card 4: Human */}
      <Box
        bg="white"
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        boxShadow="md"
        flexBasis={{ base: "100%", md: "48%" }}
      >
        <Flex direction="column" height="100%">
          {/* Image Section */}
          <Box width="100%" height="50%">
            <Image
              src={jesus} // Replace with the actual image link
              alt="Human"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
          {/* Text Section */}
          <Flex direction="column" align="center" justify="center" p={4}>
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Human
            </Text>
            <List spacing={3} width="100%">
              <ListItem display="flex" alignItems="center">
                <ListIcon as={CheckCircleIcon} color="purple.500" boxSize={5} />
                   The applicant must be a very mature person with a balanced spirituality.
                </ListItem> 
              <ListItem display="flex" alignItems="center">
                <ListIcon as={CheckCircleIcon} color="purple.500" boxSize={5} />
                He must have the ability to manage his sexuality well and relate well with both men and women in a kindly and mature manner.
              </ListItem> 
              <ListItem display="flex" alignItems="center">
                <ListIcon as={CheckCircleIcon} color="purple.500" boxSize={5} />
                   He must be physically, medically, psychologically, emotionally, and morally healthy and stable.
                </ListItem> 
              <ListItem display="flex" alignItems="center">
                <ListIcon as={CheckCircleIcon} color="purple.500" boxSize={5} />
                   He must be able to live peacefully with other men of different academic, family, cultural, and socio-economic backgrounds. 
              </ListItem> 
              <ListItem display="flex" alignItems="center">
                <ListIcon as={CheckCircleIcon} color="purple.500" boxSize={5} />
                He must demonstrate a high sense of initiative and creativity.
              </ListItem> 
              <ListItem display="flex" alignItems="center">
                <ListIcon as={CheckCircleIcon} color="purple.500" boxSize={5} />
                Above all, he must have the interest of the poor at heart, and as such, be able to discern better ways of serving them in the most efficient ways. 
              </ListItem> 
            </List> 
          </Flex>
        </Flex>
      </Box>
    </Flex>
  </Box>
  
  
  );
};

export default EntranceCards;
