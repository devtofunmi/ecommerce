import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ name, image, price, id, addToCart }) => {
  function truncateString(str) {
    if (str.length <= 15) {
      return str;
    } else return str.slice(0, 15) + "...";
  }

  return (
    <Flex
      w="300px"
      h="350px"
      m="30px"
      boxShadow={"base"}
      flexDirection={"column"}
      alignItems={"center"}
      borderRadius={"md"}
      bg={"blackAlpha.500"}
      justifyContent={"space-between"}
    >
      <Link to={`/${id}`}>
        <Flex
          w={"100%"}
          h={"100%"}
          flexDirection={"column"}
          alignItems={"center"}
          borderRadius={"md"}
        >
          <Box w={"100%"} h={"200px"}>
            <Img
              src={image}
              objectFit={"cover"}
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Heading fontSize={"2xl"}>{truncateString(name)}</Heading>
          <Text fontWeight={"bold"} fontSize={"xl"}>
            {price}
          </Text>
        </Flex>
      </Link>

      <Button
        mt="30px"
        w={"100%"}
        bg={"blue.300"}
        onClick={(e) => {
          addToCart(name, image, price, id);
        }}
      >
        Add to Cart
      </Button>
    </Flex>
  );
};

export default ProductsCard;
