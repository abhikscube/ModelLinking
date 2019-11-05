import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ChartDataService } from '../../service/chartdata.service';
import { ModelListService } from '../../service/modellist.service';

import { Observable } from 'rxjs/Observable';

import { Modelint } from '../../model/modelint';

declare let d3: any;

@Component({
  selector: 'app-brandvsgrpgraph',
  templateUrl: './brandvsgrpgraph.component.html',
  styleUrls: [
    '../../../../node_modules/nvd3/build/nv.d3.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class BrandvsgrpgraphComponent implements OnInit {

  public chartData: any[];

  public modelList: Modelint;
  public options_Brand_GRP:any;
  public data_Brand_GRP:any;
  public load_brand_vs_grp_grp:number;

  constructor(public ModelListService: ModelListService,public ChartDataService: ChartDataService) { }


  ngOnInit() {

    this.load_brand_vs_grp_grp=3; 
    this.options_Brand_GRP = {
      chart: {
        type: 'multiBarChart', //multiBarHorizontalChart
        height: 500,
        margin: { 

            top: 62,
            right: 20,
            bottom: 50,
            left:90

        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showControls: true,
        showValues: true,
        duration: 500,
        showXAxis: true,
        xAxis: {
            showMaxMin: false,
            axisLabel: 'Brand',
            rotateLabels: 10      
        },
        yAxis: {
            axisLabel: 'GRP',
            showMaxMin: false,
            tickFormat: function(d){
                return d3.format(',.f')(d);
            }
        },
        tooltip: {
          duration: 0,
          gravity: "w",
          distance: 25,
          snapDistance: 0,
          classes: null,
          chartContainer: null,
          enabled: true,
          hideDelay: 0,
          headerEnabled: true,
          valueFormatter:function(d, i) {
            return d3.format(',.1f')(d);
          },
          fixedTop: null,
          offset: {
            left: 0,
            top: 0
          },
          hidden: false,
          data: null,
          id: "nvtooltip-26623"
        }

      
    }
    }



    // Load Models
    this.ModelListService.getModelList().subscribe((modelResponseData)=>{
      this.modelList=modelResponseData;
      
    });

  }

  onChangeModelList(modelId: number){

              this.load_brand_vs_grp_grp=1;  

              //Get Brand VS GRP chart data  
              this.ChartDataService.getChartdata(modelId).subscribe((chartResponseData)=>{
                this.data_Brand_GRP=chartResponseData;
                console.log(chartResponseData);
                this.load_brand_vs_grp_grp=2;         
             });   

  }


}
