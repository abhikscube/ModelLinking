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
            bottom: 100,
            left: 150

        },
          type: 'discreteBarChart',
          x: function(d){return d.label;},
          y: function(d){return d.value;},
          showValues: true,
          valueFormat: function(d){
            //  return d3.format(',.4f')(d);

            // var numberF=d3.format(',.4s');

            // document.write(numberF(1e9).replace(/T/,"B"));

            // return numberF(d);

           var  fcopy = d3.format;   
           
           d3.format = function myFormat(){ 
           var function_ret = fcopy.apply(d3, arguments) 
                  return (function(args){return function (){ 
                        return args.apply(d3, arguments).replace(/G/, "B");
                  }})(function_ret) 
           } 

            return d3.format(',.4s')(d);
          },
          duration: 500,
          xAxis: {
              axisLabel: 'Simulation',
              rotateLabels: 30  
          },
          yAxis: {
              axisLabel: 'ROMI',
              tickFormat: function(d){
                return d3.format(',.4s')(d);
              },
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
