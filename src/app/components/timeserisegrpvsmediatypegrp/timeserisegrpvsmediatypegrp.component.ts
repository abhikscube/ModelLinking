import { Component, OnInit,ViewEncapsulation,ViewChild } from '@angular/core';
import { ChartDataService } from '../../service/chartdata.service';
import { ModelListService } from '../../service/modellist.service';
import { enableRipple } from '@syncfusion/ej2-base';
import * as jsPDF from 'jspdf';

import { Observable } from 'rxjs/Observable';

import { Modelint } from '../../model/modelint';

import * as svg from 'save-svg-as-png';

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
  public graph_time:any='w';

  public brandsField: Object = { text: 'value', value: 'id' };
  public modelsField: Object = { text: 'name', value: 'id' };

  public show_download_grp_loading:number=0;
  public show_download_grp_btn:number=0;

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
          right: 20,
          bottom: 90,
          left: 120
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
            ticks:10,
            rotateLabels: 30,        
            tickFormat: function(d){
                 return d3.time.format('%x')(new Date(d));
                // return d3.time.format('%b, %y')(new Date(d));
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
        }                        
    },
    title: {
      enable: true,
      text: "Title for Line Chart"
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

  SetTime(grapth_time:any){
   this.graph_time=grapth_time;
  
    if(this.multiselectBrandList.value.length){
        this.geterateGraph();
    }
  }




  onChangeMultiBrandListForMediaVsGRP(options: any){

    this.geterateGraph();
  
  }

  onRemoveb(options: any){

      console.log('Remove Element');
      console.log(this.multiselectBrandList);

  }




  get_image(){

    //alert('Hiiii');

    this.show_download_grp_btn=0;
    this.show_download_grp_loading=1;


    var svge = document.getElementById("myGraphSvg").getElementsByTagName("svg")[0];
    //svg.saveSvgAsPng(document.getElementsByClassName("nvd3-svg"), "diagram.png", {scale: 0.5});
    // svg.saveSvgAsPng(svg, "diagram.png", {scale: 0.5});
    //svg.saveSvgAsPng(svge, "diagram.png", {scale: 1});


    //var svge = document.getElementById("myGraphSvg").getElementsByTagName("svg")[0];

    svg.svgAsPngUri(svge, {}, (uri) => {
    //console.log('png base 64 encoded', uri);

    this.get_pdf(uri);
    this.show_download_grp_btn=1;
    this.show_download_grp_loading=0;

     });


  }



public get_pdf(b64Image){

  var image = new Image();

 
  image.src = b64Image;

    var orient={
      orientation: 'l',
      unit: 'px',
      format: 'a3',
      putOnlyUsedFonts:true
    };

  var pdf = new jsPDF(orient);

      var margins = {
        top: 20,
        bottom: 20,
        left: 30,
        right: 20
    };

    var pdfWidth = pdf.internal.pageSize.width;
    var pdfHeight = pdf.internal.pageSize.height;
    var footer_height =  30;
    var htmlPageRightOffset = 0;

    var outerRacBorder = 2;
    //var imageDrawableHeight = pdfHeight - margins.top - margins.bottom - footer_height - outerRacBorder;
   // var imageDrawableWidth = pdfWidth - margins.left - margins.right - outerRacBorder;
   var imageDrawableHeight = pdf.internal.pageSize.height;
   var imageDrawableWidth = pdf.internal.pageSize.width;
  

 

    var imageSize = this.calculateAspectRatioFit(image.width, image.height, imageDrawableWidth, imageDrawableHeight);    
    pdf.addImage(image, 'png', 10, 10, 700, 280);
    
    pdf.text("Timeseries : GRPs by Brand by Media ", 310, 300);
    //pdf.autoPrint();
    pdf.save('Timeseries_GRPs_by_Brand_by_Media.pdf');
  //pdf.output('dataurlnewwindow');


}

public calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
  if(srcHeight == 0 || srcWidth == 0){
    return {width: maxWidth, height: maxHeight};
  }

  var ratio = [maxWidth / srcWidth, maxHeight / srcHeight];
  var ratio_i = Math.min(ratio[0], ratio[1]);

  return {width: srcWidth * ratio_i, height: srcHeight * ratio_i};
}

public geterateGraph(){


  var arr_option=new Array();
  var brand_string;
  this.load_media_grp=1
  console.log(this.graph_time);

//  console.log(this.multiselectBrandList);



        if(this.multiselectBrandList.value.length){


        this.subBrandListselected=this.multiselectBrandList.value.join('~') 
        console.log('From has value');
        console.log(this.multiselectBrandList);

        if(this.graph_time=='w'){
              console.log('Graph Time'+this.graph_time);
              this.ChartDataService.getChartdata_time_media_grp_weekly(this.selected_model_id,this.multiselectBrandList.value.join('~')).subscribe((chartMediaResponseData)=>{
                this.data_time_line_grp_media=chartMediaResponseData;
                //console.log(chartMediaResponseData);  
                
                this.load_media_grp=2;
                this.show_download_grp_btn=1;
              });

          }

          if(this.graph_time=='fw'){
            console.log('Graph Time'+this.graph_time);
            this.ChartDataService.getChartdata_time_media_grp_four_weekly(this.selected_model_id,this.multiselectBrandList.value.join('~')).subscribe((chartMediaResponseData)=>{
              this.data_time_line_grp_media=chartMediaResponseData;
              //console.log(chartMediaResponseData);  
              
              this.load_media_grp=2;
              this.show_download_grp_btn=1;
            });

        }



      }else{
          
        console.log('From has no value');
        console.log(this.multiselectBrandList);
        
          this.data_time_line_grp_media=[];
          this.load_media_grp=1; 

      }


}

















}
