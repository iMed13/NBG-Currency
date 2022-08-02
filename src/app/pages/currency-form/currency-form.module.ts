import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFormComponent } from './currency-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ConversionHistoryModule } from 'src/app/core/layouts/conversion-history/conversion-history.module';

const routes: Routes = [
  {
    path: '',
    component: CurrencyFormComponent,
  },
];
@NgModule({
  declarations: [CurrencyFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ConversionHistoryModule
  ],
  exports: [CurrencyFormComponent],
})
export class CurrencyFormModule { }
