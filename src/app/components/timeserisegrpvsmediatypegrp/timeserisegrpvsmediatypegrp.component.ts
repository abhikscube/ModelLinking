import { Component, OnInit,ViewEncapsulation,ViewChild } from '@angular/core';
import { ChartDataService } from '../../service/chartdata.service';
import { ModelListService } from '../../service/modellist.service';
import { enableRipple } from '@syncfusion/ej2-base';

import { Observable } from 'rxjs/Observable';

import { Modelint } from '../../model/modelint';

declare let d3: any;

@Component({
  selector: 'app-timeserisegrpvsmediatypegrp',
  templateUrl: './timeserisegrpvsmediatypegrp.component.html',
  styleUrls: [
    '../../../../node_modules/nvd3/build/nv.d3.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class TimeserisegrpvsmediatypegrpComponent implements OnInit {

  public chartData: any[];

  public modelList: Modelint;
  public load_brand_list:number;
  public load_media_grp:number;
  public brand_list:any;
  public options_time_line_grp_media:any;
  public data_time_line_grp_media:any;
  public selected_model_id:any;
  public subBrandListselected:any;

  public brandsField: Object = { text: 'value', value: 'id' };
  public modelsField: Object = { text: 'name', value: 'id' };

  @ViewChild('multiselectBrandList') private multiselectBrandList;
  @ViewChild('selectModelList') private selectModelList;

  constructor(public ModelListService: ModelListService,public ChartDataService: ChartDataService) { }

  ngOnInit() {

    this.multiselectBrandList.mode='CheckBox';

    this.options_time_line_grp_media = {
      chart: {
        type: 'lineChart', //multiBarHorizontalChart
        height: 456,
        margin : {
          top: 90,
          right: 60,
          bottom: 50,
          left: 155
          },          
        useInteractiveGuideline: true,
        //transitionDuration: 350,
        x: function(d){return d.x;},
        y: function(d){return d.y;},
        //yErr: function(d){ return [-Math.abs(d.value * Math.random() * 0.3), Math.abs(d.value * Math.random() * 0.3)] },
        showControls: true,
        showValues: true,
       // duration: 500,
        showLegend: true,
        showYAxis: true,
        showXAxis: true,
        xAxis: {
            axisLabel: 'Time',
            showMaxMin: false,
            tickFormat: function(d){
                // return d3.time.format('%x')(new Date(d));
                return d3.time.format('%B, %y')(new Date(d));
            }
        },
        yAxis: {
            axisLabel: 'GRP',
            showMaxMin: false,
            tickFormat: function(d){
            return d3.format(',.f')(d*100);
            }

        },
        interactiveLayer: {
          dispatch: {},
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
            valueFormatter: function(d,i){
                return d3.format(',.1f')(d*100,i);

            },
            fixedTop: null,
            offset: {
              left: 0,
              top: 0
            },
            hidden: false,
            data: null,
            id: "nvtooltip-94278"
          },
          margin: {
            left: 65,
            top: 30
          },
          width: null,
          height: null,
          showGuideLine: true,
          svgContainer: null
        },                   
    }
    }

       // Load Models
       this.ModelListService.getModelList().subscribe((modelResponseData)=>{
        this.modelList=modelResponseData;
        
      }); 

  }

  onChangeModelList(options: any){

    this.load_brand_list=1;
    this.selected_model_id=this.selectModelList.value;


    this.multiselectBrandList.selectAll(false);  
    this.multiselectBrandList.dataSource=[];
    this.brand_list=[];
    this.load_media_grp=0; 

    this.ChartDataService.getBrand_list(this.selected_model_id).subscribe((brandResponseData)=>{
      this.brand_list=brandResponseData; 
      this.load_brand_list=2; 
                  
            
      });


        
  } 


  onChangeMultiBrandListForMediaVsGRP(options: any){

    var arr_option=new Array();
    var brand_string;
    this.load_media_grp=1


  //  console.log(this.multiselectBrandList);

  
  
          if(this.multiselectBrandList.value.length){


          this.subBrandListselected=this.multiselectBrandList.value.join('~') 
          console.log('From has value');
          console.log(this.multiselectBrandList);

          this.ChartDataService.getChartdata_time_media_grp(this.selected_model_id,this.multiselectBrandList.value.join('~')).subscribe((chartMediaResponseData)=>{
            this.data_time_line_grp_media=chartMediaResponseData;
            //console.log(chartMediaResponseData);  
            
            this.load_media_grp=2;
          });
        }else{
            
          console.log('From has no value');
          console.log(this.multiselectBrandList);
          
            this.data_time_line_grp_media=[];
            this.load_media_grp=1; 

        }
  
  }

  onRemoveb(options: any){

      console.log('Remove Element');
      console.log(this.multiselectBrandList);

  }




}
