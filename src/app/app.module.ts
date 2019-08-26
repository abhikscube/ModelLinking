import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NvD3Module } from 'ng2-nvd3';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { ModelListService} from './service/modellist.service';
import { PlanlistService } from './service/planlist.service';
import { ChartDataService } from './service/chartdata.service';
import { ModellistComponent } from './components/modellist/modellist.component';

import { HttpClientModule } from '@angular/common/http';


import 'd3';
import 'nvd3';
import { SelectModelPlanComponent } from './components/select-model-plan/select-model-plan.component';
import { LandingpageComponentComponent } from './components/dashboard/landingpage-component/landingpage-component.component';
import { PulledModelComponent } from './components/pulled-model/pulled-model.component';
import { WaitingModulesComponent } from './components/waiting-modules/waiting-modules.component';




@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    // AppmenuComponent,
    AppsettingsComponent,
    ProductComponent,
    HomeComponent,
    ModellistComponent,
    SelectModelPlanComponent,
    LandingpageComponentComponent,
    PulledModelComponent,
    WaitingModulesComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NvD3Module,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [ModelListService,
    PlanlistService,
    ChartDataService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
