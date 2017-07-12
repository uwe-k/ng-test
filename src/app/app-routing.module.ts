import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { MapComponent }   from './map.component';
import { GalleryComponent }   from './gallery.component';



const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'gallery',  component: GalleryComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'map/:id', component: MapComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
