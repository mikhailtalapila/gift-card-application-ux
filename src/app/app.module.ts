import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarMenuComponent } from './navbar/navbar-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatTableModule, MatCardModule, MatInputModule, MatDialogModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';
import { GiftCardListComponent } from './gift-cards/gift-card-list.component';
import { GiftCardDetailsComponent } from './gift-cards/gift-card-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NewGiftCardComponent } from './gift-cards/new-gift-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GiftCardIdDialogComponent } from './gift-cards/dialog/gift-card-id-dialog.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarMenuComponent,
    GiftCardListComponent,
    GiftCardDetailsComponent,
    NewGiftCardComponent,
    GiftCardIdDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,    
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    FormsModule,    
    ReactiveFormsModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  entryComponents: [GiftCardIdDialogComponent]
})
export class AppModule { }
