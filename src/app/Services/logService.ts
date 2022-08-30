import { Injectable } from "@angular/core"


@Injectable({
    providedIn:'root'
})
export class logService{
    logged=false
   private token= localStorage.getItem('token') as string

    login(){
       this.token?this.logged=true:false
    }
    logout(){
        !this.token?this.logged=false: true
    }

}