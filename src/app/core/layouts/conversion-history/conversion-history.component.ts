import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CurrenciesSigns, ECurrencies} from "../../enums/ECurrencies.enum";

@Component({
  selector: 'app-conversion-history',
  templateUrl: './conversion-history.component.html',
  styleUrls: ['./conversion-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConversionHistoryComponent {
  tableDataSource$: Observable<any>;
  currenciesSigns = CurrenciesSigns;
  currenciesMap = ECurrencies;
  displayedColumns: string[] = ['id', 'clientName', 'personalNumber', 'fromCurrency', 'toCurrency', 'amount', 'rate', 'date'];

  constructor(private store: Store<any>) {
    this.tableDataSource$ = store.select('exchange');
  }

}
