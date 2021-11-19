import React from "react";
import styled from "styled-components";
import { useProductContext } from "../context/productContext";

const Products =()=>{
    const {filteredProject}=useProductContext();
    console.log(filteredProject)
    return(
        <Wrapper>
            <h1>Products</h1>
        </Wrapper>
    )
}

const Wrapper = styled.section`

`;

export default Products;