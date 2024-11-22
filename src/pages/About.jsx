import { Box, Flex, Text, Button, Heading, Image, VStack, SimpleGrid } from "@chakra-ui/react";
import ChildrenImage from '../assets/roman-nguyen-1.png'
import joel from '../assets/joel-muniz2.png'
import { Link } from "react-router-dom";

import Education  from '../assets/5.png';
import HealthCare from '../assets/6.png';
import Youth      from '../assets/4.png';
import ParishWork from '../assets/3.png';
import Orphanages from '../assets/2.png';
import HomeVisitations from '../assets/1.png';
import RetiredPriests  from '../assets/MCrF6hnojU.png';

const AboutUs = () => {
  return (
    <Box bg="gray.100" p={6} textAlign={'center'} >
      {/* About Us Section */}
        <Heading size="lg" color="msn.400">About Us</Heading>
       <Flex spacing={4} mt={8} justifyContent='space-between' alignItems='center'>
        <Box textAlign={'justify'} w={{base:'100%',md:'70%'}}>
            <Text fontSize="md" textAlign="justify" mb={4}>
                The Missionary Servants of the Needy (MSN) is a Roman Catholic male religious association founded exclusively to help the poor and serve their needs. Anyone who wishes to participate in this so divinely motivated mission must inculcate a burning desire for working with the most disadvantaged members of society. He must see the priesthood of Jesus Christ and apostolic life from the perspective of service, not acquisition of honor and/or wealth.
            </Text>
             
            <Text fontSize="md" textAlign="justify" mb={4}>
                 Our mission is primarily centered on our special concern for the poor and the less privileged, especially those who are given little or zero attention in their immediate communities. Our mission is to help this class of people reinstate their sense of value and become more cognizant of their relevance to human society, to themselves, their families, and to God. Making visible and practical God’s Love and Mercy through Works of Charity and Corporal Works of Mercy is the major ingredient of our mission. Our utmost and ever-burning desire is to be the mouthpiece of God and "another Christ" to the poor and less-privileged.
            </Text>

            <Text fontSize="md" textAlign="justify" mb={4}>
                 Christ, on different occasions, in the scripture, identifies ceaselessly with the poor and the neglected ones, and shows unquantifiable and relentless concern for their wellbeing. For instance, in Matthew 14:13-21, 15:32-38; Mark 6:32-44; Luke 9:10-17, John 6:1-13, and some other similar passages in the scripture, Jesus’ compassionate concern for the hungry is astoundingly obvious. These texts unanimously highlight how Our Lord Jesus Christ, moved with love, compassion, and mercy, attended to the needs of the hungry. Imitating zealously and relentlessly Jesus’ compassionate attitude towards the hungry, we endeavor to pay uninterrupted attention to the needs of the poor. We want to be “another Christ” to them, be their brothers and friends and the channel through which they can encounter God’s love. The Word of God and the rich sacraments and tradition of the Church are the very summit of our spirituality.
            </Text>
        </Box>
        <Image
          src={ChildrenImage} 
          alt="Helping the needy" 
          height={'100%'}
          w={{base:0,md:"25%"}}
        />
      </Flex>

      {/* Our Mission Section */}
      <Box bg="msn.400" p={6} mt={10} mx={0} w="100%">
        <Heading size="lg" mb={4} textAlign="center" color="white">Our Mission/Charism</Heading>

        {/* First Card */}
        <SimpleGrid columns={1} spacing={10} borderRadius="md" w="100%">
          <Box 
            bg="white" 
            borderRadius="20px" 
            boxShadow="md" 
            display="flex" 
            flexDirection={{ base: "column", md: "row" }} 
            h={{ base: "auto", md: "70vh" }}
            w="100%"
            overflow="hidden"
          >
            {/* Image Section */}
            <Box width={{ base: "100%", md: "50%" }} h={{ base: "200px", md: "100%" }} order={{ base: 1, md: 0 }}>
              <Image
                src={joel} // Replace with the actual image link
                alt="Charism image"
                borderRadius={{ base: "20px 20px 0 0", md: "20px 0 0 20px" }}
                h="100%"
                w="100%"
                objectFit="cover"
              />
            </Box>

            {/* Text Section */}
            <Flex 
              width={{ base: "100%", md: "50%" }} 
              flexDirection="column" 
              justifyContent="center" 
              p={6}
              order={{ base: 2, md: 1 }}
            >
              <Heading size="md" mb={2} textAlign={{ base: "center", md: "left" }}>
                Fundamental Charism
              </Heading>
              <Text textAlign={{ base: "center", md: "left" }} mb={4}>
                Our fundamental mission or charism is to seek to sanctify ourselves as priests of apostolic life by conforming our priestly life to the priesthood of Jesus Christ, in a mission of shared charity according to the norms of our Constitutions and apostolate, thereby fulfilling the original intention of Christ to save the greatest number of souls and paying an uninterrupted attention to the needs of the poor and the less-privileged.
              </Text>
              <Text textAlign={{ base: "center", md: "left" }}> 
                In summary, our charism is summed up in our mission statement: To live the Holy Priesthood of Jesus Christ in sanctity, seeking to save souls by being of service to the poor and underprivileged. Jesus drew near and spoke to them saying: “All power in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Spirit, teaching them to observe all that I have commanded you, and behold, I am with you all days, even to the consummation of the world” (Matthew 28:16-20). Our mission then is to fulfill this original intention of Christ, and to do everything possible for the salvation of the greatest number 
              </Text>
            </Flex>
          </Box>
        </SimpleGrid>

        {/* Second Card */}
        <SimpleGrid columns={1} spacing={10} mt={10} w="100%">
          <Box 
            bg="white" 
            borderRadius="20px" 
            boxShadow="md" 
            display="flex" 
            flexDirection={{ base: "column", md: "row" }} 
            h={{ base: "auto", md: "50vh" }}
            w="100%"
            overflow="hidden"
          >
            {/* Image Section */}
            <Box width={{ base: "100%", md: "50%" }} h={{ base: "200px", md: "100%" }} order={{ base: 1, md: 1 }}>
              <Image
                src={joel} // Replace with the actual image link
                alt="Charism image"
                borderRadius={{ base: "20px 20px 0 0", md: "0 20px 20px 0" }}
                h="100%"
                w="100%"
                objectFit="cover"
              />
            </Box>

            {/* Text Section */}
            <Flex 
              width={{ base: "100%", md: "50%" }} 
              flexDirection="column" 
              justifyContent="center" 
              p={6}
              order={{ base: 2, md: 0 }}
            >
              <Heading size="md" mb={2} textAlign={{ base: "center", md: "left" }}>
                Our Spiritual Mission
              </Heading>
              <Text textAlign={ "justify"} mb={4}>
                In fulfilling the mission entrusted to us by Christ, we are committed to intense prayers and meditation. 
                We believe that praying together will enhance our spiritual bonding as brothers aiming at the same mission.
                We are committed to praying for ourselves and the entire faithful worldwide, especially the poor and the needy that we serve. 
              </Text>
              <Text textAlign={ "justify"}>
                Prayer is therefore the primary ingredient of our day. 
                We strive to become an apostolic society in which we support each other and all other priests and religious as we work together as a theme to fulfill our mission. 
                Our study, our prayer, and our community life are all focused on our mission to be servants of humanity. 
                We stress the universal call to holiness and help people to open themselves to contemplation.
              </Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>



      {/* Donate Button */}
      <Flex justify="center" mt={10}>
        <Button as={Link} to={'/donate'} bgColor="blue.400" size="lg" color="#ffff">
          Donate
        </Button>
      </Flex>

      {/* Our Apostolate Section */}
      <Box mt={10}>
        <Heading size="lg" mb={4} color="msn.400">Our Apostolate</Heading>
        <SimpleGrid columns={2} spacing={8}>
          {/* Card 1 */}
          <Box bg="white" shadow="md">
            <Flex>  
             <Image  src={Education} alt="Charism image" h="100%"  w="35%" objectFit="cover"  />
              <Box padding={4} justifyContent={'center'} alignItems={'center'}>
                <Heading size="md" color="msn.400">Education</Heading>
                <Text mt={2} textAlign={'left'}>
                  We provide access to education for children in underserved communities, helping to shape the future
                  through learning and enlightenment.
                </Text>
              </Box>
            </Flex>
          </Box>

          {/* Card 2 */}
          <Box bg="white" shadow="md">
          <Flex>  
             <Image  src={HealthCare} alt="Charism image" h="100%"  w="35%" objectFit="cover"  />
              <Box padding={4} justifyContent={'center'} alignItems={'center'}>
            <Heading size="md" color="msn.400">Healthcare</Heading>
            <Text mt={2} textAlign={'left'}>
              Healthcare services are provided to ensure the physical well-being of those in need, particularly
              the vulnerable and impoverished.
            </Text>
            </Box>
            </Flex>
          </Box>

          {/* Card 3 */}
          <Box bg="white" shadow="md">
          <Flex>  
             <Image  src={Youth} alt="Charism image" h="100%"  w="35%" objectFit="cover"  />
              <Box padding={4} justifyContent={'center'} alignItems={'center'}>
            <Heading size="md" color="msn.400">Youth Apostolate</Heading>
            <Text mt={2} textAlign={'left'}>
              We engage the youth in spiritual and social activities that foster growth, responsibility, and a
              deeper connection to their faith.
            </Text>
            </Box>
            </Flex>
          </Box>

          {/* Card 4 */}
          <Box bg="white" shadow="md">
          <Flex>  
             <Image  src={ParishWork} alt="Charism image" h="100%"  w="35%" objectFit="cover"  />
              <Box padding={4} justifyContent={'center'} alignItems={'center'}>
            <Heading size="md" color="msn.400">Parish Work</Heading>
            <Text mt={2} textAlign={'left'}>
              Our mission is supported through active involvement in parish work, promoting faith and service
              within local communities.
            </Text>
            </Box>
            </Flex>
          </Box>

          {/* Card 5 */}
          <Box bg="white" shadow="md" >
          <Flex>  
             <Image  src={Orphanages} alt="Charism image" h="100%"  w="35%" objectFit="cover"  />
              <Box padding={4} justifyContent={'center'} alignItems={'center'}>
            <Heading size="md" color="msn.400">Orphanages</Heading>
            <Text mt={2} textAlign={'left'}>
              Caring for orphaned children is a central mission, providing a safe, nurturing environment for
              growth and development.
            </Text>
            </Box>
            </Flex>
          </Box>

          {/* Card 6 */}
          <Box bg="white" shadow="md"  >
          <Flex>  
             <Image  src={HomeVisitations} alt="Charism image" h="100%"  w="35%" objectFit="cover"  />
              <Box padding={4} justifyContent={'center'} alignItems={'center'}>
            <Heading size="md" color="msn.400">Home Visitations</Heading>
            <Text mt={2} textAlign={'left'}>
              We visit homes of the sick, elderly, and marginalized to offer companionship, support, and
              spiritual guidance.
            </Text>
            </Box>
            </Flex>
          </Box>

          {/* Card 7 */}
          <Box bg="white" shadow="md" >
          <Flex>  
             <Image  src={RetiredPriests} alt="Charism image" h="100%"  w="35%" objectFit="cover"  />
              <Box padding={4} justifyContent={'center'} alignItems={'center'}>
            <Heading size="md" color="msn.400">Caring for Retired Priests and Elders</Heading>
            <Text mt={2} textAlign={'left'}>
              Our mission extends to providing care and support for retired priests and the elderly, ensuring
              they are looked after in their twilight years.
            </Text>
            </Box>
            </Flex>
          </Box>
          {/* Card 8 */}
          <Box p={4} borderRadius="md" justifyContent={'center'} alignItems={'center'}>
              <Button as={Link} to={'/support'} bgColor="blue.400" size="lg" color="#ffff">
                 Get Help Now
              </Button>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default AboutUs;
