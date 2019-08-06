import { Component, OnInit } from '@angular/core';
import { CoffeeListService } from '../services/coffee-list.service';

import { Router } from '@angular/router';
import { Product } from '../Product';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover/popover.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private products: Product[];
  
 name: string;

  items: any[];
  cart: any[];
  sliderConfig={
    spaceBetween:10,
    centeredSlides:true,
    slidesPerView:1.6,
    //autoplay: true,
    speed: 400,
    
  };

  constructor(private coffeList: CoffeeListService, private router : Router, 
    private popoverController : PopoverController ) {

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
  
   async viewPopover(ev : Event , product){
    const popover = await this.popoverController.create({
      component:  PopoverPage,
      event: ev,
      translucent: true,
      componentProps:{
        item: this.items
      }
    });
    return await popover.present();
  }

  }


