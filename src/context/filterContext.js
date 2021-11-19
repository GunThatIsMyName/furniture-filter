import React, { createContext, useContext, useEffect, useReducer } from "react";
import { initState, reducer } from "../reducer/filterReducer";
import { addToCart_AC, saveCartItem_LS } from "../utils/action";

const FilterContext=createContext();

const FilterProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initState)
    const handleAddToCart=(data)=>{
        dispatch({type:addToCart_AC,payload:data})
      }
    const handleAmount=(data)=>{
        console.log(data,"??")
    }

    useEffect(()=>{
        localStorage.setItem(saveCartItem_LS,JSON.stringify(state.cart));
    },[state.cart])
    return <FilterContext.Provider value={{...state,handleAddToCart,handleAmount}}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext=()=>{
    return useContext(FilterContext);
}

export default FilterProvider;