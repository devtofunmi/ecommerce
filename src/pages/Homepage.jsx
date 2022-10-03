import {
  Box,
  Center,
  extendTheme,
  Flex,
  Grid,
  Img,
  Input,
  Spinner,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import commerce from "../lib/commerce";
import ProductsCard from "./ProductsCard";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link, resolvePath } from "react-router-dom";
import banner from "../assets/banner.webp";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const customTheme = extendTheme(
    withDefaultColorScheme({ colorScheme: "red" })
  );

  const fetchProducts = () => {
    commerce.products
      .list()
      .then((products) => {
        setProducts(products.data);
        console.log(products.data);
        setLoading(false);
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
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  const addToCart = (name, image, price, id) => {
    const product = { name, image, price, id };
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (cart.includes(product)) {
      alert("Already added to cart");
    } else {
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };
  return (
    <>
      <Center
        position={"sticky"}
        top={"0px"}
        bgColor="blackAlpha.700"
        zIndex={5}
      >
        <Input
          type="text"
          placeholder="search"
          bgColor={"blue.300"}
          w={"70%"}
          mt={"20px"}
          mb={"20px"}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <Box ml="15px">
          <Link to={"/cart"}>
            <BsFillCartCheckFill size={"40px"} />
          </Link>
        </Box>
      </Center>
      <Center m={"20px"} mt={"50px"}>
        <Flex>
          <Box>
            <Img src={banner} />
          </Box>
        </Flex>
      </Center>

      {loading ? (
        <Flex justifyContent={"center"} mt={"100px"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : (
        <Flex alignItems={"center"} flexWrap={"wrap"} justifyContent={"center"}>
          {filteredData().map((product) => (
            <ProductsCard
              key={product.id}
              image={product.image.url}
              name={product.name}
              price={product.price.formatted_with_symbol}
              description={product.description}
              id={product.id}
              addToCart={addToCart}
            />
          ))}
        </Flex>
      )}
    </>
  );
};

export default Homepage;
