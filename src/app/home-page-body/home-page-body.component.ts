import { Component, OnInit } from '@angular/core';
import { HomePageServiceService } from 'src/app/home-page-service.service';

@Component({
  selector: 'app-home-page-body',
  templateUrl: './home-page-body.component.html',
  styleUrls: ['./home-page-body.component.css']
})
export class HomePageBodyComponent implements OnInit {
  public allCountryDetails: [];
  constructor(private _HomePageServiceService: HomePageServiceService) { }
  public searchText;
  public filterText;
  ngOnInit() {
    this.displayAllCountries();

  }

  displayAllCountries() {
    this._HomePageServiceService.getAllCountriesDetails().subscribe((response: any) => {
      this.allCountryDetails = response;
      // console.log(response);

    })
  }
}
