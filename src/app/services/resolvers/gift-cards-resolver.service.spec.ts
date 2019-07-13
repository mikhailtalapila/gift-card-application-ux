import { TestBed } from '@angular/core/testing';

import { GiftCardsResolverService } from './gift-cards-resolver.service';

describe('GiftCardsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftCardsResolverService = TestBed.get(GiftCardsResolverService);
    expect(service).toBeTruthy();
  });
});
