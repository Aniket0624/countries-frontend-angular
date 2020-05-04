import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HomePageServiceService } from './home-page-service.service';
import { mockCountryAFG } from './mock-data-test';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomePageServiceService]
    });
  });

  it(
    'should get the all api resonse proprerly',
    inject(
      [HttpTestingController, HomePageServiceService],
      (httpMock: HttpTestingController, dataService: HomePageServiceService) => {


        dataService.getIndividualCountry("AFG").subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(mockCountryAFG);
          }
        });

        const mockReq = httpMock.expectOne(dataService.mockIndividualURL);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockCountryAFG);

        httpMock.verify();
      }
    )
  );
});