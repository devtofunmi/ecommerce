import React, { useEffect, useState } from "react";
import commerce from "../lib/commerce";
// import ProductsList from "./components/ProductsList";

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
  return <div>Homepage</div>;
};

export default Homepage;
