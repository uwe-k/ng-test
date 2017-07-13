/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImgService } from './img.service';
import { HttpModule } from '@angular/http';

describe('Service: Img', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgService ],
      imports: [
        HttpModule,
      ]
    });
  });

  it('should ...', inject([ImgService], (service: ImgService) => {
    expect(service).toBeTruthy();
  }));
});
