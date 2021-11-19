const typeConverter=(data,type)=>{
    let newType = data.map(item=>item[type]);
    if(type==="colors"){
        newType=newType.flat();
    }
    return ["all",...new Set(newType)];
}

const priceConverter=(data)=>{
    let price = data.map((item) => item.price);
    return Math.max(...price)
}

export {typeConverter,priceConverter};