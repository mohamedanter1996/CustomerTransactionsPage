import { transition } from '@angular/animations';
import { CustomerNamePipe } from '../pipes/customer-name.pipe';
import { TransactionSearchPipe } from '../pipes/transaction-search.pipe';
import { Transactions } from './../interfaces/transactions';
import { Customers } from './../interfaces/customers';
import { ChartComponentComponent } from './../chart-component/chart-component.component';
import { Component,OnInit } from '@angular/core';
import { CustomersTransactionsServiceService } from '../services/customers-transactions-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import{CustomerTransactionsDates} from '../interfaces/customer-transactions-dates'

@Component({
  selector: 'app-customers-transactions-main',
  standalone: true,
  imports: [
    ChartComponentComponent,
    HttpClientModule,
    CustomerNamePipe,
    CommonModule,
    FormsModule,
    TransactionSearchPipe,
  ],
  templateUrl: './customers-transactions-main.component.html',
  styleUrl: './customers-transactions-main.component.css',
})
export class CustomersTransactionsMainComponent implements OnInit {
  customerNameSearch: string = '';
  transactionSearch: number = 0;
  Customers: Customers[] = [];
  Transactions: Transactions[] = [];
  defaultValue = 'Default Value';
  constructor(
    private _CustomersTransactionsServiceService: CustomersTransactionsServiceService
  ) {}
  ngOnInit(): void {
    this._CustomersTransactionsServiceService.getCustomersData().subscribe({
      next: (response) => {
        console.log(response);
        this.Customers = response.customers;
      },
      error: (error) => {
        console.log(error);
      },
    });

    this._CustomersTransactionsServiceService.getTransactionsData().subscribe({
      next: (response) => {
        console.log(response);
        this.Transactions = response.transactions;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public TakeCustomerName(event: any) {
    console.log(event.target.innerHTML);
    let customerId: string = this.GetCustomerNameId(event.target.innerHTML);
    let customerTransactionsDatesArray: CustomerTransactionsDates[] =
      this.GetCustomerTransactionsAndDates(customerId);

    this._CustomersTransactionsServiceService.CustomerNameHolder.next([
      {
        name: event.target.innerHTML,
        series: customerTransactionsDatesArray,
      },
    ]);
  }

  public GetCustomerNameId(customerName: string): string {
    var CustomerId: string = '';
    for (let i = 0; i < this.Customers.length; i++) {
      if (this.Customers[i].name == customerName) {
        CustomerId = this.Customers[i].id;
        break;
      }
    }
    return CustomerId;
  }

  public GetCustomerTransactionsAndDates(
    CustomerId: string
  ): CustomerTransactionsDates[] {
    let CustomerTransactionsDates: CustomerTransactionsDates[] = [];
    for (let index = 0; index < this.Transactions.length; index++) {
      if (this.Transactions[index].customer_id.toString() == CustomerId) {
        CustomerTransactionsDates.push({
          value: this.Transactions[index].amount,
          name: this.Transactions[index].date,
        });
      }
    }
    return CustomerTransactionsDates;
  }
}
