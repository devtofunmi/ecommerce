import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const ProductsCard = ({ name, image, price, description }) => {
  return (
    <Box w="40%" h="auto" m="30px" bgColor="black">
      <Box w="100%">
        <img src={image} />
      </Box>
      <Text>{name}</Text>
      <Box></Box>
      <div>{price}</div>
      <Flex justifyContent="center">
        <Button mt="30px" mb="10px">
          Add to Cart
        </Button>
      </Flex>
    </Box>
  );
};

export default ProductsCard;
