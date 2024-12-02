import React from "react";
import { Box, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SuccessMessage = ({ onGoBack }) => {
  return (
    <Box
      bg="green.50"
      color="green.700"
      p={6}
      borderRadius="md"
      boxShadow="md"
      textAlign="center"
      maxW="400px"
      mx="auto"
      mt={8}
    >
      <VStack spacing={4}>
        <Text fontSize="xl" fontWeight="bold">
          🎉 Thank You for Your Donation!
        </Text>
        <Text>
          Your generous contribution helps us continue our mission to make a difference. 
          We deeply appreciate your support!
        </Text>
        <Button 
               as={Link} 
               to={'https://msnmission.org/'}  
               onClick={onGoBack}
               colorScheme="blue"
               size="lg"
               width="full"
               _hover={{ bg: "blue.600" }}
          >
          Go Back to Home
        </Button>
      </VStack>
    </Box>
  );
};

export default SuccessMessage;
