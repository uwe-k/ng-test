import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { LeafletModule } from '@asymmetrik/angular2-leaflet';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { MapComponent }  from './map.component';
import { GalleryComponent }  from './gallery.component';

import { MapService } from './map.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule,
    LeafletModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    MapComponent,
    GalleryComponent,
  ],
  providers: [
    MapService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
