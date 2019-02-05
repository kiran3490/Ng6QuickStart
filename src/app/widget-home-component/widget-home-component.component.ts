import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-widget-home-component',
  templateUrl: './widget-home-component.component.html',
  styleUrls: ['./widget-home-component.component.scss']
})


export class WidgetHomeComponentComponent implements OnInit, OnChanges {

  @Input() title = 'Title';
  @Input() dataApi = '';
  public data = null;
  public filterData = [] as WidgetData[];
  public loader = true;


  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dataApi && changes.dataApi.currentValue) {
      this.dataApi = changes.dataApi.currentValue;
      this.http.get(this.dataApi).subscribe(
        (res) => {
          this.data = [] as WidgetData[];
          const responseData = res as any[];
          responseData.forEach(element => {
            const myClient = {} as WidgetData;
            myClient.id = element.epic;
            myClient.name = element.name;
            this.data.push(myClient);
          });
          setTimeout(() => {
            this.filterData = this.data;
            this.loader = false;
          }, 2000);

        });
    } else {
      setTimeout(() => {
        this.loader = false;
      }, 1000);
    }
  }

  onSearchChange(searchValue: string) {
    this.filterData = this.data.filter((s) => s.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
  }
}


