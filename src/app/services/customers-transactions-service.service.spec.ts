import { TestBed } from '@angular/core/testing';

import { CustomersTransactionsServiceService } from './customers-transactions-service.service';

describe('CustomersTransactionsServiceService', () => {
  let service: CustomersTransactionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersTransactionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
