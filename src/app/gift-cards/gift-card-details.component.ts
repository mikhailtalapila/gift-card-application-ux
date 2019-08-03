import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IGiftCard } from '../models/gift-card';
import { ITransaction } from '../models/transaction';
import { GiftCardDataService } from '../services/gift-card-data.service';

@Component({
  selector: 'app-gift-card-details',
  templateUrl: './gift-card-details.component.html',
  styleUrls: ['./gift-card-details.component.css']
})
export class GiftCardDetailsComponent implements OnInit {
  giftCard: IGiftCard;
  transaction: ITransaction;
  transactions: ITransaction[] = [];
  errorMessage: string;
  displayError: boolean = false;
  buttonsAreDisabled: boolean = false;
  specificAmountUsedIsVisible = false;
  displayTransactionsTable: boolean = false;
  specificAmount: number;
  transactionMessage: string = 'Card used on ' + this.formatTheDate(new Date());
  transactionDisplayColumns: string[] = ['id', 'date', 'amountUsed', 'transactionNote'];
  dataSource: ITransaction[] = [];
  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _giftCardDataService: GiftCardDataService) { }

  ngOnInit() {
    this.giftCard = this._route.snapshot.data['giftcard'];
    this.transactions = this._route.snapshot.data['transactions'];
    this.dataSource = this.transactions;
    if (this.giftCard.amount <= 0) {
      this.buttonsAreDisabled = true;
    }
    if (this.transactions.length > 0) {
      this.displayTransactionsTable = true;
    }
  }
  navigateToGiftCardList(): void {
    this._router.navigate(['gift-card-list']);
  }
  formatTheDate(date: Date): string {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  useEntireAmount(): void {
    if(this.giftCard === null || this.giftCard === undefined) {
      console.log('unable to locate the gift card');
    } else {
      const amountUsed = this.giftCard.amount;
      this.giftCard.amount = 0;
      this.transaction = {
        id: 0,
        transactionDate: new Date,
        giftCardId: this.giftCard.id,
        amountUsed: amountUsed,
        transactionNote: this.transactionMessage,
        giftCard: this.giftCard
      };
      this._giftCardDataService.createTransaction(this.transaction)
      .subscribe(
        value =>  { 
          this.buttonsAreDisabled = true;
          this.dataSource.push(value);   
          this.displayTransactionsTable = true;       
        },
        (error: any) =>  { 
          this.errorMessage = <any>error;
          this.displayError = true;
        }
      );
    }
    
  }
  useOtherAmount(): void {
    this.specificAmountUsedIsVisible = true;
  }
  useSpecificAmount(): void {
    if(this.giftCard.amount < this.specificAmount) {
      alert('Gift Card amount doesnt have enough balance');
    } else if(this.giftCard.amount == this.specificAmount) {
      const amountUsed = this.giftCard.amount;
      this.giftCard.amount = 0;
      this.transaction = {
        id: 0,
        transactionDate: new Date,
        giftCardId: this.giftCard.id,
        amountUsed: amountUsed,
        transactionNote: this.transactionMessage,
        giftCard: this.giftCard
      };
      this._giftCardDataService.createTransaction(this.transaction)
      .subscribe(
        value =>  { 
          this.buttonsAreDisabled = true;
          this.dataSource.push(value);
          this.displayTransactionsTable = true;
        },
        (error: any) =>  { 
          this.errorMessage = <any>error;
          this.displayError = true;
        }
      );
    } else {
      const amountUsed = this.specificAmount;
      this.giftCard.amount = this.giftCard.amount - this.specificAmount;
      this.transaction = {
        id: 0,
        transactionDate: new Date,
        giftCardId: this.giftCard.id,
        amountUsed: amountUsed,
        transactionNote: this.transactionMessage,
        giftCard: this.giftCard
      };
      this._giftCardDataService.createTransaction(this.transaction)
      .subscribe(
        value =>  { 
          this.dataSource.push(value);
          this.displayTransactionsTable = true;
        },
        (error: any) =>  { 
          this.errorMessage = <any>error;
          this.displayError = true;
        }
      );
    }
    this.specificAmountUsedIsVisible = false;
    this.specificAmount = 0; 
  }
}
