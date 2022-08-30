import { Component, OnInit } from '@angular/core';
import { logService } from './Services/logService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-com';
  logged!:boolean
  constructor(private log:logService){}
  ngOnInit(){
    this.logged= this.log.logged
  }

  logout(){
    this.log.logout()
  }
    
}
