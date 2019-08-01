import { Component, OnInit } from '@angular/core';
import { CoffeeListService } from '../services/coffee-list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  selecteditems= [];
  total: number = 0;
  price : number;
  sachet : number;
  
 
   constructor(private coffeList: CoffeeListService, ) { 
  

   }
 
   ngOnInit() {
     let items = this.coffeList.getCart();
     let selected = {};
     for( let obj of items ){
       if(selected[obj.id]){
 
         selected[obj.id].count++;
   

       }else{
         selected[obj.id]={...obj,count:1};
       }
 
     }
 
      this.selecteditems = Object.keys(selected).map(key => selected[key])
     
      this.total = this.selecteditems.reduce((a, b) => a + (b.count * b.price), 0);
      this.price = this.selecteditems.reduce((a, b)=> a +(b.price), 0 );
    
 
   }

   print(){

    window.print();

   }
 
 
}
