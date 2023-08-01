import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from 'src/app/components/card/card.component';
import { FormComponent } from 'src/app/components/form/form.component';
import { PurchaseComponent } from 'src/app/components/purchase/purchase.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { HomepageContentComponent } from 'src/app/components/homepage-content/homepage-content.component';
import { DialogUpdateComponent } from "src/app/components/dialog-update/dialog-update.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    FormComponent,
    CardComponent,
    PurchaseComponent,
    NavbarComponent,
    HomepageContentComponent,
    DialogUpdateComponent
  ],
  imports: [
    CommonModule,
    MdbCarouselModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    CommonModule,
    MdbCarouselModule,
    ReactiveFormsModule,
    FormComponent,
    CardComponent,
    PurchaseComponent,
    NavbarComponent,
    HomepageContentComponent,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
