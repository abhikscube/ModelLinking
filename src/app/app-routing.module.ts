import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { LandingpageComponentComponent } from './components/dashboard/landingpage-component/landingpage-component.component';
import { GeneratePlanComponent } from './components/generate-plan/generate-plan.component';

const routes: Routes = [
  { path: '', component: LandingpageComponentComponent, pathMatch: 'full' },
  { path: 'product', component: ProductComponent },
  { path: 'home', component: HomeComponent },
  { path: 'plan', component: GeneratePlanComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}