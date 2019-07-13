import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiftCardListComponent } from './gift-cards/gift-card-list.component';
import { GiftCardDetailsComponent } from './gift-cards/gift-card-details.component';
import { GiftCardsResolverService } from './services/resolvers/gift-cards-resolver.service';
import { NewGiftCardComponent } from './gift-cards/new-gift-card.component';
import { GiftCardResolverService } from './services/resolvers/gift-card-resolver.service';
import { TransactionsResolverService } from './services/resolvers/transactions-resolver.service';

const routes: Routes = [
  {
    path: 'gift-card-list',
    component: GiftCardListComponent,
    resolve: { giftcards: GiftCardsResolverService },
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'gift-card-details/:id',
    component: GiftCardDetailsComponent,
    resolve: { 
      giftcard: GiftCardResolverService,
      transactions: TransactionsResolverService
    }
  },
  {
    path: 'new-gift-card',
    component: NewGiftCardComponent
  },
  {
    path: '',
    redirectTo: '/gift-card-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GiftCardsResolverService]
})
export class AppRoutingModule { }
