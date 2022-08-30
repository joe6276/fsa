import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product1 } from 'src/app/interface';
import { ProductService } from '../ProductService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public productService:ProductService) { }
  products$:Observable<Product1[]> = this.productService.getProducts()
  ngOnInit(): void {

  }

}
