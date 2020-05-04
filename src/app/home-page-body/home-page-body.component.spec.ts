import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { HomePageBodyComponent } from './home-page-body.component';
import { HomePageServiceService } from 'src/app/home-page-service.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomePageServiceService]
    });
  });

  it(
    'should get all country details',
    inject(
      [HttpTestingController, HomePageServiceService],
      (httpMock: HttpTestingController, dataService: HomePageServiceService, _HomePageBodyComponent: HomePageBodyComponent) => {
        const mockResponceLength = 250;

        dataService.getAllCountriesDetails().subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(mockResponceLength);
          }
        });

        const mockReq = httpMock.expectOne(dataService.mockAllURL);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        // expect(mockReq).toEqual(_HomePageBodyComponent.allCountryDetails);
        // mockReq.flush(_HomePageBodyComponent.allCountryDetails);
        httpMock.verify();
      }
    )
  );
});