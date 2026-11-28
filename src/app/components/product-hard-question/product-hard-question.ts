import { Component, computed } from '@angular/core';

interface Category{
  id:number;
  type: string;
}
interface Product{
  Prodname: string;
  category: Category;
  quantity: number;
  price: number;
}
@Component({
  imports: [],
  selector: 'app-product-hard-question',
  styleUrl: './product-hard-question.css',
  templateUrl: './product-hard-question.html',
})
export class ProductHardQuestion {
  productList : Product[]=[
    {Prodname:'iPhone18', category: {id:1,type:'Phone'}, quantity:2, price:100200},
    {Prodname:'Mango', category:  {id:2, type:'Fruit'}, quantity:8 , price:300},
    {Prodname:'RealMe', category:  {id:1, type:'Phone'}, quantity:3, price:30000},
    {Prodname:'Potato', category:  {id:3, type:'Vegetable'}, quantity:40, price:100}
  ];

total = computed(() =>
  this.productList.reduce((sum, p) => sum + p.price * p.quantity, 0)
);
    
}
