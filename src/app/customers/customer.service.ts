import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Customer } from './model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Observable<Customer[]>;

  constructor(public db: AngularFireDatabase) { }

  // getCustomers(): Observable<Customer[]> {
  //   this.db.list('customers').valueChanges().subscribe(res => {
  //     return <Customer[]>res;
  //   });
  // }

  saveCustomer() {

  }

  adaptCustomers(jsonStr: string): Observable<Customer[]> {
    let cutomers: Customer[] = [];
    let jsonObj: any = JSON.parse(jsonStr);
    for (let prop in jsonObj) {
      this[prop] = jsonObj[prop];

      // this.customers.subscribe.
    }
    return this.customers;
  }
}
