import React from "react";
import styled from "styled-components";
import { useProductContext } from "../context/productContext";
import { typeConverter } from "../utils/format";

const Filter = () => {
  const {productList,filter,handleFilter}=useProductContext();
  const{current_price,max_price,min_price}=filter;
  const newCategory=typeConverter(productList,"category");
  const newCompany=typeConverter(productList,"company");
  const newColors=typeConverter(productList,"colors");
  
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        className="search"
        onChange={handleFilter}
        name="search"
        id="search"
        placeholder="search"
      />
      <div className="form-control">
        <h5>category</h5>
        {newCategory.map((item,idx)=>{
          return <button key={idx} onClick={handleFilter} name="category" value={item} className="btn category-btn" >{item}</button>
        })}
      </div>
      <div className="form-control">
        <h5>company</h5>
        <select name="company" onChange={handleFilter} id="company">
          {newCompany.map((item,idx)=>{
            return <option key={idx} value={item} >{item}</option>
          })}
        </select>
      </div>
      <div className="form-control color-control">
        <h5>colors</h5>
        {newColors.map((item,idx)=>{
          if(item==="all"){
            return <button key={idx} onClick={handleFilter} name="colors" value={item} className="color-btn all" >{item}</button>
          }
          return <button key={idx} onClick={handleFilter} name="colors" value={item} className="color-btn" style={{background:item}}></button>
        })}
      </div>
      <div className="form-control">
        <h5>price</h5>
        <p>${current_price/100}</p>
        <input
          onChange={handleFilter}
          type="range"
          name="current_price"
          id="price"
          min={min_price}
          max={max_price}
          value={current_price}
        />
      </div>
      <div className="form-control">
        <label htmlFor="shipping">shipping</label>
        <input type="checkbox" onChange={handleFilter} checked={filter.shipping} name="shipping" />
      </div>
      <button className="btn cleart-btn">cleart all</button>
    </Form>
  );
};

const Form = styled.form`
      .search{
        border:1px solid black;
        width:150px;
        border-radius:5px;
        margin-bottom:2rem;
      }
    .form-control{
        margin-bottom:1rem;
        .category-btn{
          display:block;
          margin-bottom:0.5rem;
        }
        .color-control{
          display:flex;
        }
        .color-btn{
          width:1rem;
          height:1rem;
          display: inline-block;
          border-radius:50%;
          margin-right:0.4rem;
        }
        h5{
            margin-bottom:0.5rem;
            font-weight:bold;
            font-size:1.4rem;
        }
    }
    .btn{
        box-shadow:1px 1px 1px 1px rgba(0,0,0,1);
    }
`;

export default Filter;
