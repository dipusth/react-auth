import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="dark:text-white text-center p-5">
      <h1 className="text-4xl">This is Product List Page</h1>
      <Link
        to="/login"
        className="bg-blue-700 p-3 px-5 rounded-lg my-5 inline-block text-white"
      >
        Add to Cart
      </Link>
    </div>
  );
};

export default Product;
