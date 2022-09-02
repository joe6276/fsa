import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CollectionComponent } from './collection/collection.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from './Redux/Reducer/ProductReducer';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './Redux/Effects/ProductEffects';


const routes:Routes=[
    {path:'', component:AdminDashboardComponent, children:[
      {path:'', component:HomeAdminComponent},
      {path:'add', component:AddProductComponent},
      {path:'invent', component:InventoryComponent},
      {path:'collection', component:CollectionComponent},
      {path:'products', component:ProductsComponent},
      {path:'products/:id', component:ProductComponent},
      {path:'products/:id/edit', component:ProductEditComponent}
    ]}
  ]
  
@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddProductComponent,
    InventoryComponent,
    CollectionComponent,
    HomeAdminComponent,
    ProductsComponent,
    ProductComponent,
    EditProductComponent,
    ProductComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('product', ProductReducer),
    EffectsModule.forFeature([ProductEffects])
  ],
  exports:[
    RouterModule
  ],
  providers:[],
 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
