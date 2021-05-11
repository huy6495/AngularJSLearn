import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-bt-mua-hang',
  templateUrl: './bt-mua-hang.component.html',
  styleUrls: ['./bt-mua-hang.component.css']
})
export class BtMuaHangComponent implements OnInit{
  filterVal: string = "0";
  test(){
    if(this.filterVal != "0"){
      this.filterArr = this.productList.filter((item)=>item.type === this.filterVal)
          }else{
            this.filterArr= this.productList;
          }
  }
  
  filterArr: Product[]=[{
    id: 1,
    name: 'Oppo R1',
    image: 'https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg',
    description: 'Sản phẩm của china',
    price: 450,
    invetory: 10,
    rating: 3,
    type: "Oppo"
},
{
    id: 2,
    name: 'Samsung Galaxy Note 9',
    image: 'https://thumua24h.vn/wp-content/uploads/2018/11/note-9.jpg',
    description: 'Sản phẩm của Hàn Quốc',
    price: 200,
    invetory: 15,
    rating: 5,
    type: "Samsung"
}, {
    id: 3,
    name: 'Iphone XS',
    image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_x_256gb_4.jpg',
    description: 'Sản phẩm của US',
    price: 600,
    invetory: 20,
    rating: 4,
    type: "Apple"
}
]
 
  productList: Product[]=[
    {
        id: 1,
        name: 'Oppo R1',
        image: 'https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg',
        description: 'Sản phẩm của china',
        price: 450,
        invetory: 10,
        rating: 3,
        type: "Oppo"
    },
    {
        id: 2,
        name: 'Samsung Galaxy Note 9',
        image: 'https://thumua24h.vn/wp-content/uploads/2018/11/note-9.jpg',
        description: 'Sản phẩm của Hàn Quốc',
        price: 200,
        invetory: 15,
        rating: 5,
        type: "Samsung"
    }, {
        id: 3,
        name: 'Iphone XS',
        image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_x_256gb_4.jpg',
        description: 'Sản phẩm của US',
        price: 600,
        invetory: 20,
        rating: 4,
        type: "Apple"
    }
]
   

  addItem(prod: Product){
    let {image,name,price} = prod;
    let addCartItem = {hinhAnh: image, tenSP: name, gia: price};
    
    
  }

  constructor(public productSv: ProductService ) {

    
   }


    
   
  ngOnInit(): void {
    

    
    }

}
