import { TestBed } from '@angular/core/testing';

import { TransactionsResolverService } from './transactions-resolver.service';

describe('TransactionsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionsResolverService = TestBed.get(TransactionsResolverService);
    expect(service).toBeTruthy();
  });
});
