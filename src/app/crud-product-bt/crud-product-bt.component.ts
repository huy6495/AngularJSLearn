import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-product-bt',
  templateUrl: './crud-product-bt.component.html',
  styleUrls: ['./crud-product-bt.component.css']
})
export class CrudProductBtComponent implements OnInit {


  productList= [
    {MaSP:1,TenSP:"Sony XZ",Gia:1000},
    {MaSP:2,TenSP:"Sony XZ2",Gia:1000},
    {MaSP:3,TenSP:"HTC U Ultra",Gia:1000},
    {MaSP:4,TenSP:"HTC U12 Plus",Gia:1000},
    {MaSP:5,TenSP:"Iphone XS MAX",Gia:1000},
    {MaSP:6,TenSP:"Iphone XR",Gia:1000},
    {MaSP:7,TenSP:"Xiaomi Mi Note 3",Gia:9900},
    {MaSP:8,TenSP:"Xiaomi Mi 8",Gia:1000},
    {MaSP:9,TenSP:"Galaxy Note 9",Gia:1000},
    {MaSP:10,TenSP:"Galaxy S9 Plus",Gia:1000},
    {MaSP:11,TenSP:"Nokia X9",Gia:1000},
    ];

    maSP!: number;
    tenSP: string="";
    giaSP!: number;


    page =1;
    onAddProduct(){
      this.productList.push({
        MaSP: this.maSP,
        TenSP: this.tenSP,
        Gia: this.giaSP 
      })
    }

    onDelete(id: number){
      this.productList = this.productList.filter((pro)=>pro.MaSP !== id)
    }
  constructor() { }

  ngOnInit(): void {
  }

}
