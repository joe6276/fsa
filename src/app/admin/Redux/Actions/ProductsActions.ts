import { createAction, props } from "@ngrx/store";
import { Product, Product1, Product2, UpdateResponse } from "src/app/interface";



export const SHOWDISCOUNT = createAction('SHOW_DISCOUNT')

export const SelectedId= createAction('SelectedId', props<{id:string}>())
export const LoadProducts= createAction('LoadProduct')
export const LoadProductsSuccess= createAction('LoadProductSuccess', 
props<{products:Product1[]}>()
)
export const LoadProductsFailure= createAction('LoadProduct', 
props<{error:string}>()
)


export const AddProduct= createAction('AddProduct',
props<{newProduct:Product}>()
)
export const AddProductSuccess= createAction('AddProductSuccess',
props<{addMessage:string}>()
)
export const AddProductFailure= createAction('AddProductFailure',
props<{error:string}>()
)


export const UpdateProduct= createAction('UpdateProduct',
props<{updatedProduct:Product2}>()
)
export const UpdateproductSuccess= createAction('UpdateproductSuccess',
props<{updateMessage:string}>()
)
export const UpdateproductFailure= createAction('UpdateproductFailure',
props<{error:string}>()
)


export const DeleteProduct= createAction('DeleteProduct',
props<{id:string}>()
)
export const DeleteProductSuccess= createAction('DeleteProductSuccess',
props<{deletemessage:string}>()
)
export const DeleteProductFailure= createAction('DeleteProductFailure',
props<{error:string}>()
)