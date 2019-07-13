import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  registerNewGiftcard(): void {
    this._router.navigate(['new-gift-card']);
  }
}
