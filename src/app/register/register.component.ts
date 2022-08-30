import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@ViewChild('form') register!:NgForm
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  OnSubmit(){
    const value= this.register.value
    this.auth.AddUser(value).subscribe(data=>console.log(data),
      error=>console.log(error)  
      )
  }
  

}
