import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbAlertModule, NgbPaginationModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {NotifierModule} from 'angular-notifier';
import {LayoutsModule} from './core/layouts/layouts.module';
import {StoreModule} from '@ngrx/store';
import {exchangeReducer} from './store/exchange/exchange.reducer';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/currency-form/currency-form.module').then((m) => m.CurrencyFormModule),
  },
  {path: '**', redirectTo: ''},
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbModule,
    NgbAlertModule,
    LayoutsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({exchange: exchangeReducer}),
    RouterModule.forRoot(routes),
    NotifierModule.withConfig({
      behaviour: {
        autoHide: 1000,
        showDismissButton: true,
      },
      position: {
        horizontal: {
          position: 'left',
          distance: 16,
        },
        vertical: {
          position: 'bottom',
          distance: 30,
          gap: 16,
        },
      },
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
