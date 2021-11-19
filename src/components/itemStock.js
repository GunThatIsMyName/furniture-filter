import React, { useState } from "react";
import styled from "styled-components";
import {FaMinus,FaPlus} from "react-icons/fa";
import { useFilterContext } from "../context/filterContext";


const ItemStock =({item})=>{
    const {colors,stock,id}=item;
    const {handleAddToCart}=useFilterContext();
    const [amount,setAmount]=useState(1);
    const [mainColor,setColor]=useState(colors[0])
    const handleAmoun=(type)=>{
        setAmount(data=>{
            if(type==="inc"){
                if(data>=stock){
                    return stock;
                }
                return data+1;
            }else{
                if(data<=1){
                    return data;
                }
                return data-1;
            }
        })
    }
    const loadToCart=()=>{
        const loadData={id,amount,mainColor,stock,item};
        handleAddToCart(loadData)
      }
    return(
        <Wrapper>
            <div className="colors">
                <h3>colors : </h3>
                {colors&&colors.map(item=>{
                    return <span className="ball" data-color={item} onClick={()=>setColor(item)} style={{background:item}} key={item}>
                        {mainColor===item?"😃":null}
                    </span>
                })}
            </div>
            <div className="amount">
                <FaMinus onClick={()=>handleAmoun("dec")} />
                <h2>{amount}</h2>
                <FaPlus onClick={()=>handleAmoun("inc")} />
            </div>
            <button className="cart-btn" onClick={loadToCart} >
                add to cart
            </button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.colors{
    display:flex;
    margin-bottom:2rem;
    h3{
        margin-right:0.5rem;
    }
    .ball{
        display:flex;
        border-radius:50%;
        margin-right:0.4rem;
        width:1.5rem;
        height:1.5rem;
        align-items:center;
        justify-content:center;
    }
}
.amount{
    margin-bottom:2rem;
    display:grid;
    place-items:center;
    grid-template-columns:repeat(3,1fr);
    width:10rem;
    font-size:2rem;
}
.cart-btn{
    background-color:#fbd913;
    padding:1rem 2rem;
    border-radius:5px;
}
`;

export default ItemStock;