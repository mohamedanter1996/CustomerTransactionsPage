import { Customers } from './../interfaces/customers';
import { transition } from '@angular/animations';
import { Transactions } from './../interfaces/transactions';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionSearch',
  standalone: true
})
export class TransactionSearchPipe implements PipeTransform {
  customersId: Customers[] = [];
  customersTransactions: Transactions[] = [];
  transform(Transactions: Transactions[], amountSearch: number, customerNameSearch: string, Customers: Customers[]): Transactions[] {
    this.customersId = Customers;

    if (amountSearch > 0 && customerNameSearch == "") {
      return Transactions.filter((transition) => { return transition.amount.toString().includes(amountSearch.toString()) });
    }

    else if (amountSearch <= 0 && customerNameSearch != "") {
      this.customersId = Customers.filter((Customer) => { return Customer.name.toLowerCase().includes(customerNameSearch.toLowerCase()) });
      console.log(this.customersId);
      console.log(Transactions);
      for (var i = 0; i < Transactions.length; i++) {

        for (var j = 0; j < this.customersId.length; j++) {
          if (this.customersId[j].id == Transactions[i].customer_id.toString()) {

            this.customersTransactions.push(Transactions[i]);
          }
          console.log(this.customersTransactions);
        }
      }
      Transactions = this.customersTransactions
      this.customersTransactions = [];
      return Transactions;
    }

    else if (amountSearch > 0 && customerNameSearch != "") {
      this.customersId = Customers.filter((Customer) => {
        return Customer.name
          .toLowerCase()
          .includes(customerNameSearch.toLowerCase());
      });
      Transactions = Transactions.filter((transition) => {
        return transition.amount.toString().includes(amountSearch.toString());
      });
      console.log(this.customersId);
      console.log(Transactions);
      for (
        var i = 0;
        i <
        Transactions.length;
        i++
      ) {
        for (var j = 0; j < this.customersId.length; j++) {
          if (this.customersId[j].id == Transactions[i].customer_id.toString()) {
            this.customersTransactions.push(Transactions[i]);
          }
          console.log(this.customersTransactions);
        }
      }
      Transactions = this.customersTransactions;
      this.customersTransactions = [];
      return Transactions;
    }
    else {
      return Transactions;
    }

  }

}
