import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { CoffeeListService } from 'src/app/services/coffee-list.service';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  itemList1 :any;
  cart1:any[];

  constructor(private navParams: NavParams, private popoverController: PopoverController, private coffeList: CoffeeListService) {
    
   
   }

  ngOnInit() {

    this.itemList1 = this.navParams.get('item');
   
    
      
  }

  closePopover(){

    this.popoverController.dismiss();
  }

}
