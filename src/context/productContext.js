import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer, initState } from "../reducer/productReducer";
import {
  error_singleData_AC,
  filter_Project_AC,
  filter_update_AC,
  loading_singleData_AC,
  Load_Product,
  store_singleData_AC,
} from "../utils/action";
import { useAppContext } from "./appContext";

const ProductContext = createContext();

const ProdcutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { products_data } = useAppContext();

  const handleFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "current_price") {
      value = Number(e.target.value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({ type: filter_update_AC, payload: { name, value } });
  };

  const getSingleData=async(url)=>{
    dispatch({type:loading_singleData_AC})
    try{
      const response = await fetch(url);
      const data = await response.json();
      dispatch({type:store_singleData_AC,payload:data})
    }
    catch{
      dispatch({type:error_singleData_AC})
    }
  }
  useEffect(() => {
    dispatch({ type: Load_Product, payload: products_data });
    // eslint-disable-next-line
  }, [products_data]);

  useEffect(() => {
    dispatch({ type: filter_Project_AC });
  }, [state.filter]);
  return (
    <ProductContext.Provider value={{ ...state, handleFilter,getSingleData }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};

export default ProdcutProvider;
