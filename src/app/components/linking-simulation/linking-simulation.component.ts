import { Component, OnInit, ViewChild } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import {ModeljsondadaService} from '../../service/modeljsondada.service';
import { ModelListService } from '../../service/modellist.service';
import {Modeljson} from '../../model/modeljson';
import { DatePipe } from '@angular/common'
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
enableRipple(true);

@Component({
  selector: 'app-linking-simulation',
  templateUrl: './linking-simulation.component.html',
  styleUrls: ['./linking-simulation.component.css']
})
export class LinkingSimulationComponent implements OnInit {

  constructor(public ModeljsondadaService: ModeljsondadaService,public ModelListService: ModelListService,private http: HttpClient) { }


  public linkedModelListDrp: any[];
  public ModelObjList:any=[];
  public selectedModelId: any;
  public planList: any[];

  public selectedConsumerId:any;

  public newPlanName:any;
  public simulationName:any;
  public simulationTemplateName:any;
  public mediaPlanName:any;
  public advisorpriceBaseMarketPlanId:any;
  public advisorproductattributesBaseMarketPlanId:any;
  public advisordistributionBaseMarketPlanId:any;
  public advisormediaBaseMarketPlanId:any;
  public returnData:any;

  ngOnInit() {

    // Load Models
    this.ModelListService.getLinkedModelListDrp().subscribe((modelResponseData)=>{
      this.linkedModelListDrp=modelResponseData;

      this.ModelObjList=modelResponseData;
      //console.log(this.linkedModelListDrp);
   });



  }



  onChangeModelList(modelId: number){

    console.log('OnChangeModel');

    this.selectedModelId=modelId;

    this.ModelListService.getPlanList(modelId).subscribe((ResponseData)=>{

      this.planList=ResponseData;





      for(let singelObj of this.ModelObjList){

          if(singelObj.modelId==this.selectedModelId)
          this.selectedConsumerId=singelObj.linkmodelId;


      }

      this.ModelListService.getBrandListOnModelId(this.selectedModelId).subscribe((ResponseBrandData)=>{


                                //call for subbrand start



                                this.http.post("http://localhost:8080/prorelevantservice/product/bybrands",
                                ResponseBrandData)
                                      .subscribe(
                                      ResponseSubbrandData  => {
                                      console.log("POST Request is successful for second post ", ResponseSubbrandData);


                                        //call for plandada start



                                              this.http.post("http://localhost:8080/prorelevantservice/marketsim/getmarketsimplans/"+this.selectedModelId,
                                              {"brands": ResponseBrandData,"products":ResponseSubbrandData} )
                                                    .subscribe(
                                                    ReturnPlandata  => {
                                                    console.log("POST Request is successful for first post ", ReturnPlandata);
                                                      
                                                          //this.returnData=ReturnPlandata;
                                                          
                                                          console.log('success!');


                                                          console.log(ReturnPlandata['priceplan'][0].id);

                                                          this.advisorpriceBaseMarketPlanId=ReturnPlandata['priceplan'][0].id;
                                                          console.log(this.advisorpriceBaseMarketPlanId);



                                                          console.log(ReturnPlandata['distributionplan'][0].id);

                                                          this.advisordistributionBaseMarketPlanId=ReturnPlandata['distributionplan'][0].id;
                                                          console.log(this.advisordistributionBaseMarketPlanId);




                                                          // Object.keys(ReturnPlandata).forEach(function(key) {

                                                          //   if(key=='priceplan') {
                                                          //     var priceplanarr:any=[];
                                                          //     var pricdPlanId:any;
                                                          //     priceplanarr=ReturnPlandata[key];

                                                              
                                                              
                                                              
                                                          //     for(let singelObj of priceplanarr){


                                                          //       if(singelObj.basePlanName=='Price Base Market Plan'){


                                                          //        // this.returnData=singelObj.id;
                                                          //        pricdPlanId=singelObj.id;
                                                          //        this.returnData=pricdPlanId;
                                                          //         console.log('this.returnData');
                                                          //         console.log(singelObj.id);

                                                          //       }


                                                          //     }


                                                          //   }

                                                              


                                                          // });

                                                          

                                                    
                                                    },
                                                    error  => {
                                    
                                                          console.log("Error in second post", error);
                                    
                                                    }
                                    
                                                    );






                                        //call for plan data end

                                        

                                      
                                      },
                                      error  => {

                                      console.log("Error in second post", error);

                                      }

                                      );






                                //call for subbrand end




      });


   });


  }

  onSubmitForm(){

    
    console.log('Selected Advisor Model Id '+this.selectedModelId);
    console.log('Selected Consumer Model Id '+this.selectedConsumerId);
    console.log('Entered Simulation Name '+this.simulationName);
    console.log('Selected Simulation Template '+ this.simulationTemplateName);
    console.log('Selected Media Plan Name '+ this.mediaPlanName);

  }





}
