import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import {  ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from 'src/app/components/card/card.component';
import { FormComponent } from 'src/app/components/form/form.component';
import { PurchaseComponent } from 'src/app/components/purchase/purchase.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { HomepageContentComponent } from 'src/app/components/homepage-content/homepage-content.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [FormComponent, CardComponent,PurchaseComponent,NavbarComponent,HomepageContentComponent],
  imports: [
    CommonModule,
    MdbCarouselModule,
    ReactiveFormsModule,
    MatDialogModule,
    
  ],
  exports:[
    CommonModule,
    MdbCarouselModule,
    ReactiveFormsModule,
    FormComponent,
    CardComponent,
    PurchaseComponent,
    NavbarComponent,
    HomepageContentComponent
  ]
})
export class SharedModule { }
