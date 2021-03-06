import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
// import 'mapbox-gl';


import * as MapboxGl from 'mapbox-gl';
// import { Map } from '../../node_modules/mapbox-gl/dist/mapbox-gl.js';
import { Map } from 'mapbox-gl';

@Injectable()
export class MapService {
    private getUrl = 'http://www.cartr.dev/';  // URL to web api
    private geojsonPath = 'maps/geojson/';
    private showPath = 'maps/show/';
    private mapsPath = 'service/maps_info/';
    private headers = new Headers({'Content-Type': 'application/json'});
    public map: Map;
    private apiKey = 'aJ4FW2DcNCYvItyHErGu3fhR8qd9xUMB';
    private userKey = 'OVRTS2jZHUwAk3lE1qYCrmfMseNdp9Ic';
    
    
  
    constructor(private http: Http) {
      (MapboxGl as any).accessToken = 'pk.eyJ1IjoiZ3JhZmlrbGllc2NoZW4iLCJhIjoiTmhPalg0RSJ9.SsKEUr-0183Fncfy1V0aLA';
    }
    getMap(id: number): Promise<any> {
      const url = `${this.getUrl}${this.showPath}${id}/${this.userKey}`;
      // return Promise.resolve({});
      return this.http.get(url)
        .toPromise()
        .then(response => { console.log('RESPONSE', response.json()); return response.json().data as any; })
        .catch(this.handleError);
    }
    /**
    *
    */
    getMaps(): Promise<any> {
      const url = `${this.getUrl}${this.mapsPath}${this.apiKey}`;
      let maps: any[] = [];
      return this.http.get(url)
        .toPromise()
        .then(response => {
          let responseMaps = response.json().html.maps;
          for (let index in responseMaps) {
            if (responseMaps.hasOwnProperty(index)) {
              maps.push(response.json().html.maps[index]);
            }
          }
          console.log('MANN EY', maps);
          return maps; 
        })
        .catch(this.handleError);
    }

    getGeoJson(id: number): Promise<any> {
        
        const url = `${this.getUrl}${this.geojsonPath}${id}/${this.userKey}`;
        // MapboxGl.accessToken = ('pk.eyJ1IjoiZ3JhZmlrbGllc2NoZW4iLCJhIjoiTmhPalg0RSJ9.SsKEUr-0183Fncfy1V0aLA');
        console.log('HUHU');
        // const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
          .toPromise()
          .then(response => {console.log(response.json()); return response.json() as any; })
          .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
