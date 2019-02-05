import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {
  MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,
  MatGridListModule, MatCardModule, MatMenuModule, MatToolbarModule, MatSidenavModule,
  MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatAutocompleteModule
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
import { WidgetModule } from 'src/shared/widgets/widgets.module';
import { AutoCompleteComponent } from 'src/shared/widgets/autocomplete/autocomplete.component';
import { MockJsonService } from 'src/shared/mock-json-service';
import { HttpClientModule } from '@angular/common/http';
import { RollbarErrorHandler, RollbarService } from './rollbar-event-handler';
import * as Rollbar from 'rollbar';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'first-page', component: FirstPageComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'third-page', component: ThirdPageComponent }
];

const rollbarConfig = {
  accessToken: 'f6dfc7f541fd44d5a0dcb0791daf3739',
  captureUncaught: true,
  captureUnhandledRejections: true,
};


export function rollbarFactory() {
    return new Rollbar(rollbarConfig);
}

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
    HttpClientModule,
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
    AngularFireDatabaseModule, // for database,
    WidgetModule
  ],
  providers: [{ provide: OverlayContainer, useClass: FullscreenOverlayContainer },
    { provide: ErrorHandler, useClass: RollbarErrorHandler },
    { provide: RollbarService, useFactory: rollbarFactory }
    , MockJsonService],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
