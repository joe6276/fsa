import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
form!:FormGroup 
loading=false
  constructor(private fb :FormBuilder, private http:HttpClient) { }

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
    console.log(this.form);
    
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
          console.log(data.url);
         
        },
         error => {
            console.log({ error });
          }
        )
    }
  }

}
