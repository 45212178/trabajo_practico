import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  cafu:String [] = []
  constructor() { }

  ngOnInit(): void {
    this.cafu =[
      "https://www.cronista.com/files/image/370/370045/6151f42329743.jpg",
      "https://imagenes.elpais.com/resizer/TPCoM-EPFsCLqyVr7791rp_pWlY=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/DC56NPRURJFXZYRRS5SNXRZAG4.jpg"
      ]
  }
}
