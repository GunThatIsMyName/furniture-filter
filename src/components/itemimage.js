import React, { useState } from "react";
import styled from "styled-components";

const ItemImage =({images=[]})=>{
    const [main,setMain]=useState(images[0])
    return(
        <Wrapper>
            {main&& <img src={main.url} alt="main-img" className="main-img" /> }
            <div className="gallery">
                {images.map((item,idx)=>{
                    return <img src={item.url} key={idx} onClick={()=>setMain(images[idx])} alt={item.name} className="item-img" />
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .main-img{
        width:100%;
        height:500px;
        object-fit:cover;
        margin-bottom:2rem;
    }
    .gallery{
        display:grid;
        grid-column-gap:1rem;
        grid-template-columns:repeat(5,1fr);
        .item-img{
            width:100%;
            height:70px;
            object-fit:cover;
        }
    }
`;

export default ItemImage;