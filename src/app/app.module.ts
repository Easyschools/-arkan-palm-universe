import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeEnComponent } from './home-en/home-en.component';
import { HomeArComponent } from './home-ar/home-ar.component';
import { FielderrorModule } from './fielderror/fielderror.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeEnComponent,
    HomeArComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FielderrorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
