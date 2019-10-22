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



  public consumerpriceBaseMarketPlanId:any;
  public consumerproductattributesBaseMarketPlanId:any;
  public consumerdistributionBaseMarketPlanId:any;
  public consumermediaBaseMarketPlanId:any;


public AdvisorySaveSimulationId:any;
public ConsumerSaveSimulationId:any;



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


      //Get Advisory model base plan id Start


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


                                                          //console.log(ReturnPlandata['priceplan'][0].id);

                                                          this.advisorpriceBaseMarketPlanId=ReturnPlandata['priceplan'][0].id;
                                                          console.log('Price Plan '+this.advisorpriceBaseMarketPlanId);



                                                         // console.log(ReturnPlandata['distributionplan'][0].id);

                                                          this.advisordistributionBaseMarketPlanId=ReturnPlandata['distributionplan'][0].id;
                                                          console.log('Distribute Base Plan '+this.advisordistributionBaseMarketPlanId);


                                                          //console.log(ReturnPlandata['mediaplan'][0].id);

                                                          this.advisormediaBaseMarketPlanId=ReturnPlandata['mediaplan'][0].id;
                                                          console.log('Media Base plan '+this.advisormediaBaseMarketPlanId);


                                                          //console.log(ReturnPlandata['productattributesplan'][0].id);

                                                          this.advisorproductattributesBaseMarketPlanId=ReturnPlandata['productattributesplan'][0].id;
                                                          console.log('Product Attribute Base Plan '+this.advisorproductattributesBaseMarketPlanId);



                                                    
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




      //Get Advisory model base plan id end










      //Get Consumer  model base plan id Start


      this.ModelListService.getBrandListOnModelId(this.selectedConsumerId).subscribe((ConResponseBrandData)=>{


        //call for subbrand start



        this.http.post("http://localhost:8080/prorelevantservice/product/bybrands",
        ConResponseBrandData)
              .subscribe(
                ConResponseSubbrandData  => {
              //console.log("POST Request is successful for second post ", ConResponseSubbrandData);


                //call for plandada start



                      this.http.post("http://localhost:8080/prorelevantservice/marketsim/getmarketsimplans/"+this.selectedConsumerId,
                      {"brands": ConResponseBrandData,"products":ConResponseSubbrandData} )
                            .subscribe(
                              ConReturnPlandata  => {
                            console.log("Market Plan Obj for Consumer ID ", ConReturnPlandata);
                              
                                  //this.returnData=ReturnPlandata;
                                  
                                  //console.log('success!');


                                  //console.log(ReturnPlandata['priceplan'][0].id);

                                  this.consumerpriceBaseMarketPlanId=ConReturnPlandata['priceplan'][0].id;
                                  console.log('Price Plan for Consumer '+this.consumerpriceBaseMarketPlanId);



                                 // console.log(ReturnPlandata['distributionplan'][0].id);

                                  this.consumerdistributionBaseMarketPlanId=ConReturnPlandata['distributionplan'][0].id;
                                  console.log('Distribute Base Plan Consumer '+this.consumerdistributionBaseMarketPlanId);


                                  //console.log(ReturnPlandata['mediaplan'][0].id);

                                  this.consumermediaBaseMarketPlanId=ConReturnPlandata['mediaplan'][0].id;
                                  console.log('Media Base plan Consumer '+this.consumermediaBaseMarketPlanId);


                                  //console.log(ReturnPlandata['productattributesplan'][0].id);

                                  this.consumerproductattributesBaseMarketPlanId=ConReturnPlandata['productattributesplan'][0].id;
                                  console.log('Product Attribute Base Plan Consumer '+this.consumerproductattributesBaseMarketPlanId);



                            
                            },
                            error  => {
            
                                  console.log("Error in second post Consumer ", error);
            
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




//Get Consumer  model base plan id end














   });


  }

  onSubmitForm(){

    
    console.log('Selected Advisor Model Id '+this.selectedModelId);
    console.log('Selected Consumer Model Id '+this.selectedConsumerId);
    console.log('Entered Simulation Name '+this.simulationName);
    console.log('Selected Simulation Template '+ this.simulationTemplateName);
    console.log('Selected Media Plan Name '+ this.mediaPlanName);









    this.http.post("http://localhost:8080/prorelevantservice/marketsim/savesimulation/1/"+this.selectedModelId+"?userid=1",
    {
      "simulationName": this.simulationName,
      "desc": this.simulationName,
      "simTempId": 9,
      "priceBasePlanId": this.advisorpriceBaseMarketPlanId,
      "mediaBasePlanId": this.advisormediaBaseMarketPlanId,
      "distBasePlanId": this.advisordistributionBaseMarketPlanId,
      "attributeBaseplanId": this.advisorproductattributesBaseMarketPlanId
    } )
          .subscribe(
          saveSimultaionReturnData  => {
          console.log("Save Simulation Return Data ", saveSimultaionReturnData);
            
         // this.returnData=data;

        //  Object.entries(saveSimultaionReturnData).forEach(entry => {
        //   console.log(entry[1])
        //   })

          //Object.values(object1)[0]

          //console.log(saveSimultaionReturnData['simId']);

          this.AdvisorySaveSimulationId=saveSimultaionReturnData['simId'];
          console.log('Advisory save simultaion ID '+this.AdvisorySaveSimulationId);



            //get Consumer simulation id start

                      this.http.post("http://localhost:8080/prorelevantservice/marketsim/savesimulation/1/"+this.selectedConsumerId+"?userid=1",
                      {
                        "simulationName": this.simulationName,
                        "desc": this.simulationName,
                        "simTempId": 9,
                        "priceBasePlanId": this.consumerpriceBaseMarketPlanId,
                        "mediaBasePlanId": this.consumermediaBaseMarketPlanId,
                        "distBasePlanId": this.consumerdistributionBaseMarketPlanId,
                        "attributeBaseplanId": this.consumerproductattributesBaseMarketPlanId
                      } )
                            .subscribe(
                              saveConsumerSimultaionReturnData  => {
                                
                                this.ConsumerSaveSimulationId=saveConsumerSimultaionReturnData['simId'];
                                console.log('Consumer save simultaion ID '+this.ConsumerSaveSimulationId);

                            



                                      //Run advisory Simultaion start



                                      this.http.get("http://localhost:8080/prorelevantservice/marketsim/runsimulation/"+this.AdvisorySaveSimulationId+"/"+this.selectedModelId,)
                                            .subscribe(
                                            returnDataForRunAdvisorySimultaion  => {
                                            console.log("Run Simultaion Success ", returnDataForRunAdvisorySimultaion);
 
                                          },
                                            error  => {
                            
                                            console.log("Error in Run Simultaion", error);
                            
                                            }
                            
                                            );




                                      //Run Advisory Simultaion end











                            },
                            error  => {
            
                            console.log("Error Consumer save simultaion ID ", error);
            
                            }
            
                            );


            //get Consumer simulation id end





          
          },
          error  => {

          console.log("Error Advisory save simultaion ID ", error);

          }

          );













  }





}
