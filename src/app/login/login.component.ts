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
    this.auth.logUser(loginDetails).subscribe(
      data=>{
      localStorage.setItem('token', data.token)

        this.router.navigate(
         [ data.role === 'admin'?'/admin':'/']
        )
      },
      error=>{
          this.error=true
          this.errorMessage= error.error.errorMessage
      }
      
    )
    
}

}
