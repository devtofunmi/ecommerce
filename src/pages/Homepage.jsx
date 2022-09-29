import React from "react";

const Homepage = () => {
  const url = "pk_test_47315e75503163ee5f51b3941ea5114997e4547382e5f";

  const headers = {
    "X-Authorization": "{token}",
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then(dat);
  console.log(response.json());

  return <div>Homepage</div>;
};

export default Homepage;
