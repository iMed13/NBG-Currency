import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ExchangeResultComponent } from './exchange-result/exchange-result.component';



@NgModule({
  declarations: [HeaderComponent, ExchangeResultComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, ExchangeResultComponent]
})
export class LayoutsModule { }
