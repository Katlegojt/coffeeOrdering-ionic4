import { Component, OnInit } from '@angular/core';
import { CoffeeListService } from '../services/coffee-list.service';

import { Router } from '@angular/router';
import { Product } from '../Product';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private products: Product[];
  
  sachets=0;
  sevings=0;

  items: any[];
  cart: any[];
  sliderConfig={
    spaceBetween:10,
    centeredSlides : true,
    slidesPerView: 1.6,
    autoplay: true,
    speed: 400,
    
  };

  constructor(private coffeList: CoffeeListService, private router : Router) {

    this.items = this.coffeList.getProducts();
    
    

  }
  ngOnInit() {
    this.cart = this.coffeList.getCart();
    this.items = this.coffeList.getProducts();
 
  }

  addToCart(product){
    this.coffeList.addProduct(product);
  }

  openCart(){
    this.router.navigate(['/cart']);
  }
  
  

}
