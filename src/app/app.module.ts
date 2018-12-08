import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    Ejemplo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
