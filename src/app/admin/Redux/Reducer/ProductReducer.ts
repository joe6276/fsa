import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Product1 } from "src/app/interface";
import * as Actions from '../Actions/ProductsActions'
 
export interface ProductState{
    showDiscount:boolean
    productid:string
    products:Product1[]
    something:string
    productsError:string
    addMessage:string
    error:string
    updateMessage:string
    deleteMessage:string
 }


 const initialState:ProductState={
    showDiscount:true,
    productid:'',
    products:[],
    something:'',
    productsError:'',
    addMessage:'',
    error:'',
    updateMessage:'',
    deleteMessage:''
 }

 const getProductFeatureState= createFeatureSelector<ProductState>('product')

 export const getshowDiscountState= createSelector(
    getProductFeatureState,
    state=>state.showDiscount
 )

  export const getSomething= createSelector(
    getProductFeatureState,
    state=>state.something
 )
 export const getProducts=createSelector(
   getProductFeatureState,
   state=>state.products
 )

  export const getProductid=createSelector(
   getProductFeatureState,
   state=>state.productid
 )

 export const getProduct=createSelector(
   getProductFeatureState,
   getProductid,
   (state,id)=>state.products.find(product=>product.id===id)
   
 )
export const ProductReducer = createReducer(
    initialState,
    on(Actions.SHOWDISCOUNT, (state:ProductState)=>{
        return {...state,showDiscount:!state.showDiscount}
    }),on(Actions.LoadProductsSuccess, (state, action):ProductState=>{
      return{...state, products:action.products}
    }),on(Actions.LoadProductsFailure, (state, action):ProductState=>{
      return{...state, productsError:action.error}
    }),on(Actions.SelectedId, (state,action):ProductState=>{
         return{...state, productid:action.id}
    }),on(Actions.AddProductSuccess,(state,action):ProductState=>{
         return{...state, addMessage:action.addMessage}
    }),
    on(Actions.AddProductFailure,(state,action):ProductState=>{
         return{...state, error:action.error}
    }),on(Actions.UpdateproductSuccess, (state,action):ProductState=>{
         return{...state, updateMessage:action.updateMessage}
    }),on(Actions.UpdateproductFailure, (state,action):ProductState=>{
         return{...state, error:action.error}
    }),on(Actions.DeleteProductSuccess, (state,action):ProductState=>{
         return{...state, deleteMessage:action.deletemessage}
    }),on(Actions.DeleteProductFailure, (state,action):ProductState=>{
         return{...state, error:action.error}
    })
)




