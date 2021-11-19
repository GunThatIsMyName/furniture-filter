import React from "react";
import styled from "styled-components";
import Filter from "../components/filter";
import Products from "../components/products";

const ProductPage =()=>{
    return(
        <Wrapper>
            <Filter />
            <Products/>
        </Wrapper>
    )
}

const Wrapper=styled.section`
    display:grid;
    margin:4rem;
    grid-template-columns:auto 1fr;
    grid-gap:3rem;
`;

export default ProductPage;