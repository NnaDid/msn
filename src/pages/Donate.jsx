import React from 'react'
import {  Box, Text, Heading, VStack, SimpleGrid, Button, Input } from "@chakra-ui/react";
import children2 from '../assets/children2.png'

function Donate() {
  return (
    
    <Box
      bgImage={children2}
      bgPosition="center"
      bgSize="cover"
      width="full"
      minH="500px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      p={6}
      color="white"
  >
    <VStack spacing={4} textAlign="center" maxW="100%">
      {/* Main Heading */}
      <Heading size="2xl">Your Support, Their Future</Heading>
{/* Bank Details Container */}
<Box
  bg="rgba(255, 254, 254, 0.9)"
  color="black"
  p={6}
  borderRadius="md"
  boxShadow="md"
  width="full" 
  // bg='gray.500'
>
  <SimpleGrid columns={[1, 2]} spacing={4} >
    {/* International Account */}
    <Box boxShadow={'lg'} padding={4}>
      <VStack spacing={3} align="start"  borderRight={2} borderRightColor={'gray'}>
        <Text fontSize="lg" fontWeight="bold">
          International Account Information
        </Text>
        <Text>Bank Name: Wells Fargo Bank</Text>
        <Text>Account Number: 9290018028</Text>
        <Text>Account Name: Missionary Servants of the Needy</Text>
        <Text>Routing Number: 111900659</Text>
      </VStack>
    </Box>
    {/* Local Naira Account */}
    <Box boxShadow={'lg'} padding={4}>
      <VStack spacing={3} align="start">
        <Text fontSize="lg" fontWeight="bold">
          Local Naira Account Information
        </Text>
        <Text>Bank: Access Bank</Text>
        <Text>Account Number: 1906907916</Text>
        <Text>Account Name: Missionary Servants of the Needy</Text>
      </VStack>
    </Box>
  </SimpleGrid>
   {/* Donation Form */} 
   <Box mt={8} p={4} bg="white" borderRadius="md" boxShadow="sm">
    <Text fontSize="lg" fontWeight="bold" mb={4}>
      Donate Online
    </Text>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // Handle Stripe Payment here 
        alert("Donation submitted")
      }}
    >
      <VStack spacing={4}>
        {/* Input for Donation Amount */}
        <Input
          type="number"
          placeholder="Enter Amount (e.g., 50)"
          size="lg"
          required
          bg="gray.50"
        />
        {/* Stripe Donate Button */}
        <Button
          type="submit"
          colorScheme="blue"
          size="lg"
          width="full"
          _hover={{ bg: "blue.600" }}
        >
          Donate with Stripe
        </Button>
      </VStack>
    </form>
  </Box>
</Box>

    </VStack>
  </Box>
  )
}

export default Donate