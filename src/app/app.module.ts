import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { LeafletModule } from '@asymmetrik/angular2-leaflet';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { MapComponent }  from './map.component';

import { MapService } from './map.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule,
    LeafletModule
  ],
  declarations: [
    AppComponent,
    MapComponent
  ],
  providers: [
    MapService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
