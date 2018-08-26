import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {
  MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,
  MatGridListModule, MatCardModule, MatMenuModule, MatToolbarModule, MatSidenavModule,
  MatListModule, MatTableModule, MatPaginatorModule, MatSortModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyTableComponent } from './my-table/my-table.component';
import { OverlayModule, OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'first-page', component: FirstPageComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'third-page', component: ThirdPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    HomePageComponent,
    MyTableComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    OverlayModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [{ provide: OverlayContainer, useClass: FullscreenOverlayContainer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
