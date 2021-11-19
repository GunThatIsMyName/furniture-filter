import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer, initState } from "../reducer/productReducer";
import {
  filter_Project_AC,
  filter_update_AC,
  Load_Product,
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
  useEffect(() => {
    dispatch({ type: Load_Product, payload: products_data });
    // eslint-disable-next-line
  }, [products_data]);

  useEffect(() => {
    dispatch({ type: filter_Project_AC });
  }, [state.filter]);
  return (
    <ProductContext.Provider value={{ ...state, handleFilter }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};

export default ProdcutProvider;
