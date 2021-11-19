import { error_productItems_AC, loading_productItmes_AC, sidebar_AC, store_prodcutItems_AC } from "../utils/action";

const initState={
    isSidebar:false,
    products_loading:false,
    products_error:false,
    products_data:[],
}

const reducer=(state,action)=>{
    switch(action.type){
        case sidebar_AC:
            let sidebarSwitch=!state.isSidebar;
            return{...state,isSidebar:sidebarSwitch}
        case loading_productItmes_AC:
            return{
                ...state,products_loading:true,products_error:false
            }
        case store_prodcutItems_AC:
            return{
                ...state,
                products_loading:false,
                products_data:action.payload,
            }
            case error_productItems_AC:
                return{
                    ...state,
                    products_loading:false,
                    products_error:true,
            }
        default:
            throw new Error();
    }
}

export {initState,reducer}