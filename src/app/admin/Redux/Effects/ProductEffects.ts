import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ProductsActions from '../Actions/ProductsActions'
import { catchError, concatMap, map, mergeMap, of } from "rxjs";
import { ProductService } from "../../ProductService";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class ProductEffects{
    constructor(private actions:Actions, private productService:ProductService){}

    loadProduct= createEffect(()=>{
        return this.actions.pipe(
            ofType(ProductsActions.LoadProducts),
            concatMap(()=> this.productService.getProducts().pipe(
                map(products=> ProductsActions.LoadProductsSuccess({products})),
                catchError(error=>of(ProductsActions.LoadProductsFailure({error:error})))
            ))
            
        )
    })

    addProduct=createEffect(()=>{
        return this.actions.pipe(
            ofType(ProductsActions.AddProduct),
            mergeMap(action=>this.productService.addProduct(action.newProduct).pipe(
                map(res=>ProductsActions.AddProductSuccess({addMessage:res.message})),
                catchError(error=>of(ProductsActions.AddProductFailure({error:error})))
            ))
        )
    })

    updateProduct= createEffect(()=>{
        return this.actions.pipe(
            ofType(ProductsActions.UpdateProduct),
            mergeMap(action=> this.productService.updateProduct(action.updatedProduct).pipe(
                map(res=> ProductsActions.UpdateproductSuccess({updateMessage:res.message})),
                catchError(error=>of(ProductsActions.UpdateproductFailure({error:error})))
            ))
        )
    })


      deleteProduct= createEffect(()=>{
        return this.actions.pipe(
            ofType(ProductsActions.DeleteProduct),
            mergeMap(action=> this.productService.deleteProducts(action.id).pipe(
                map(res=> ProductsActions.DeleteProductSuccess({deletemessage:res.message})),
                catchError(error=>of(ProductsActions.DeleteProductFailure({error:error})))
            ))
        )
    })
}