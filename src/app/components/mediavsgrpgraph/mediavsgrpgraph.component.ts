import { Component, OnInit,ViewEncapsulation,ViewChild } from '@angular/core';
import { ChartDataService } from '../../service/chartdata.service';
import { ModelListService } from '../../service/modellist.service';
import { enableRipple } from '@syncfusion/ej2-base';

import { Observable } from 'rxjs/Observable';

import { Modelint } from '../../model/modelint';

declare let d3: any;

@Component({
  selector: 'app-mediavsgrpgraph',
  templateUrl: './mediavsgrpgraph.component.html',
  styleUrls: [
    '../../../../node_modules/nvd3/build/nv.d3.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class MediavsgrpgraphComponent implements OnInit {

  public chartData: any[];

  public modelList: Modelint;
  public load_brand_list:number;
  public load_media_grp:number;
  public brand_list:any;
  public options_Media_GRP:any;
  public data_Media_GRP:any;
  public selected_model_id:any;
  public subBrandListselected:any;

  public brandsField: Object = { text: 'value', value: 'id' };

  @ViewChild('multiselectBrandList') private multiselectBrandList;


  constructor(public ModelListService: ModelListService,public ChartDataService: ChartDataService) { }

  ngOnInit() {


    this.multiselectBrandList.mode='CheckBox';

    this.options_Media_GRP = {
      chart: {
        type: 'multiBarChart', //multiBarHorizontalChart
        height: 600,
        margin: { 

            top: 62,
            right: 20,
            bottom: 150,
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
          axisLabel: 'Media', 
          rotateLabels: 30                   
        },
        yAxis: {
            showMaxMin: false,  
            axisLabel: 'GRPs',
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

    this.load_brand_list=1;
    this.selected_model_id=modelId;


    this.multiselectBrandList.selectAll(false);  
    this.multiselectBrandList.dataSource=[];
    this.brand_list=[];
    this.load_media_grp=0; 

    this.ChartDataService.getBrand_list(modelId).subscribe((brandResponseData)=>{
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

          this.ChartDataService.getChartdata_media(this.selected_model_id,this.multiselectBrandList.value.join('~')).subscribe((chartMediaResponseData)=>{
            this.data_Media_GRP=chartMediaResponseData;
            //console.log(chartMediaResponseData);  
            
            this.load_media_grp=2;
          });
        }else{
            
          console.log('From has no value');
          console.log(this.multiselectBrandList);
          
            this.data_Media_GRP=[];
            this.load_media_grp=1; 

        }
  
  }

  onRemoveb(options: any){

      console.log('Remove Element');
      console.log(this.multiselectBrandList);

  }




}
