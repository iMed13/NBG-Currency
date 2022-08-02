import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationsService} from 'src/app/core/services/notifications.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {formatDate} from '@angular/common';
import {add} from 'src/app/store/exchange/exchange.actions';
import {environment} from 'src/environments/environment';
import {CurrenciesList, DestinationCurrency, ECurrencies} from "../../core/enums/ECurrencies.enum";

interface ICurrency {
  value: number,
  label: string
}

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CurrencyFormComponent implements OnInit {
  form: FormGroup = this._fb.group({});
  exchange: boolean = false;
  destinationCurrency: ICurrency[] = DestinationCurrency;
  currenciesList: ICurrency[] = CurrenciesList;

  constructor(
    private _fb: FormBuilder,
    private _notification: NotificationsService,
    private _https: HttpClient,
    private _store: Store<any>,
    private _cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.form = this._fb.group({
      clientName: ['', Validators.required],
      personalNumber: ['', Validators.required],
      destinationCurrency: [{value: (this.destinationCurrency[0]?.value || ''), disabled: true}, Validators.required],
      originCurrency: [this.currenciesList[1]?.value || '', Validators.required],
      date: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this._notification.sayError("Fill in the missing fields");
      this.form.markAllAsTouched();
      return;
    }
    this.getExchangeRate();
  }


  private getExchangeRate() {
    const formValues = this.form.getRawValue()
    const {originCurrency, date, amount} = formValues;
    const params = new HttpParams({
      fromObject: {
        currencies: ECurrencies[originCurrency],
        date: formatDate(date, 'Y-mm-dd', 'en')
      },
    });

    this._https
      .get<any>(environment.API_URL, {params})
      .subscribe(response => {
        const currencies = response[0]['currencies'];

        if (currencies !== undefined) {
          const exchangeRate = currencies[0]['rate'] * amount;
          this._store.dispatch(add({
            payload: {
              ...formValues,
              rate: exchangeRate,
              date: currencies[0]['date']
            }
          }));
          this.exchange = true;
          this._notification.saySuccess("The operation was successfully added to the list");
          this.refreshForm();
          this._cdr.detectChanges();
        }
      })
  }

  private refreshForm() {
    this.form.reset();
    this.createForm();
  }
}
