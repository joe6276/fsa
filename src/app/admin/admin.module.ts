import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CollectionComponent } from './collection/collection.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { IonBackdrop } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';


const routes:Routes=[
    {path:'', component:AdminDashboardComponent, children:[
      {path:'', component:HomeAdminComponent},
      {path:'add', component:AddProductComponent},
      {path:'invent', component:InventoryComponent},
      {path:'collection', component:CollectionComponent}
    ]}
  
]
@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddProductComponent,
    InventoryComponent,
    CollectionComponent,
    HomeAdminComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports:[
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
