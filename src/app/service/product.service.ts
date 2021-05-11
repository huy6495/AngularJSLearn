
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProductService {

    ProductList  = [
        {
            id: 1,
            name: 'Oppo R1',
            image: 'https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg',
            description: 'Sản phẩm của china',
            price: 450,
            invetory: 10,
            rating: 3,
            type: "1"
        },
        {
            id: 2,
            name: 'Samsung Galaxy Note 9',
            image: 'https://thumua24h.vn/wp-content/uploads/2018/11/note-9.jpg',
            description: 'Sản phẩm của Hàn Quốc',
            price: 200,
            invetory: 15,
            rating: 5,
            type: "2"
        }, {
            id: 3,
            name: 'Iphone XS',
            image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_x_256gb_4.jpg',
            description: 'Sản phẩm của US',
            price: 600,
            invetory: 20,
            rating: 4,
            type: "3"
        }
    ];

   
    constructor() { }
    
}