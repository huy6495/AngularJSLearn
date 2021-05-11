import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';

@Component({
  selector: 'app-bt-gio-hang',
  templateUrl: './bt-gio-hang.component.html',
  styleUrls: ['./bt-gio-hang.component.css']
})
export class BtGioHangComponent implements OnInit {
  @Input() product: Product;

  Cart: CartItem[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
