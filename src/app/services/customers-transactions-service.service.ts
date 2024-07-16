import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import{Observable,BehaviorSubject} from'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CustomersTransactionsServiceService {
  public CustomerNameHolder = new BehaviorSubject<any[]>([
    {
      name: '',
      series: [
        { value: 0, name: '2022-01-01' },
        { value: 0, name: '2022-01-02' },
      ],
    },
  ]);
  constructor(private _HttpClient: HttpClient) {}
  getCustomersData(): Observable<any> {
    return this._HttpClient.get(`api/db.json`);
  }

  getTransactionsData(): Observable<any> {
    return this._HttpClient.get(`api/db.json`);
  }
}
