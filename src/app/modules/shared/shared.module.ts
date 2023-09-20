import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseCardComponent } from 'src/app/components/house-card/house-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaxPipe } from './tax.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HouseCardComponent,
    TaxPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    HouseCardComponent,
    FormsModule,
    HttpClientModule,
    TaxPipe,
    CommonModule
  ],
})
export class SharedModule { }
