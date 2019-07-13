import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IGiftCard } from 'src/app/models/gift-card';

@Component({
  selector: 'app-gift-card-id-dialog',
  templateUrl: './gift-card-id-dialog.component.html',
  styleUrls: ['./gift-card-id-dialog.component.css']
})
export class GiftCardIdDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GiftCardIdDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IGiftCard) { }

  ngOnInit() {
  }
  onOkClick(): void {
    this.dialogRef.close();
  }
}
