import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ChartDataService } from '../../service/chartdata.service';
import { ModelListService } from '../../service/modellist.service';

import { Observable } from 'rxjs/Observable';

import { Modelint } from '../../model/modelint';

declare let d3: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [
    '../../../../node_modules/nvd3/build/nv.d3.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {



  options_Brand_GRP;
  data_Brand_GRP;

  options_Media_GRP;
  data_Media_GRP;


  options_TimeSeries_GRP_Media_plan;
  data_TimeSeries_GRP_Media_plan;

  options_TimeSeries_GRP_Brand;
  data_TimeSeries_GRP_Brand; 

  options_TimeSeries_unit_sales_dollar_brand;
  data_TimeSeries_unit_sales_dollar_brand; 
  
  options_TimeSeries_unit_sales_dollar_simulation;
  data_TimeSeries_unit_sales_dollar_simulation;


  options_attribute_vs_avarage_score;
  data_attribute_vs_avarage_score;


  options_time_series_awareness_simulation;
  data_time_series_awareness_simulation;

  options_timeseries_persuation_simulation;
  data_timeseries_persuation_simulation;


  options_romi_simulation;
  data_romi_simulation;


 
  


 


  data_time_line_grp_media;
  options_time_line_grp_media;

  brand_list;  

  media_list; 

  selected_model_id;
 // public data_3: any[];

  loading_status: number;

  loading_status_simulation: number;

  load_brand_list: number;

  load_media_list: number;
  
  load_time_line_grp: number;

  load_time_line_grp_media: number;

  load_media_grp: number;

  
  yAxisLebel: string;

  yAxisLebel_simulation: string;

  public chartData: any[];

  public modelList: Modelint;

  constructor(public ModelListService: ModelListService,public ChartDataService: ChartDataService) { }




  ngOnInit() {

   
             


    this.options_Brand_GRP = {
      chart: {
        type: 'multiBarChart', //multiBarHorizontalChart
        height: 567,
        margin: { 

            top: 62,
            right: 20,
            bottom: 118,
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
            rotateLabels: 30      
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


    this.options_Media_GRP = {
        chart: {
          type: 'multiBarChart', //multiBarHorizontalChart
          height: 567,
          margin: { 
  
              top: 62,
              right: 20,
              bottom: 118,
              left: 90
  
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
              axisLabel: 'GRP',
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



      this.options_attribute_vs_avarage_score = {
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
                          axisLabel: 'Attributes',
                          rotateLabels: 30  
                      },
                      yAxis: {
                          axisLabel: 'Average Score',
                          axisLabelDistance: -10
                      }
                  }
              };




  



    this.options_TimeSeries_GRP_Brand = {
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
                   return d3.time.format('%x')(new Date(d));
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
                   return d3.time.format('%x')(new Date(d));
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




      this.options_TimeSeries_GRP_Media_plan = {
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
             // tickValues: [0, 1, 2, 3, 4, 5, 6],
              tickFormat: function(d){
                   return d3.time.format('%x')(new Date(d));
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







      this.options_time_series_awareness_simulation = {
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
             // tickValues: [0, 1, 2, 3, 4, 5, 6],
              tickFormat: function(d){
                   return d3.time.format('%x')(new Date(d));
              }
          },
          yAxis: {
            axisLabel: 'Awareness',
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



      this.options_timeseries_persuation_simulation = {
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
             // tickValues: [0, 1, 2, 3, 4, 5, 6],
              tickFormat: function(d){
                   return d3.time.format('%x')(new Date(d));
              }
          },
          yAxis: {
            axisLabel: 'Persuation',
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



  onChangeMultiBrandListForMediaVsGRP(options: any){

    var arr_option=new Array();
    var brand_string;
    this.load_media_grp=1
  
   for (var i = 0, l = options.length; i < l; i++) {
       if (options[i].selected) {
         //value.push(options[i].value);          
         arr_option.push(options[i].value);
  
         
       }
     }
  
     
     brand_string=arr_option.join('~');
     console.log(brand_string); 
  
  // console.log(target.length);
  
  
  
          this.ChartDataService.getChartdata_media(this.selected_model_id,brand_string).subscribe((chartMediaResponseData)=>{
            this.data_Media_GRP=chartMediaResponseData;
            console.log(chartMediaResponseData);  
            
            this.load_media_grp=2;
          });
  
  }












  onChangeModelList(modelId: number){


        if(modelId!= -1){ //Select only valid options condition


            this.load_brand_list=1;

            this.load_media_list=1;          
            

            this.selected_model_id=modelId;

             //Get Brand VS GRP chart data  
             this.ChartDataService.getChartdata(modelId).subscribe((chartResponseData)=>{
                this.data_Brand_GRP=chartResponseData;
                console.log(chartResponseData);        
             });
             


              //Get GRP VS Time planwise chart data
              this.ChartDataService.getChartdata_grp_time(modelId).subscribe((chartGRPtimeResponseData)=>{
                this.data_TimeSeries_GRP_Media_plan=chartGRPtimeResponseData;
                      
             });            
             
             
             
              //Get Brand Vs Prefarance chart data
              this.ChartDataService.getChartdata_brand_preferance(modelId).subscribe((chart_brand_preferance_Data)=>{
                this.data_attribute_vs_avarage_score=chart_brand_preferance_Data;     
             });

 
              //Get TimeSeries : Awareness by Simulation chart data
              this.ChartDataService.getChartdata_awareness_simulation(modelId).subscribe((chart_brand_preferance_Data)=>{
                this.data_time_series_awareness_simulation=chart_brand_preferance_Data;    
             });
                  

              //Get TimeSeries : persuation by Simulation chart data
              this.ChartDataService.getChartdata_persuation_simulation(modelId).subscribe((chart_brand_persuation_Data)=>{
                this.data_timeseries_persuation_simulation=chart_brand_persuation_Data;    
             });

              //Get ROMI by Simulation chart data
              this.ChartDataService.getChartdata_romi_simulation(modelId).subscribe((chart_romi_simulation_Data)=>{
                this.data_romi_simulation=chart_romi_simulation_Data;    
             });

             this.ChartDataService.getBrand_list(modelId).subscribe((brandResponseData)=>{
                this.brand_list=brandResponseData; 
                this.load_brand_list=2;             
                      
                });

                this.ChartDataService.getMedia_list(modelId).subscribe((brandResponseData)=>{
                  this.media_list=brandResponseData; 
                  this.load_media_list=2;             
                        
                  });




        }
        

  }



  onChangeChartType(chartType: number){

          if(chartType!= -1){ 

            this.loading_status=1;

            if(chartType==1){

                  this.yAxisLebel='SALES__UNIT';

            }else{

                  this.yAxisLebel='SALES__DOLLAR';
            }


            console.log(this.selected_model_id);  
            console.log(chartType);  

              //Get GRP VS Time planwise chart data
              this.ChartDataService.getChartdata_brand_wise_sales_vs_time(this.selected_model_id,chartType).subscribe((chartbrand_wise_sales_vs_timeData)=>{

                this.data_TimeSeries_unit_sales_dollar_brand=chartbrand_wise_sales_vs_timeData;
                  
                this.options_TimeSeries_unit_sales_dollar_brand = {
                  chart: {
                    type: 'stackedAreaChart', //multiBarHorizontalChart
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
                    showControls: true,
                    "controlLabels": {
                      "stacked": "Stacked - Absolute",
                      "expanded":"Stacked - Share"
                    },
                    controlOptions:['Stacked','Expanded' ],
                    showValues: true,
                  // duration: 500,
                    showLegend: true,
                    showYAxis: true,
                    showXAxis: true,
                    xAxis: {
                        axisLabel: 'Time',
                        showMaxMin: false,
                        tickFormat: function(d){
                            return d3.time.format('%x')(new Date(d));
                        }
                    },
                    yAxis: {
                      width: 75,
                      margin: {
                              top: 0,
                              right: 0,
                              bottom: 0,
                              left: 0
                              },
                      rotateLabels: 3,
                      rotateYLabel: true,       
                      axisLabel: this.yAxisLebel,
                      showMaxMin: false,
                      orient: 'left',
                      tickFormat: function(d){
                          return d3.format('s')(d*100);
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
                      fixedTop: null,
                      valueFormatter: function(d,i){
                       // return d3.format(',.1f')(d*100,i);
                       return d3.format(',.1f')(d*100,i);
                      },
                      offset: {
                        left: 0,
                        top: 0
                      },
                      hidden: false,
                      data: null,
                      id: "nvtooltip-82012"
                    },
                    margin: {
                      left: 55,
                      top: 30
                    },
                    width: null,
                    height: null,
                    showGuideLine: true,
                    svgContainer: null
                  },     
                }
                }                  

                  this.loading_status=2;   
                  console.log(this.loading_status);  
                }); 

          }



  }


  onChangeSimulationChartType(chartType: number){

    if(chartType!= -1){ 

      this.loading_status_simulation=1;

      if(chartType==1){

            this.yAxisLebel_simulation='SALES__UNIT';

      }else{

            this.yAxisLebel_simulation='SALES__DOLLAR';
      }


 

        //Get TimeSeries : Sales unit/Doller By Simulation
        this.ChartDataService.getChartdata_dollar_unit_simulation(this.selected_model_id,chartType).subscribe((chartbrand_wise_sales_vs_timeData)=>{

          this.data_TimeSeries_unit_sales_dollar_simulation=chartbrand_wise_sales_vs_timeData;
          
          this.options_TimeSeries_unit_sales_dollar_simulation = {
            chart: {
              type: 'lineChart', //multiBarHorizontalChart
              height: 456,
              margin : {
                top: 190,
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
                 // tickValues: [0, 1, 2, 3, 4, 5, 6],
                  tickFormat: function(d){
                       return d3.time.format('%x')(new Date(d));
                  }
              },
              yAxis: {
                axisLabel: this.yAxisLebel_simulation,
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

            this.loading_status_simulation=2;   
          }); 

    }



}



onChangeMultiBrandListForTimeSeriesGRPvsMediaType(options: any){

  var arr_option=new Array();
  var brand_string;
  this.load_time_line_grp_media=1

 for (var i = 0, l = options.length; i < l; i++) {
     if (options[i].selected) {
       //value.push(options[i].value);          
       arr_option.push(options[i].value);

       
     }
   }

   
   brand_string=arr_option.join('~');
   console.log(brand_string); 

// console.log(target.length);



        this.ChartDataService.getChartdata_time_media_grp(this.selected_model_id,brand_string).subscribe((chartMediaResponseData)=>{
          this.data_time_line_grp_media=chartMediaResponseData;
          console.log(chartMediaResponseData);  
          
          this.load_time_line_grp_media=2;
        });

}









onChangeMultiModelListForTimeSeriesGRPvsBrand(options: any){

     var arr_option=new Array();
     var media_string;
     this.load_time_line_grp=1;

    for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          //value.push(options[i].value);          
          arr_option.push(options[i].value);
 
          
        }
      }

      
      media_string=arr_option.join('~');
      console.log(media_string); 

   // console.log(target.length);

        this.ChartDataService.getChartdata_time_brand_grp(this.selected_model_id,media_string).subscribe((chartMediaResponseDataT)=>{
            
          
          
          this.data_TimeSeries_GRP_Brand=chartMediaResponseDataT;

           // this.data_44=this.data_56;
            this.load_time_line_grp=2;

            console.log(chartMediaResponseDataT);        
        });


  }


  

}
