import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ImgService } from './img.service';


@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [ ImgService ],
})


export class GalleryComponent  {
    name = 'Cartr';
    single_img: Object;
    img_collection: Object[] = [];
    collLength = 9;
    loadProgress = 0;

    
    constructor(
      private imgService: ImgService,
      private router: Router
    ) { }
    
    ngOnInit(): void {

      this.imgService
        .getImgList()
        .subscribe( (res: Object[]) => {

          // this.handleFeaturedImg(res);
          this.handleImgCollection(res);
        });
        // //////////////////

    }
    
    handleFeaturedImg(res: Object[]) {
      let randomImg = Math.floor(Math.random() * 1000) + 1;
      this.single_img = res[randomImg];
      this.single_img['loading'] = true;
      this.imgPreload(this.single_img);
    }
    
    handleImgCollection(res: Object[]) {
      for ( let i = 0; i < this.collLength; i++ ) {
        let randomImg = Math.floor(Math.random() * 1000) + 1;

        this.img_collection.push(res[randomImg]);
        this.img_collection[i]['loading'] = true;

        this.collectionImgPreload( this.img_collection[i], i );

      }

    }

    collectionImgPreload(new_image: Object, i: number) {
      let c = new Image();
      c.src = new_image['post_url'] + '/download';
      c['index'] = i;
      c.onload = (ci) => {
        this.loadProgress = this.loadProgress + (100 / this.collLength);
        console.log(this.loadProgress);
        let loadedI = ci['target']['index'];
        this.img_collection[loadedI]['loading'] = false;
      };
    }

    imgPreload(new_image: Object): void {
      let c = new Image();
      c.src = new_image['post_url'] + '/download';
      c.onload = () => {
        this.single_img['loading'] = false;
      };
    };
    // //////////////////
}
