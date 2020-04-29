import { Component, OnInit } from '@angular/core';
import { HomePageServiceService } from 'src/app/home-page-service.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home-page-body',
  templateUrl: './home-page-body.component.html',
  styleUrls: ['./home-page-body.component.css']
})
export class HomePageBodyComponent implements OnInit {
  public allCountryDetails: [];
  foods: Food[] = [
    { value: 'Africa', viewValue: 'Africa' },
    { value: 'America', viewValue: 'America' },
    { value: 'Asia', viewValue: 'Asia' },
    { value: 'Europe', viewValue: 'Europe' },
    { value: 'Oceania', viewValue: 'Oceania' },
  ];
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
