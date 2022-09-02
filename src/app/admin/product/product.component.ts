import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getProduct, ProductState } from '../Redux/Reducer/ProductReducer';
import * as Actions from '../Redux/Actions/ProductsActions'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id!:string
  product$=this.store.select(getProduct)
  constructor( private store :Store<ProductState>, private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      this.id= param['id']
    })
    this.store.dispatch(Actions.SelectedId({id:this.id}))
  }

}
