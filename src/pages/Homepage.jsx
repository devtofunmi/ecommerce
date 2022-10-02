import { Box, Center, Flex, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import commerce from "../lib/commerce";
import ProductsCard from "./ProductsCard";
import { BsFillCartCheckFill } from "react-icons/bs";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
  const filteredData = () => {
    if (!searchTerm) {
      return products;
    } else {
      return products.filter((products) =>
        products.name.toLowerCase().startsWith(searchTerm)
      );
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Center>
        <Input
          type="text"
          placeholder="search"
          w={"70%"}
          mt={"20px"}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <Box mt={"15px"} ml="15px">
          <BsFillCartCheckFill size={"40px"} />{" "}
        </Box>
      </Center>

      <Flex alignItems={"center"} flexWrap={"wrap"} justifyContent={"center"}>
        {filteredData().map((product) => (
          <ProductsCard
            key={product.id}
            image={product.image.url}
            name={product.name}
            price={product.price.formatted_with_symbol}
            description={product.description}
            id={product.id}
          />
        ))}
      </Flex>
    </>
  );
};

export default Homepage;
