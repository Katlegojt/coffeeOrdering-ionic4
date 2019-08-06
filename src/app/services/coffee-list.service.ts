import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeListService {

  constructor() { }

  private cart =[];
private data = [
  {category: 'Basic Coffee',
  expanded: true,
  products:[
    {id:0, name: 'Cafe Tea', price: 5.50, description:'gently wrapped favorable tea', src:'/assets/images/download (1).png' },
    {id:1, name: 'Cappuccino', price: 6.50, description:'espresso, streamed milk, foam,', src:'/assets/images/beverage-break-caffeine.jpg'},
    {id:2, name: 'Espresso', price: 6.75, description: 'arabica dark roast 100%', src:'/assets/images/aromatic-blur-caffeine.jpg'},
    {id:3, name: 'Cafe Chai', price: 5.50, description:'our spicy nutty flavoured tea', src:'/assets/images/download (2).png'}
  ]
  },
  {category: 'Latte & Maccheiato',
  expanded: true,
  products:[
    {id:4, name: 'Cafe Latte', price: 6.50, description:'our soriginal blend latte', src:'/assets/images/artistic-beverage-caffeine.jpg'},
    {id:5, name: 'Vanilla Bean Latte', price: 7.25, description:'sweetened vanilla blend latte', src:'/assets/images/beverage-brown-caffeine.jpg'},
    {id:6, name: 'Acai & Berry Latte ', price: 7.50, description:'acai & berry blend latte', src:'/assets/images/berry.webp'},
    {id:7, name: 'Matcha Macchiato ', price: 8.00, description:'green tea blend macchiato', src:'/assets/images/beverage-blur-caffeine-685529.jpg'},
    {id:8, name: 'Mint Macchiato', price: 8.00, description:'fresh blend mint flavoured macchiato', src:'/assets/images/art-background-beverage-414720.jpg'}
  ],

  },

  
  
];



  //returns a list of all coffe items
  getProducts(){

    return this.data;
  }
//returns a cart of coffee items
  getCart(){

    return this.cart;
  }
//adds a product in the cart
  addProduct(product){
  this.cart.push(product);
  }



  
}
