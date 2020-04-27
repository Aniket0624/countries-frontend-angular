import { Component, OnInit } from '@angular/core';
import { HomePageServiceService } from '../home-page-service.service';
import { ThemeService } from "src/app/theme/theme.service";

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    // this.setLightbulb();
    this.themeService.setLightTheme();
  }



  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
    // this.setLightbulb();
  }

}
