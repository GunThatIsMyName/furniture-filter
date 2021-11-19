import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { single_product_url } from "../utils/help";
import {getSingleData,useProductContext} from "../context/productContext";
import SingleItem from "../components/singleItem";

const SingleProject =()=>{
    const {getSingleData,loadingSingleData,errorSingleData,singleData}=useProductContext();
    const {pathname}=useLocation();
    const urlID = `${single_product_url}${pathname.substr(10)}`;

    useEffect(()=>{
        getSingleData(urlID);
        // eslint-disable-next-line
    },[pathname])
    if(loadingSingleData){
        return <h1>LOADIGN...</h1>
    }
    if(errorSingleData){
        return <h1>ERROR...</h1>
    }
    return(
        <SingleItem item={singleData} />
    )
}


export default SingleProject;