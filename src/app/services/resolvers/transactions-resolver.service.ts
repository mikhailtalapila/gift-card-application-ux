import { Injectable } from '@angular/core';
import { ITransaction } from 'src/app/models/transaction';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { GiftCardDataService } from '../gift-card-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsResolverService implements Resolve<ITransaction[]> {


  resolve(route: ActivatedRouteSnapshot): Observable<ITransaction[]> {
    return this._giftCardDataService.getGiftCardTransactions(+route.params['id']);
  }

  constructor(private _giftCardDataService: GiftCardDataService) {
   }
}
