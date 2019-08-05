import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CoffeeListService } from '../services/coffee-list.service';
import { Router } from '@angular/router';
let HomePage = class HomePage {
    constructor(coffeList, router) {
        this.coffeList = coffeList;
        this.router = router;
        this.sliderConfig = {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 1.6,
            autoplay: true,
            speed: 400,
        };
        this.items = this.coffeList.getProducts();
    }
    ngOnInit() {
        this.cart = this.coffeList.getCart();
        this.items = this.coffeList.getProducts();
    }
    addToCart(product) {
        this.coffeList.addProduct(product);
    }
    openCart() {
        this.router.navigate(['/cart']);
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [CoffeeListService, Router])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map