import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";
import CartTotals from "../components/cartTotal";
import { useFilterContext } from "../context/filterContext";

const Cart = () => {
  const { cart,handleAmount} = useFilterContext();
  return (
    <Wrapper>
      <div className="cart-title">
        <h5>items</h5>
        <h5>prices</h5>
        <h5>quantati</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <div className="cart-itmes">
        {cart.map((item) => {
          const { image, id, price, name, stock, mainColor, amount } = item;
          return (
            <article key={id} className="cart-item">
              <div className="cart-img">
                <img src={image} alt={name} />
                <div className="cart-item-info">
                  <h4>{name}</h4>
                  <p>
                    Color :{" "}
                    <span
                      style={{ backgroundColor: mainColor }}
                      className="color-ball"
                    ></span>{" "}
                  </p>
                </div>
              </div>
              <p className="price">{price/100}</p>
              <p className="amount">
                <FaMinus onClick={()=>handleAmount("dec")} />
                    <h2>{amount}</h2>
                <FaPlus onClick={()=>handleAmount("inc")} />
              </p>
              <p>{price*amount/100}</p>
              <span  className="remove-btn">🔋</span>
            </article>
          );
        })}
      </div>
      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 10rem;
  text-align: center;
  .cart-title {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(5, 1fr);
  }
  .cart-item {
    display: grid;
    grid-gap: 2rem;
    align-items: center;
    grid-template-columns: auto 1fr 1fr 1fr 1fr;
    .cart-img {
        display:flex;
        align-items:center;
        max-width:100%;
        p{
            display:flex;
        }
    }
    img {
      height: 100px;
      object-fit:cover;
    }
    .color-ball {
      width: 1rem;
      height: 1rem;
      display: inline-block;
    }
  }
`;

export default Cart;
