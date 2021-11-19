import { error_singleData_AC, filter_Project_AC, filter_update_AC, loading_singleData_AC, Load_Product, store_singleData_AC } from "../utils/action";
import { priceConverter } from "../utils/format";

const initState = {
  productList: [],
  filteredProject: [],
  loadingSingleData:false,
  errorSingleData:false,
  singleData:{},
  filter:{
      search:"",
      category:"all",
      company:"all",
      colors:"all",
      min_price: 0,
      max_price: 0,
      current_price: 0,
      shipping:false,
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case Load_Product:
      const data = action.payload;
      const maxPirce = priceConverter(data)
      return {
        ...state,
        productList: data,
        filteredProject: data,
        filter:{
            ...state.filter,
            max_price: maxPirce,
            current_price: maxPirce,
        }
      };
    case filter_update_AC:
        const {name,value}=action.payload;
        return{
            ...state,filter:{...state.filter, [name]:value}
        }
    case filter_Project_AC:
        const {productList,filter}=state;
        const {search,category,company,colors,current_price,shipping}=filter;
        let list = [...state.productList];
        if(search!==""){
            list=list.filter(item=>item.name.includes(search))
        }
        if(category!=="all"){
            list=list.filter(item=>item.category===category);
        }
        if(company!=="all"){
            list=list.filter(item=>item.company===company);
        }
        if(colors!=="all"){
            list=list.filter(item=>{
                return item.colors.find(color=>{
                    return color === colors;
                })
            });
        }
        list=list.filter(item=>{
            return item.price<=current_price;
        })
        if(shipping){
            list=list.filter(item=>{
                return item.shipping;
            })
        }
        return{
            ...state,filteredProject:list
        }
    case loading_singleData_AC:
        return{
            ...state,loadingSingleData:true,errorSingleData:false
        }
    case store_singleData_AC:
        return{
            ...state,singleData:action.payload,loadingSingleData:false
        }
    case error_singleData_AC:
        return{
            ...state,errorSingleData:true,loadingSingleData:false
        }
    default:
      throw new Error();
  }
};

export { initState, reducer };
