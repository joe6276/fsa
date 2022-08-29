import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@ViewChild('form') register!:NgForm
  constructor() { }

  ngOnInit(): void {
  }

  OnSubmit(){
    console.log(this.register);
    
  }
  

}
