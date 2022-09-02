import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product1 } from 'src/app/interface';
import { ProductService } from '../ProductService';
import { getProducts, getshowDiscountState, getSomething, ProductState } from '../Redux/Reducer/ProductReducer';
import * as Actions from '../Redux/Actions/ProductsActions'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$=this.store.select(getProducts)
  showDiscount=this.store.select(getshowDiscountState) 
  constructor( private store :Store<ProductState> , 
    private router:Router , private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.store.dispatch(Actions.LoadProducts())
  }

   getDiscount(price:number , selling:number){
        const diff = price - selling
        return diff/selling
        }

        onChangeInput(){
          this.store.dispatch(Actions.SHOWDISCOUNT())
        }

        onNavigate(id:string){
          this.router.navigate([id], {relativeTo:this.route})
        }
        showProduct(id:string){

        }
      deleteProduct(id:string){
          this.store.dispatch(Actions.DeleteProduct({id}))
          this.store.dispatch(Actions.LoadProducts())
        }
}
