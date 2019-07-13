import { TestBed } from '@angular/core/testing';

import { GiftCardResolverService } from './gift-card-resolver.service';

describe('GiftCardResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftCardResolverService = TestBed.get(GiftCardResolverService);
    expect(service).toBeTruthy();
  });
});
