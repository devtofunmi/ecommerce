import { Box, Flex, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import commerce from "../lib/commerce";
import ProductsCard from "./ProductsCard";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    commerce.products
      .list()
      .then((products) => {
        setProducts(products.data);
        console.log(products.data);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  function truncateString(str) {
    if (str.length <= 15) {
      return str;
    } else return str.slice(0, 15) + "...";
  }
  return (
    <>
      <Flex w="30%" mt={10} justifyContent="center" alignItems="center">
        <Input type="text" placeholder="search" />
      </Flex>
      <Box>
        {products.map((product) => (
          <ProductsCard
            key={product.id}
            image={product.image.url}
            name={truncateString(product.name)}
            price={product.price.formatted_with_symbol}
            description={product.description}
          />
        ))}
      </Box>
    </>
  );
};

export default Homepage;
