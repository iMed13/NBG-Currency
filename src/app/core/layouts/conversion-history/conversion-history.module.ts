import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversionHistoryComponent } from './conversion-history.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [ConversionHistoryComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [ConversionHistoryComponent]
})

export class ConversionHistoryModule { }
