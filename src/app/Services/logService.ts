import { Injectable } from "@angular/core"


@Injectable({
    providedIn:'root'
})
export class logService{
    logged=false
   private token= localStorage.getItem('token') as string

    login(){
    //    localStorage.setItem("token", "hggddtgtd:gretre:yttyrhfdhgd")
    }
    logout(){
        localStorage.clear()
    }

    isLoggedIn(){
        return !!localStorage.getItem('token');
    }

}