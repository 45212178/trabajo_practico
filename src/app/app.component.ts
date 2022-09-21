import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
   
  }
  cafe:String [] = [
    "https://images.pexels.com/photos/1752806/pexels-photo-1752806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2460822/pexels-photo-2460822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2460822/pexels-photo-2460822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]
  ngOnInit():void {

  }
  title = 'trabajo_practico';
  
}
