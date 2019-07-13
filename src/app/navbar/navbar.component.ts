import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  applicationName: string = 'Signature Nails';
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  registerNewGiftcard(): void {
    this._router.navigate(['new-gift-card']);
  }
  navigateToList(): void {
    this._router.navigate(['gift-card-list']);
  }

}
