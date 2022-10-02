import React from "react";

const ProductInfo = () => {
  const url = new URL("https://api.chec.io/v1/products/prod_f89398fs489g");

  const params = {
    type: "id",
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const headers = {
    "X-Authorization": "{token}",
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  fetch(url, {
    method: "GET",
    headers: headers,
  }).then((response) => console.log(response.json()));
  return <div> ProductInfoo </div>;
};

export default ProductInfo;
