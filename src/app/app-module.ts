import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SerieModule } from './serie/serie-module';
import { HttpClientModule } from '@angular/common/http';
import { SerieListar } from "./serie/serie-listar/serie-listar";

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SerieModule, HttpClientModule,
    SerieListar
],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
