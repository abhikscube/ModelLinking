import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ChartDataService } from '../../service/chartdata.service';
import { ModelListService } from '../../service/modellist.service';

import { Observable } from 'rxjs/Observable';

import { Modelint } from '../../model/modelint';

declare let d3: any;

@Component({
  selector: 'app-romivssimulation',
  templateUrl: './romivssimulation.component.html',
  styleUrls: [
    '../../../../node_modules/nvd3/build/nv.d3.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class RomivssimulationComponent implements OnInit {

  public chartData: any[];

  public modelList: Modelint;
  public options_romi_simulation:any;
  public data_romi_simulation:any;
  public load_romi_simulation_grp:number;

  constructor(public ModelListService: ModelListService,public ChartDataService: ChartDataService) { }


  ngOnInit() {

    this.load_romi_simulation_grp=3; 
    this.options_romi_simulation = {
      chart: {
        height: 767,
        margin: { 

            top: 62,
            right: 60,
            bottom: 218,
            left: 90

        },
          type: 'discreteBarChart',
          x: function(d){return d.label;},
          y: function(d){return d.value;},
          showValues: true,
          valueFormat: function(d){
              return d3.format(',.4f')(d);
          },
          duration: 500,
          xAxis: {
              axisLabel: 'Simulation',
              rotateLabels: 30  
          },
          yAxis: {
              axisLabel: 'ROMI',
              axisLabelDistance: -10
          }
      }
    };



    // Load Models
    this.ModelListService.getModelList().subscribe((modelResponseData)=>{
      this.modelList=modelResponseData;
      
    });

  }

  onChangeModelList(modelId: number){

              this.load_romi_simulation_grp=1;  

              //Get Brand VS GRP chart data  
              this.ChartDataService.getChartdata_romi_simulation(modelId).subscribe((chartResponseData)=>{
                this.data_romi_simulation=chartResponseData;
                console.log(chartResponseData);
                this.load_romi_simulation_grp=2;         
             });   

  }


}
