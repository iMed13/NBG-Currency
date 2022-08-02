import {Injectable} from '@angular/core';
import {NotifierService} from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private _notifier: NotifierService) {
  }

  saySuccess(successMessage: string): void {
    this._notifier.notify('success', successMessage);
  }

  sayError(errorMessage: string): void {
    this._notifier.notify('error', errorMessage);
  }

}
