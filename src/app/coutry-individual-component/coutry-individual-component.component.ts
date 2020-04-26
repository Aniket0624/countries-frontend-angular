import { Component, OnInit } from '@angular/core';
import { HomePageServiceService } from '../home-page-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-coutry-individual-component',
  templateUrl: './coutry-individual-component.component.html',
  styleUrls: ['./coutry-individual-component.component.css']
})
export class CoutryIndividualComponentComponent implements OnInit {
  public specificCountryDetails: any;
  constructor(private location: Location, private _HomePageServiceService: HomePageServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.displaySpecificCountry(routeParams.alphaCode);
    });
  }

  displaySpecificCountry(alphaCode) {
    this._HomePageServiceService.getIndividualCountry(alphaCode).subscribe((response: any) => {
      this.specificCountryDetails = response;
      console.log(response);
    })
  }
  back() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
