import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HomePageBodyComponent } from './home-page-body/home-page-body.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { CoutryIndividualComponentComponent } from './coutry-individual-component/coutry-individual-component.component';
import { ThemeModule } from "./theme/theme.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HomePageBodyComponent,
    CoutryIndividualComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    ThemeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
