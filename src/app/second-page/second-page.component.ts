import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  stateValue = '';
  states: Observable<any[]>;

  cityValue = '';
  cities: Observable<any[]>;
  selectedState = null;

  constructor(public db: AngularFireDatabase) {
    this.states = db.list('states').valueChanges();
    this.cities = db.list('cities').valueChanges();
  }

  onStateSubmit() {
    this.db.list('/states').push({ content: this.stateValue });
    this.stateValue = '';
  }

  onCitySubmit() {
    debugger;
    
  }

  ngOnInit() {
  }

}
