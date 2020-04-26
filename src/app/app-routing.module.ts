import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoutryIndividualComponentComponent } from './coutry-individual-component/coutry-individual-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HomePageBodyComponent } from './home-page-body/home-page-body.component';


const routes: Routes = [
  { path: 'country/country/:alphaCode', redirectTo: 'country/:alphaCode', pathMatch: 'full' },
  {
    path: "",
    component: HomePageBodyComponent,
  },
  {
    path: "country/:alphaCode",
    component: CoutryIndividualComponentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
