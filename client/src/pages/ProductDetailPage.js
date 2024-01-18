import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductDetails from "../features/productList/components/ProductDetails";

const ProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <ProductDetails />
      </Navbar>
    </div>
  );
};

export default ProductDetailPage;
