import React, { useState } from "react";
import styled from "styled-components";
import ItemImage from "./itemimage";
import ItemStock from "./itemStock";

const SingleItem =({item})=>{
    const {id,images,price,description,name,stock}=item;
    return(
        <Wrapper>
            <ItemImage className="item" images={images} />
            <div className="info">
                <h2>{name}</h2>
                <p>{description}</p>
                <hr />
                {stock>0&&<ItemStock item={item} />}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    min-height:80vh;
    max-width:1200px;
    margin:auto;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-column-gap:3rem;
    place-items:center;
    @media screen and (max-width:1254px){
        margin:4rem 2rem;
        display:block;
        .info{
            margin-top:3rem;
        }
    }
`;

export default SingleItem;