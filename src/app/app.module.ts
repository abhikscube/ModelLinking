import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NvD3Module } from 'ng2-nvd3';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars'; //date picker syncfusion.com/kb/9967/how-to-create-an-angular-7-daterangepicker-component
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import {MultiSelectModule} from '@syncfusion/ej2-angular-dropdowns';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { ModelListService} from './service/modellist.service';
import { PlanlistService } from './service/planlist.service';
import { ChartDataService } from './service/chartdata.service';
import { ModellistComponent } from './components/modellist/modellist.component';
import {ModeljsondadaService} from './service/modeljsondada.service';
import {AppmenuComponent} from './components/appmenu/appmenu.component';

import { HttpClientModule } from '@angular/common/http';


import 'd3';
import 'nvd3';
import { SelectModelPlanComponent } from './components/select-model-plan/select-model-plan.component';
import { LandingpageComponentComponent } from './components/dashboard/landingpage-component/landingpage-component.component';
import { PulledModelComponent } from './components/pulled-model/pulled-model.component';
import { WaitingModulesComponent } from './components/waiting-modules/waiting-modules.component';
import { GeneratePlanComponent } from './components/generate-plan/generate-plan.component';
import { ProjectLinkModulesComponent } from './components/project-link-modules/project-link-modules.component';
import { ProjectLinkModalComponent } from './components/project-link-modal/project-link-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';





@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    ProductComponent,
    HomeComponent,
    ModellistComponent,
    SelectModelPlanComponent,
    LandingpageComponentComponent,
    PulledModelComponent,
    WaitingModulesComponent,
    GeneratePlanComponent,
    ProjectLinkModulesComponent,
    ProjectLinkModalComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NvD3Module,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    DateRangePickerModule,
    TreeViewModule,
    NgbModule,MultiSelectModule
  ],
  providers: [ModelListService,
    PlanlistService,
    ChartDataService,
    ModeljsondadaService  
  ],
  bootstrap: [AppComponent],
  entryComponents: [ ProjectLinkModalComponent ]
})
export class AppModule { 

}
