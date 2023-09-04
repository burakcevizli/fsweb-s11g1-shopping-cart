import React from "react";
import styled from "styled-components";

// Components
import Product from "./Product";
import { ProductsContext } from "../contexts/ProductContext";
import { useContext } from "react";

const ScProducts = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);

    img {
      width: 100%;
    }
  }
`;

const Products = (props) => {
  const {products,addItem} = useContext(ProductsContext)

  return (
    <ScProducts>
      {products.map((product,index) => (
        <Product key={index} id={product.id} product={product} addItem={addItem} />
      ))}
    </ScProducts>
  );
};

export default Products;
