import { Component } from '@angular/core';
import { CardBlockComponent } from '../card-block/card-block.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CardBlockComponent, NgFor],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent {
  products = [
    {id: 1, name: 'product 1', price: 110, description: 'product1 text description', color: '#005b7c'},
    {id: 2, name: 'product 2', price: 120, description: 'product2 text description', color: '#008eab'},
    {id: 3, name: 'product 3', price: 130, description: 'product3 text description', color: '#01bcc6'},
    {id: 4, name: 'product 4', price: 140, description: 'product4 text description', color: '#d5d1ca'},
    {id: 5, name: 'product 5', price: 150, description: 'product5 text description', color: '#efefee'}
  ];

  indexId: number = 0;
  idInfoApp(newItem: number) {
    this.indexId = newItem - 1;
  }

  btnActiveF: boolean = false;
  discount: number = 100;
  applyDiscount(discount: number) {
    this.btnActiveF = true;
    this.discount = discount;
    this.products.forEach((element) => console.log(element.price));
  }
}