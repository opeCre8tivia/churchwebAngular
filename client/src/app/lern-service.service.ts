import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LernServiceService {

  constructor() { }
  getItems(){
   return [
    {name:"Tomatoe", weight:25, price:40},
    {name:"Onions", weight:25, price:10},
    {name:"Rice", weight:35, price:30},
    {name:"Ovacado", weight:15, price:10}
  ]
  }
}
