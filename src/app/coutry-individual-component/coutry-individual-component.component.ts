import { Component, OnInit } from '@angular/core';
import { HomePageServiceService } from '../home-page-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coutry-individual-component',
  templateUrl: './coutry-individual-component.component.html',
  styleUrls: ['./coutry-individual-component.component.css']
})
export class CoutryIndividualComponentComponent implements OnInit {
  public specificCountryDetails: any;
  constructor(private _HomePageServiceService: HomePageServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.displaySpecificCountry(this.route.snapshot.paramMap.get('name'))
    // console.log(this.route.snapshot.paramMap.get('name'));
  }

  displaySpecificCountry(countryName) {
    this._HomePageServiceService.getIndividualCountry(countryName).subscribe((response: any) => {
      this.specificCountryDetails = response[0];
      console.log(response[0]);
    })
  }

}
