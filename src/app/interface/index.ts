export interface User{
     names:string
     email:string
     password:string
}



export interface Message{
    error:boolean
    token:string
    message:string
    errorMessage:string
}

export interface Product{
   productName :string
   productDescription:string
   sellingAt:number
   productUrl:string
   price:number
}


export interface Product1{
   id:string
   productName :string
   productDescription:string
   sellingAt:number
   ProductUrl:string
   price:number
   instock:string
}


export interface Product2{
   id:string
   productName :string
   productDescription:string
   sellingAt:number
   productUrl:string
   price:number
}

export interface LoginDetails {email:string, password:string}
export interface LoginResponse {
     message:string
     role:string, 
     name:string, 
     token:string
     error:boolean}

export interface UserDetail{
    role:string
    names:string
}


export interface UpdateResponse{
    message:string
}