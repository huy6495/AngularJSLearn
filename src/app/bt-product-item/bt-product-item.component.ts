import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-bt-product-item',
  templateUrl: './bt-product-item.component.html',
  styleUrls: ['./bt-product-item.component.css']
})
export class BtProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addCartEmitter = new EventEmitter()
  addCart(item: Product){
    this.addCartEmitter.emit(item);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
