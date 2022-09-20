import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {
  val1: number = 5;
  
  cafe:String [] = []
  constructor() { }

  ngOnInit(): void {
    this.cafe =[
      "https://www.cronista.com/files/image/370/370045/6151f42329743.jpg",
      "https://imagenes.elpais.com/resizer/TPCoM-EPFsCLqyVr7791rp_pWlY=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/DC56NPRURJFXZYRRS5SNXRZAG4.jpg"
      ]
  }
}
