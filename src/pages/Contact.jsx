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

const ContactPage = () => {
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
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          {/* Contact Information Box */}
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
                <Text>msnvocations@gmail.com</Text>
              </HStack>
              <HStack>
                <Icon as={FaMapMarkerAlt} />
                <Text>
                The Missionary Servants of the Needy 	
                Office of the General Superior
                Western Equatoria State
                Yambio, Republic of South Sudan
                </Text>


              </HStack>
            </VStack>
            <HStack mt={8} spacing={4}>
              <Icon as={FaFacebook} boxSize={6} cursor="pointer" color="msn.donate" />
              <Icon as={FaTwitter} boxSize={6} cursor="pointer"  color="msn.donate"/>
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
            {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <FormControl id="first-name">
                <FormLabel fontSize="sm">First Name</FormLabel>
                <Input type="text" variant="flushed" placeholder="First Name" />
              </FormControl>
              <FormControl id="last-name">
                <FormLabel fontSize="sm">Last Name</FormLabel>
                <Input type="text" variant="flushed" placeholder="Last Name" />
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" variant="flushed" placeholder="Email Address" />
              </FormControl>
              <FormControl id="phone">
                <FormLabel>Phone Number</FormLabel>
                <Input type="tel" variant="flushed" placeholder="Phone Number" />
              </FormControl>
            </SimpleGrid>

            <FormControl id="subject" mt={4}>
              <FormLabel>Select Subject</FormLabel>
              <RadioGroup defaultValue="general">
                <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                  <Radio value="general">General Inquiry</Radio>
                  <Radio value="join">Join Us</Radio>
                  <Radio value="help">Need Help</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>


            <FormControl id="message" mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Write your message..." variant="flushed" />
            </FormControl>

            <Flex justify="flex-end">
              <Button
                bgColor="blue"
                color="white"
                mt={6}
                width={{ base: "100%", md: "50%" }} // 100% width on mobile, 50% on larger screens
                
              >
                Send Message
              </Button>
            </Flex> */}

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
      </Flex>
    </Box>
  );
};

export default ContactPage;
