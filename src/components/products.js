import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "../context/productContext";

const Products =()=>{
    const {filteredProject}=useProductContext();
    console.log(filteredProject)
    return(
        <Wrapper>
            {filteredProject.map(item=>{
                return (
                    <Link className="article" to={item.id} key={item.id}>
                        <div to={item.id} > 
                            <img src={item.image} alt={item.name} />
                            <div className="article-center"></div>
                        </div>
                        <h3>{item.name}</h3>
                    </Link>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.section`
display:grid;
grid-template-columns:1fr 1fr 1fr;
grid-column-gap:2rem;
margin:0 5rem;
.article{
    margin-bottom:2rem;
    .article-center{
        background-color:#222;
        top:0;
        left:0;
        opacity:0;
        position:absolute;
        width:100%;
        height:100%;
    }
    div{
        position: relative;
        width:100%;
        height:200px;
        img{
                width:100%;
                height:100%;
                object-fit:cover;
            }
        }
        &:hover .article-center{
            opacity:0.5;
        }
    }
`;

export default Products;