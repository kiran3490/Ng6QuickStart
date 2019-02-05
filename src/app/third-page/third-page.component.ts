import { Component, OnInit } from '@angular/core';
import { MockJsonService } from 'src/shared/mock-json-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss'],
  providers: [MockJsonService]
})
export class ThirdPageComponent implements OnInit {
  public jsonData: any;
  constructor(private jsonService: MockJsonService,
    private http: HttpClient) { }

  ngOnInit() {
    this.jsonData = this.http.get('../assets/autocomplete.json');
  }


  getData() {
    this.jsonService.getData()
      .subscribe((data: any): void => {
        this.jsonData = data;
      });
  }
}
