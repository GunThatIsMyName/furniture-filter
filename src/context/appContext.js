import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { initState, reducer } from "../reducer/appReducer";
import { error_productItems_AC, loading_productItmes_AC, sidebar_AC, store_prodcutItems_AC } from "../utils/action";
import { products_url } from "../utils/help";

const AppContext=createContext();

const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initState)

    const handleSidebar=()=>{
        dispatch({type:sidebar_AC})
    }
    const getProdcutItems=async()=>{
        dispatch({type:loading_productItmes_AC})
        try{
            const response = await fetch(products_url);
            const data = await response.json();
            dispatch({type:store_prodcutItems_AC,payload:data})
        }
        catch(error){
            dispatch({type:error_productItems_AC,payload:error})
        }
    }
    
    useEffect(()=>{
        getProdcutItems();
    },[])

    return(
        <AppContext.Provider value={{...state,handleSidebar}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext=()=>{
    return useContext(AppContext)
}

export default AppProvider;