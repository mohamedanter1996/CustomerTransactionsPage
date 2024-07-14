import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersTransactionsMainComponent } from './customers-transactions-main.component';

describe('CustomersTransactionsMainComponent', () => {
  let component: CustomersTransactionsMainComponent;
  let fixture: ComponentFixture<CustomersTransactionsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersTransactionsMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomersTransactionsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
