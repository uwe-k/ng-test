import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { MapService } from './map.service';
import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';
import { GeoJSONSource } from 'mapbox-gl';
// from 'mapbox-gl';

@Component({
  selector: 'cartr-app',
  templateUrl: './map.component.html',
})


export class MapComponent  {
    name = 'Cartr';
    map: Map;
    data: any;
    mapData: Object;
    public maps: {};
    mapId: number;
    

    constructor(private mapService: MapService, private router: Router, private route: ActivatedRoute) {
      // router.params.subscribe(val => myInit());
      console.log('ROUTE', route.params.subscribe);
      route.params.subscribe(params => {
        this.mapId = + params['id'];
        console.log(params);
        this.initMap ();
        return params;
      });
    }
    ngOnChanges(): void {
      console.log('OnChanges');
    }
    ngOnDestroy() {
        console.log('OnDestroy');
        // this.subParams.unsubscribe();
    }
    ngOnInit(): void {
      console.log('OnInit');
      
    }
    initMap (): void {
      this.mapId = this.mapId || 63;
      this.mapService.getMap(this.mapId)
        .then(data => {
          console.log(data.maps.parent[this.mapId].mapcenter as any);
          
          let map = new Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v9',
            zoom: data.maps.parent[this.mapId].zoomlevel,
            center: data.maps.parent[this.mapId].mapcenter,
            // layers: L.mapbox.tileLayer('mapbox://styles/mapbox/light-v9'),
            // layers: [L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')]
          });
          

          this.map = map;
          return this.data = data;
      }).then(data => {
        console.log('SECOND THENS', data);
        this.mapService.getGeoJson(this.mapId)
          .then(mapData => {
            let layer = L.geoJSON(mapData);
            console.log(layer);
            
             for (let entry of mapData.features) {
               entry.properties.icon = 'rocket';
             }
            this.map.addSource(
              'mapDataSrc',
              {
                'type': 'geojson',
                'data': mapData
              }
            );

            let lObj = {
              'id': 'points',
              'type': 'symbol',
              'source': 'mapDataSrc',
              'layout': {
                'icon-image': '{icon}-15',
                'text-field': '{title}',
                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                'text-offset': [0, 0.6],
                'text-anchor': 'top'
              }
            } as mapboxgl.Layer;
            console.log(lObj);
            this.map.addLayer(lObj);
            
            return this.mapData = mapData; 
          });
        return data;
      });
    };
}
