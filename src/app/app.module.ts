import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './pages/userlist/userlist.component';

import { HttpClientModule } from '@angular/common/http';
import { ResourcelistComponent } from './pages/resourcelist/resourcelist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    ResourcelistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
