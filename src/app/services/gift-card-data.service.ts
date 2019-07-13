import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IGiftCard } from '../models/gift-card';
import { ITransaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class GiftCardDataService {
  private _giftCardsURL = 'https://localhost:44318/api/gc';
  
  constructor(private _http: HttpClient) { }
  getGiftCards(): Observable<IGiftCard[]> {
    return this._http.get<IGiftCard[]>(this._giftCardsURL).pipe(tap(), catchError(this.handleError));
  }
  getGiftCard(giftCardId: number): Observable<IGiftCard> {
    return this._http.get<IGiftCard>(this._giftCardsURL + '/' + giftCardId).pipe(tap(), catchError(this.handleError));
  }
  createGiftCard(giftCard: IGiftCard): Observable<IGiftCard> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });    
    return this._http.post<IGiftCard>(this._giftCardsURL, giftCard, { headers: headers })
      .pipe(
        tap(data => console.log('created Gift card: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  } 
  createTransaction(transaction: ITransaction): Observable<ITransaction> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });    
    return this._http.post<ITransaction>(this._giftCardsURL +'/posttransaction', transaction, { headers: headers })
      .pipe(
        tap(data => console.log('created transaction: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  getGiftCardTransactions(giftCardId: number): Observable<ITransaction[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); 
    return this._http.get<ITransaction[]>(this._giftCardsURL + '/transaction/giftcard/' + giftCardId).pipe(tap(), catchError(this.handleError)); 
  }
  private handleError(err) {
    let errorMessage = '';
    if(err.error instanceof Error) {
      errorMessage = 'An error has occurred';
    } else {
      errorMessage = 'Server returned an error';
    }
    return throwError(errorMessage);
  }
}
