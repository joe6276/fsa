import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginDetails } from '../interface';
import { logService } from '../Services/logService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild('form')form!:NgForm
  constructor(private auth:AuthService, private router:Router, private log:logService) { }
  errorMessage!:string
  error=false
  ngOnInit(): void {
  }

  onSubmit(){
    this.log.login()
    const loginDetails:LoginDetails =this.form.value;
    this.auth.logUser(loginDetails).subscribe(data=>{
      
      if(data.error){
          this.errorMessage=data.errorMessage
           this.error=true
      }
      this.error=false
      localStorage.setItem('token', data.token)
      const token = localStorage.getItem('token')
      if(token){
        this.auth.checkUser().subscribe(dta=>{
          dta.role==='admin'? this.router.navigate(['/admin']):'/'
        })
      }
    },
    error=>{
      console.log(error);
    }
    )
    
}

}
