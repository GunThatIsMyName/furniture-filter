import { addToCart_AC, saveCartItem_LS } from "../utils/action";

const getCartItem=()=>{
    const localData = localStorage.getItem(saveCartItem_LS);
    if(localStorage!==null){
        return JSON.parse(localData);
    }
    return [];
}

export const initState={
    cart:getCartItem(),
}

export const reducer=(state,action)=>{
    switch (action.type) {
        case addToCart_AC:
            const {id,amount,mainColor,item} = action.payload;
            let tempCart = state.cart.find(item=>item.id===id+mainColor);
            
            // temp cart
            if(tempCart){
                const oldItem=state.cart.map(item=>{
                    if(item.stock<=item.amount+item.stock){
                        return {...item,amount:item.stock}
                    }else{
                        return{...item,amount:item.stock+item.amount};
                    }
                })
                return {...state,cart:[...state.cart,oldItem]}
            }else{
                const newItem={
                    id:id+mainColor,
                    amount,
                    mainColor,
                    image: item.images[0].url,
                    name: item.name,
                    price: item.price,
                }
                return {...state,cart:[...state.cart,newItem]}
            }
        default:
            throw new Error();
    }
}