import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
providedIn:'root'
})
export class AuthServices implements CanLoad{
    constructor(private router:Router){}
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        const token = localStorage.getItem('token') as string

        if(token){
            return true
        }
        this.router.navigate(['/'])
        return false

    }
}