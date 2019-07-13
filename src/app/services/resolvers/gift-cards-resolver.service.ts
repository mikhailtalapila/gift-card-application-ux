import { Injectable } from '@angular/core';
import { IGiftCard } from 'src/app/models/gift-card';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { GiftCardDataService } from '../gift-card-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftCardsResolverService implements Resolve<IGiftCard[]> {
  resolve(route: ActivatedRouteSnapshot): Observable<IGiftCard[]> {
    return this._giftCardDataService.getGiftCards();
  }

  constructor(private _giftCardDataService: GiftCardDataService) {
   }
}
