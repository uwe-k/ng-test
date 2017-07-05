import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MapService } from './map.service';


@Component({
  selector: 'cartr-app',
  templateUrl: './app.component.html',
})


export class AppComponent  {
    name = 'Cartr';
    maps: any;
    selectedMap: any;
    
    constructor(
      private mapService: MapService,
      private router: Router
    ) { }
    
    ngOnInit(): void {
    
    // //////////////////
      this.mapService.getMaps()
        .then(data => {
          console.log('MAPS INFO', data);
          return this.maps = data;
      });
    // //////////////////
  };
  
  onSelect(map: any): void {
    
    this.selectedMap = map;
    console.log(map, this.selectedMap.entity_id);
    this.router.navigate(['/map', this.selectedMap.entity_id]);
  }
}
