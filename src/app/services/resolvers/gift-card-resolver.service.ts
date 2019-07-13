import { Injectable } from '@angular/core';
import { IGiftCard } from 'src/app/models/gift-card';
import { GiftCardDataService } from '../gift-card-data.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GiftCardResolverService implements Resolve<IGiftCard> {

  constructor(private _giftCardDataService: GiftCardDataService) { }
  resolve(route: ActivatedRouteSnapshot) {
    return this._giftCardDataService.getGiftCard(+route.params['id']);
  }
}
