import { TestBed } from '@angular/core/testing';

import { GiftCardDataService } from './gift-card-data.service';

describe('GiftCardDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftCardDataService = TestBed.get(GiftCardDataService);
    expect(service).toBeTruthy();
  });
});
