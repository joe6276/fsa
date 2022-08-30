import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../ProductService';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
form!:FormGroup 
loading=false
convertedUrl!:string
  constructor(private fb :FormBuilder, private http:HttpClient,private router:Router ,private productService:ProductService) { }

  ngOnInit(): void {
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

  addProduct(){
    this.productService.addProduct({...this.form.value, productUrl:this.convertedUrl}).subscribe(data=>{
      console.log(data);
      
    })  
    this.productService.getProducts()
    this.router.navigate(['/admin/products'])
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
