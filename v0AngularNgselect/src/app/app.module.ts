import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestrictValues } from './pipes/pipes';
import { SearchTxtAryPipe } from './pipes/search-txt-ary.pipe';
import { FilterPipe } from './pipes/searchPipe';
import { ViewDetailsComponent } from './view-details/view-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchTxtAryPipe,
    RestrictValues,
    FilterPipe,
    ViewDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
