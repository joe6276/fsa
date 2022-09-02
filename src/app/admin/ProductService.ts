import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product, Product1, Product2, UpdateResponse } from "../interface";



@Injectable({
    providedIn:'root'
})
export class ProductService{
constructor(private http:HttpClient){}
products$!:Observable<Product1[]> 

addProduct(product:Product):Observable<{message:string}>{
    const token = localStorage.getItem('token') as string
    return this.http.post<{message:string}>('http://localhost:4003/products',product,{
        headers:new HttpHeaders({
            token
        })
    })

}

getProducts():Observable<Product1[]>{
      const token = localStorage.getItem('token') as string
    return this.http.get<Product1[]>('http://localhost:4003/products',{
        headers:new HttpHeaders({
            token
        })
    })  
}

deleteProducts(id:string):Observable<{message:string}>{
      const token = localStorage.getItem('token') as string
      return this.http.delete<{message:string}>(`http://localhost:4003/products/${id}`,{
        headers:new HttpHeaders({
            token
        })
    })  
}

updateProduct(product:Product2):Observable<UpdateResponse>{
    const token = localStorage.getItem('token') as string
   return  this.http.patch<UpdateResponse>(`http://localhost:4003/products/${product.id}`, product,{
        headers:new HttpHeaders({
            token
        })
    })
}
}