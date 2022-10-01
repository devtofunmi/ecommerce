import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ name, image, price, id }) => {
  function truncateString(str) {
    if (str.length <= 15) {
      return str;
    } else return str.slice(0, 15) + "...";
  }
  return (
    <Link to={`/${id}`}>
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
        <Box w={"100%"} h={"200px"}>
          <Img src={image} objectFit={"cover"} width={"100%"} height={"100%"} />
        </Box>
        <Heading fontSize={"2xl"}>{truncateString(name)}</Heading>
        <Text fontWeight={"bold"} fontSize={"xl"}>
          {price}
        </Text>

        <Button mt="30px" w={"100%"} bg={"blue.300"}>
          Add to Cart
        </Button>
      </Flex>
    </Link>
  );
};

export default ProductsCard;
