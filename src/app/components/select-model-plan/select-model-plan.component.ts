import { Component, OnInit } from '@angular/core';
import { ModelListService } from '../../service/modellist.service';
import { PlanlistService } from '../../service/planlist.service';

import { Observable } from 'rxjs/Observable';

import { Modelint } from '../../model/modelint';


@Component({
  selector: 'app-select-model-plan',
  templateUrl: './select-model-plan.component.html',
  styleUrls: ['./select-model-plan.component.css']
})
export class SelectModelPlanComponent implements OnInit {


  public planlist=[];
  public myData: any;


  constructor(public ModelListService: ModelListService,public PlanlistService: PlanlistService) { }

  public modelList: Observable<Modelint>;

  ngOnInit() {

    this.modelList=this.ModelListService.getModelList();
   
  //this.modelList=this.ModelListService.getModelList();

    //console.log('from select-model-plan',this.ModelListService.getModelList());
  // this.stocks$=this.ModelListService.getModelList();
  
   /*
  this.ModelListService.getModelList().subscribe(data => {

        this.modelList = data;

        console.log(this.modelList);
   },
   (err)=>{


    
   });
   
   */

  }

  onChangeModelList(modelid: number) {

    if (modelid != -1) {
      //this.planlist = this.PlanlistService.getplanlist(modelid);
    }

  }

  onChangePlanList(planid: number) {

    

    //console.log(planid);

    /*
    if (planid != -1) {
      this.planlist = this.PlanlistService.getplanlist(modelid);
    }
    */
  }


}
