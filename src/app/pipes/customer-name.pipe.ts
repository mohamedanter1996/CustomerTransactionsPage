import { Customers } from './../interfaces/customers';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerName',
  standalone: true
})
export class CustomerNamePipe implements PipeTransform {

  transform(customerId:number, Customers:Customers[]): string {
    return Customers.find(c => c.id === customerId.toString())?.name || 'Unknown';
  }

}
