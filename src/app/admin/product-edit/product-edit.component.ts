import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as Actions from '../Redux/Actions/ProductsActions'
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product2 } from 'src/app/interface';
import { getProduct, ProductState } from '../Redux/Reducer/ProductReducer';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
form!:FormGroup 
loading=false
id!:string
convertedUrl!:string
  constructor(private fb:FormBuilder, private http:HttpClient , 
    private router:Router, private route:ActivatedRoute , private store:Store<ProductState>) { }

  ngOnInit(): void {
    this.store.dispatch(Actions.LoadProducts())
      this.form=this.fb.group(
     {
       productName:[],
       productDescription:[],
       productUrl:[],
       sellingAt:[],
       price:[]
     }
    )
    this.route.params.subscribe(param=>{
      this.id= param['id']
    })
    this.store.dispatch(Actions.SelectedId({id:this.id}))
    this.store.select(getProduct).subscribe(product=>{
     if(product){
       this.form.patchValue({
       productName:product.productName,
       productDescription:product.productDescription,
       sellingAt:product.sellingAt,
       price:product.price
      })
     }
    })
  }
updateProduct(){ 
  const updatedProduct:Product2={...this.form.value, id:this.id, productUrl:this.convertedUrl}
  this.store.dispatch(Actions.UpdateProduct({updatedProduct}))
  this.store.dispatch(Actions.LoadProducts())
  this.router.navigate(['../../'], {relativeTo:this.route})

}
onChange(event:Event){
   this.loading=true
    const target= event.target! as HTMLInputElement
    const files= target.files

    if(files){
      console.log(files[0]);
      const formData= new FormData()
      formData.append("file", files[0]);
      formData.append("upload_preset", "testing");
      formData.append("cloud_name", "joendambuki16");
       this.http.post<{url: string}>(
        "https://api.cloudinary.com/v1_1/joendambuki16/image/upload", formData)
        .subscribe(data=>{
          this.loading=false
          this.convertedUrl= data.url
         
        },
         error => {
            console.log({ error });
          }
        )
    }
  }

}
