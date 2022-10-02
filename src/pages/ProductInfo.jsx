import React, { useState, useEffect } from "react";
import { Flex, Heading, Img, Spinner, Text } from "@chakra-ui/react";
import commerce from "../lib/commerce";
import HTMLReactParser from "html-react-parser";

const ProductInfo = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const productId = "prod_AYrQlWQ7AOonbR";

  const fetchProducts = () => {
    commerce.products.retrieve(productId).then((product) => {
      setProducts(product);
      setLoading(false);

      console.log(product);
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <Flex
          w="100%"
          h="auto"
          m="20px"
          p="30px"
          boxShadow={"base"}
          flexDirection={"column"}
          alignItems={"center"}
          borderRadius={"md"}
          bg={"blackAlpha.500"}
          justifyContent={"space-between"}
        >
          <Img src={product.image.url} />
          <Text mt={"50px"} fontSize={"2xl"}>
            {product.name}
          </Text>
          <Text mt={"20px"} fontWeight={"bold"} fontSize={"2xl"}>
            {product.price.formatted_with_symbol}
          </Text>
          <Text mt="50px">{HTMLReactParser(product.description)}</Text>
        </Flex>
      )}
    </>
  );
};

export default ProductInfo;
