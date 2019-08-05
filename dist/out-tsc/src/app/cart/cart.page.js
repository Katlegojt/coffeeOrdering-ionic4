import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CoffeeListService } from '../services/coffee-list.service';
let CartPage = class CartPage {
    constructor(coffeList) {
        this.coffeList = coffeList;
        this.selecteditems = [];
        this.total = 0;
    }
    ngOnInit() {
        let items = this.coffeList.getCart();
        let selected = {};
        for (let obj of items) {
            if (selected[obj.id]) {
                selected[obj.id].count++;
            }
            else {
                selected[obj.id] = Object.assign({}, obj, { count: 1 });
            }
        }
        this.selecteditems = Object.keys(selected).map(key => selected[key]);
        this.total = this.selecteditems.reduce((a, b) => a + (b.count * b.price), 0);
    }
    print() {
        window.print();
    }
};
CartPage = tslib_1.__decorate([
    Component({
        selector: 'app-cart',
        templateUrl: './cart.page.html',
        styleUrls: ['./cart.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [CoffeeListService])
], CartPage);
export { CartPage };
//# sourceMappingURL=cart.page.js.map