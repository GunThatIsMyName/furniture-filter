import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const Home = () => {
  const { products_loading, products_error, products_data } = useAppContext();
  console.log(products_data, "products_data");
  return (
    <Wrapper>
      <section className="section-center">
        <div className="home-service">
          {products_loading && <h1>LOADING...</h1>}
          {products_error && <h1>ERROR...</h1>}
        </div>
        <div className="home-products">
          {products_data &&
            products_data
              .map((item) => {
                return (
                  <article key={item.id} className="product-article">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="product-img"
                    />
                    <div className="product-info">
                      <h3>{item.name}</h3>
                      <p>{item.price / 100}</p>
                    </div>
                  </article>
                );
              })
              .slice(0, 3)}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background:#121212;
  .home-products {
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    .product-article {
      .product-img {
        border-radius: 5px;
        width: 100%;
        height: 250px;
        object-fit: cover;
      }
      .product-info {
        display: flex;
        justify-content: space-between;
        font-size: 1.5rem;
        h3 {
          color: #fbd913;
        }
      }
    }
  }
`;

export default Home;
