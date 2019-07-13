import { Component, OnInit, ViewChild } from '@angular/core';
import { IGiftCard } from '../models/gift-card';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-gift-card-list',
  templateUrl: './gift-card-list.component.html',
  styleUrls: ['./gift-card-list.component.css']
})
export class GiftCardListComponent implements OnInit {
  giftCards: IGiftCard[] = [];
  displayedColumns: string[] = ['id' , 'amount', 'dateSold', 'from', 'to'];
  dataSource: MatTableDataSource<IGiftCard>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.giftCards = this._route.snapshot.data['giftcards'];
    this.dataSource = new MatTableDataSource(this.giftCards);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  viewDetails(giftCard: IGiftCard) {
    this._router.navigate(['gift-card-details', giftCard.id]);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
