import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductState } from '../Redux/Reducer/ProductReducer';
import * as Actions from '../Redux/Actions/ProductsActions'
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
form!:FormGroup
loading=false
convertedurl!:string
  constructor(private fb:FormBuilder,private http:HttpClient,
    private store:Store<ProductState>) { }

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
  }

  updateProduct(){

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
          this.convertedurl= data.url
         
        },
         error => {
            console.log({ error });
          }
        )
    }
  }

}
