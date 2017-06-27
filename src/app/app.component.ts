import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'cartr-app',
  templateUrl: './app.component.html',
})
export class AppComponent  { 
    name = 'Cartr';
    map: Object;
    data: Object;
    
    constructor(private mapService: MapService) { }
    
    
    ngOnInit(): void {
      this.mapService.getMap(64)
        .then(data => {
          console.log(data.maps.parent[64].mapcenter as any);
          let map = new Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v9',
            zoom: data.maps.parent[64].zoomlevel,
            center: data.maps.parent[64].mapcenter
          });

          this.map = map;
          return this.data = data
      });
      this.mapService.getGeoJson(64)
        .then(map => {console.log(map); return this.map = map});
  }
}
