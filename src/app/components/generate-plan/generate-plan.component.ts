import { Component, OnInit, ViewChild } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import {ModeljsondadaService} from '../../service/modeljsondada.service';
import { ModelListService } from '../../service/modellist.service';
import {Modeljson} from '../../model/modeljson';
import { DatePipe } from '@angular/common'
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
enableRipple(true);


@Component({
  selector: 'app-generate-plan',
  templateUrl: './generate-plan.component.html',
  styleUrls: ['./generate-plan.component.css'],
  providers: [DatePipe]
})
export class GeneratePlanComponent implements OnInit {

 // @ViewChild('multiselectelement') private refresh;
  public start: Date = new Date ("02/07/2013"); 
  public end: Date = new Date ("11/25/2017");
  public mode:String;
  ModelList: Modeljson[]=[];
  public showMe:boolean=true;

  @ViewChild('treeelement') private eventCategoriesTree;
  @ViewChild('multiselectBrandList') private multiselectBrandList;
  @ViewChild('multiselectSubBrandList') private multiselectSubBrandListssd;
  
  constructor(public ModeljsondadaService: ModeljsondadaService,public ModelListService: ModelListService,public datepipe: DatePipe,private http: HttpClient) { }

// public brandsData:Object=[
//   { id: '0', brand: 'ALL' },
//   { id: '1', brand: 'B_Colonial Life' },
//   { id: '3', brand: 'B_MetLife' },
//   { id: '4', brand: 'B_Aflac_Dental' },
//   { id: '5', brand: 'B_Aflac_Hospital Ind' }
// ];

public brandsData: any[];
public subBrandsData: any[];


// maps the appropriate column to fields property
public brandsField: Object = { text: 'brand', value: 'brand_id' };
 // set placeholder to MultiSelect input element
 public placeholder: string = 'Select brands';
 public box : string = 'Box';


//sub brand object
public subBrands:Array<Object>=[];
public subBrandFields:Object = {text:'subbrand_name',value:'subbrand_id'};
public placeholdersub:string='Select sub brands';
public brandDatas:Array <Object>=[];




public linkedModelListDrp: any[];


public planList: any[];

public selectedModelId: any;
public selectedPlanId: any;

public selectedBrandList: any[];
public mediaTree:any=[];

public mediaJesonsarr: any=[];

public newPlanName:any;

public planType:string='GEN';

public changePersuasion:any;

public awarenessProbability:any;

public grpImpression:any;

public valueType:string='P';

public subBrandListselected: any[];

public selectedConsumerId:any;

public ModelObjList:any=[];

public ConsumerExistingPlanObjectList:any=[];

public AdvisorBrandObjectList:any=[];

public ConsumerBrandObjectList:any=[];



public AdvisorSubBrandObjectList:any=[];

public ConsumerSubBrandObjectList:any=[];

public ExistingModelPlanIdForConsumer:any;

public SelectedBrandArrForConsumer:any=[];

public SelectedSubBrandArrForConsumer:any=[];

public returnData:any;

public loading_icon:boolean;

public showStatusMsg:boolean=false;

public planGenarationMsg:string;

public form_validate:number=1;

public minDate:any;



public localData: Object[] = [
  { id: 1, name: 'Discover Music', hasChild: true, expanded: true },
  { id: 3, pid: 1, name: 'Rising Artists' },
  { id: 12, pid: 11, name: 'Songs' },
  { id: 13, pid: 11, name: 'Bestselling Albums' },
  { id: 14, pid: 11, name: 'New Releases' },
  { id: 15, pid: 11, name: 'Bestselling Songs' }, 
  { id: 4, pid: 1, name: 'Live Music' },
  { id: 2, pid: 1, name: 'Hot Singles' },
  { id: 8, pid: 7, name: '100 Albums - $5 Each' },
  { id: 9, pid: 7, name: 'Hip-Hop and R&B Sale' },  
  { id: 7, name: 'Sales and Events', hasChild: true },
  { id: 10, pid: 7, name: 'CD Deals' },
  { id: 11, name: 'Categories', hasChild: true },
  { id: 16, name: 'MP3 Albums', hasChild: true },
  { id: 17, pid: 16, name: 'Rock' },
  { id: 18, pid: 16, name: 'Gospel' },
  { id: 19, pid: 16, name: 'Latin Music' },
  { id: 20, pid: 16, name: 'Jazz' },
  { id: 21, name: 'More in Music', hasChild: true },
  { id: 22, pid: 21, name: 'Music Trade-In' },
  { id: 23, pid: 21, name: 'Redeem a Gift Card' },
  { id: 24, pid: 21, name: 'Band T-Shirts' }
  ];



  public localDataTest:any = [{brandid:1942,brandname:"B_AIG",mediatypeid:194201,mediatype:"Natl_Newspaper",directivesid:19420101,directives:"Annuities"},
  {brandid:1942,brandname:"B_AIG",mediatypeid:194201,mediatype:"Natl_Newspaper",directivesid:19420102,directives:"Brand"},
  {brandid:1942,brandname:"B_AIG",mediatypeid:194202,mediatype:"Natl_Spot_radio",directivesid:19420201,directives:"Annuities"},
  {brandid:1942,brandname:"B_AIG",mediatypeid:194202,mediatype:"Natl_Spot_radio",directivesid:19420202,directives:"Brand"},
  {brandid:1942,brandname:"B_AIG",mediatypeid:194203,mediatype:"Newspaper",directivesid:19420301,directives:"Annuities"},
  {brandid:1942,brandname:"B_AIG",mediatypeid:194203,mediatype:"Newspaper",directivesid:19420302,directives:"Brand"}];


  

  // maps the appropriate column to fields property
  public treefield: Object = { dataSource: this.localData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };


public field: Object = { dataSource: this.ModeljsondadaService.brandMediaList,
  id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild',expanded:"expanded" };
// set the CheckBox to the TreeView
public showCheckBox: boolean = true;

  ngOnInit() {

    this.ModelList=this.ModeljsondadaService.modeldada;
    this.multiselectBrandList.mode='CheckBox';
    this.multiselectSubBrandListssd.mode='CheckBox';

    this.selectedBrandList=[];


    // Load Models
    this.ModelListService.getLinkedModelListDrp().subscribe((modelResponseData)=>{
      this.linkedModelListDrp=modelResponseData;

      this.ModelObjList=modelResponseData;
      //console.log(this.linkedModelListDrp);
   });





  }


  onSelectSubBrand(e){

    // console.log(e);
    // console.log(this.subBrandListselected);
    // console.log(this.multiselectSubBrandListssd);
     console.log(this.multiselectSubBrandListssd.value);


     
     
     
     this.subBrandListselected=this.multiselectSubBrandListssd.value.join(',')





  }

  onChangeModelList(modelId: number){

    console.log('OnChangeModel');

    this.selectedModelId=modelId;

    this.ModelListService.getPlanList(modelId).subscribe((ResponseData)=>{

      this.planList=ResponseData;

      this.brandsData=[];
      this.subBrandsData=[];

      this.multiselectSubBrandListssd.selectAll(false);
      this.multiselectBrandList.selectAll(false);



      for(let singelObj of this.ModelObjList){

          if(singelObj.modelId==this.selectedModelId)
          this.selectedConsumerId=singelObj.linkmodelId;


      }


      


   });


  }





  onChangePlanlList(planId: number){

    this.selectedPlanId=planId;

    this.ModelListService.getBrandList(planId, this.selectedModelId).subscribe((ResponseData)=>{

    // console.log(ResponseData);
     
      this.brandsData=ResponseData;
      this.subBrandsData=[];
      this.multiselectSubBrandListssd.selectAll(false);

      this.AdvisorBrandObjectList=ResponseData;

      
   });


   this.ModelListService.getStartDateEndDate(planId, this.selectedModelId).subscribe((ResponseData)=>{

    //this.brandsData=ResponseData;

    console.log(ResponseData);

    this.minDate=new Date(ResponseData.start_date);
    this.end=new Date(ResponseData.end_date);

    // console.log(this.start);
    // console.log(this.end);



    this.start = new Date(ResponseData.end_date);

    this.start.setFullYear(this.start.getFullYear()-1);



    
 });




  }



  public onRemove(e){

    console.log(e);
    var index =this.selectedBrandList.indexOf(e.itemData.brand_id);
    this.selectedBrandList.splice(index, 1);
    console.log('selected_brnad_list'+this.selectedBrandList);

    this.subBrandsData=[];

    this.multiselectSubBrandListssd.selectAll(false);


    if(this.selectedBrandList.length)
    {
      
      console.log('on selected removed inner');
      console.log(this.selectedBrandList.join(','));
    this.ModelListService.getSubBrandList(this.selectedBrandList.join(',')).subscribe((ResponseData)=>{

      this.subBrandsData=ResponseData;
      //this.subBrandsData=ResponseData;
      
      this.multiselectSubBrandListssd.fields.dataSource = ResponseData;
      
      console.log(ResponseData);
  
      
   });

   this.createMediaTree(this.selectedPlanId,this.selectedModelId,this.selectedBrandList.join(','));

    }else{

      this.subBrandsData=[];
      this.multiselectSubBrandListssd.fields.dataSource=[];

     // this.createMediaTree(this.selectedBrandList.join(','));
     // console.log('in bnalk');
      this.eventCategoriesTree.fields.dataSource = [];

    }



  }


  changeValueM(e){

      console.log(e);

      this.mediaTree.length=0;

      var mt_b: any;
      var mt_dr_b: any;
      var mt_dr_sc_b:any;

      //create MT-B
      // if(this.mediaTree.indexOf(e.data.)== -1){

       
        //create MT-B

        for(var i = 0;i<this.eventCategoriesTree.checkedNodes.length;i++) { 


              if((this.eventCategoriesTree.checkedNodes[i] < 999)){


                //get the jeson data
                
                console.log('e');
                for(let singelObj of this.mediaJesonsarr){

                    if(singelObj.id==this.eventCategoriesTree.checkedNodes[i]){

                      mt_b=singelObj.mediatype+'-'+singelObj.brandname;
                      mt_dr_b=singelObj.mediatype+'#'+singelObj.directives+'-'+singelObj.brandname;
                      mt_dr_sc_b=singelObj.mediatype+'#'+singelObj.directives+'##'+singelObj.subchanel+'-'+singelObj.brandname;

                      if(this.mediaTree.indexOf(mt_b) == -1){

                        console.log('ee');

                        this.mediaTree.push(mt_b);
                      
                      }


                      if(this.mediaTree.indexOf(mt_dr_b) == -1){

                        this.mediaTree.push(mt_dr_b);
                      
                      }


                      if(this.mediaTree.indexOf(mt_dr_sc_b) == -1){

                        this.mediaTree.push(mt_dr_sc_b);
                      
                      }

                    }

                }
                
                 

              }

        }
      
      
      
      //   alert("The selected node's id: " + this.eventCategoriesTree.checkedNodes);
      //   console.log(this.eventCategoriesTree.checkedNodes);

       
      //  console.log(this.mediaJesonsarr);
      //   console.log(this.mediaTree);

      // }
      //this.mediaTree.push();

  }


  changeValue(e){
 
   this.selectedBrandList.push(e.itemData.brand_id);

   // var selectedBrandList;

 
   
   this.ModelListService.getSubBrandList(this.selectedBrandList.join(',')).subscribe((ResponseData)=>{
    this.subBrandsData=ResponseData;

  // console.log(ResponseData);

    this.multiselectSubBrandListssd.fields.dataSource = ResponseData;

 });


  this.createMediaTree(this.selectedPlanId,this.selectedModelId,this.selectedBrandList.join(','));




  }


  reCreateList(){

    let result = []

    this.ModeljsondadaService.brandMediaList.forEach(function(elem:any) {
     
            if(elem.pid){
                  result.push({
                    'id': +elem.id,
                    'name': elem.name, 
                    'pid':elem.pid,        
                    'hasChild': true
                  })
            }else{
                result.push({
                  'id': +elem.id,
                  'name': elem.name,      
                  'hasChild': true
                })
            }

        })

        this.eventCategoriesTree.fields.dataSource = result;



  }






  createMediaTree(selectedPlanId,selectedModelId,barndListStr){

    var responseObj: any= [];



    if(barndListStr.length){

 
    this.ModelListService.getmediaListonBrand(selectedPlanId,selectedModelId,barndListStr).subscribe((modelResponseData)=>{
    
    
      var modelObj: any=[];
     // var responseObj: any= [];
  
      var brandName: any=[1];
      var mediaType: any=[1];
      var directives: any=[1];
  
      
      var count:number=0;
  
      console.log(modelResponseData);
      
      for(let singelObj of modelResponseData){
  
        var temp:any;
  
       
        this.mediaJesonsarr.push(singelObj);

        if(singelObj.subchanelid==0){



                     
          if(singelObj.directivesid==0){   
                  

                  

                        responseObj.push({ id: singelObj.mediatypeid, pid: singelObj.brandid, name: singelObj.mediatype });




                      if(brandName.indexOf(singelObj.brandid)== -1){

                      brandName.push(singelObj.brandid);
                      responseObj.push({ id: singelObj.brandid,name: singelObj.brandname,hasChild: true, expanded: false  });

                      }



               

              }else{



                      responseObj.push({ id: singelObj.directivesid, pid: singelObj.mediatypeid, name: singelObj.directives});
                 
                  


                        if(mediaType.indexOf(singelObj.mediatypeid)== -1){

                            mediaType.push(singelObj.mediatypeid);
                            responseObj.push({ id: singelObj.mediatypeid, pid: singelObj.brandid, name: singelObj.mediatype,hasChild: true, expanded: false  });

                        }


                        if(brandName.indexOf(singelObj.brandid)== -1){
                          
                          brandName.push(singelObj.brandid);
                          responseObj.push({ id: singelObj.brandid,name: singelObj.brandname,hasChild: true, expanded: false  });

                      }







              } 

 







        }else{




                  responseObj.push({ id: singelObj.id,name: singelObj.subchanel, pid: singelObj.directivesid});                       
                  
                  
                  if(directives.indexOf(singelObj.directivesid)== -1){

                          directives.push(singelObj.directivesid);
                          
                          responseObj.push({ id: singelObj.directivesid, pid: singelObj.mediatypeid, name: singelObj.directives,hasChild: true, expanded: false  });

                        }

                          if(mediaType.indexOf(singelObj.mediatypeid)== -1){

                              mediaType.push(singelObj.mediatypeid);
                              responseObj.push({ id: singelObj.mediatypeid, pid: singelObj.brandid, name: singelObj.mediatype,hasChild: true, expanded: false  });

                          }


                          if(brandName.indexOf(singelObj.brandid)== -1){
                            
                            brandName.push(singelObj.brandid);
                            responseObj.push({ id: singelObj.brandid,name: singelObj.brandname,hasChild: true, expanded: false  });

                        }


               



        }
      

  
      }
    

    this.eventCategoriesTree.fields.dataSource = responseObj;
    
      console.log(responseObj);
      
      //console.log(this.localData);
      //console.log('hioooo');
      //console.log(modelResponseData);
    
    
    });
  }else{

    this.eventCategoriesTree.fields.dataSource = responseObj;

  }

  
    
  //console.log(responseObj);


  }

  
  onSubmitForm1(){




  }
  
  
  
  onSubmitForm(){

    // "mediaPlanId": this.selectedPlanId,
    // "clientId": 1,
    // "modelId": this.selectedModelId,
    // "startDateSet": this.start,
    // "endDateSet": this.end,
    // "grpsImprsChng": this.grpImpression,
    // "awarenessProbChng": this.awarenessProbability,
    // "persuationChange": this.changePersuasion,
    // "newMediaPlanName": this.newPlanName,
    // "brand": this.selectedBrandList.join(','),
    // "subBrand": this.subBrandListselected,
    // "product": "%",
    // "mediatreeparam": this.mediaTree.join(','),
    // "steps": 1,
    // "type": this.planType,
    // "changeValueType": this.valueType



    

    if(this.selectedModelId == undefined){

      this.form_validate=0;
      alert('Select Model Id');

    }

 
    if(this.selectedPlanId == undefined){

      this.form_validate=0;
      alert('Select Media Plan');

    } 


    if(this.newPlanName == undefined){

      this.form_validate=0;
      alert('Enter Plan Name');

    } 


    if(this.grpImpression == undefined){

      this.form_validate=0;
      alert('Select GRP Impression');

    }

    if(this.changePersuasion == undefined){

      this.form_validate=0;
      alert('Enter Persuasion');

    }else if(!(this.changePersuasion >=0 && this.changePersuasion <=1)){

      this.form_validate=0;
      alert('Enter Persuasion value between 0 to 1');

    }

    console.log(this.awarenessProbability);

    if(this.awarenessProbability == undefined){

      this.form_validate=0;
      alert('Enter Awareness Probability');

    }else if(!(this.awarenessProbability >=0 && this.awarenessProbability <= 100)){

      this.form_validate=0;
      alert('Enter Awareness Probability value between 0 to 100');

    }


    if(this.selectedBrandList.length==0){

      this.form_validate=0;
      alert('Select any Brand');


    }else{

      if(this.subBrandListselected == undefined){

        this.form_validate=0;
        alert('Select any SubBrand');
  
      }  
  

    }







    if(this.form_validate){


    this.loading_icon=true;
     this.showStatusMsg=true; 
    this.planGenarationMsg='Plan genaration running';
   // console.log(this.multiselectSubBrandListssd.value);
  //  console.log(this.subBrandListselected);
    
  console.log('Selected Advisor ModelId '+this.selectedModelId);
  console.log('Selected Consumer ModelId '+this.selectedConsumerId);
  
    console.log('Selected Advisor Brand Object ');
    console.log(this.multiselectBrandList);

    // console.log(this.newPlanName);
    // console.log(this.planType);
    // console.log(this.changePersuasion);
    // console.log(this.awarenessProbability);
    // console.log(this.valueType);
    // console.log(this.grpImpression);
    

    this.SelectedBrandArrForConsumer.length=0;
    this.SelectedSubBrandArrForConsumer.legth=0;


      //get the Existing Plan Name for consumer model

    
                this.ModelListService.getPlanList(this.selectedConsumerId).subscribe((ResponseData)=>{
           
                      for(let singelObj of ResponseData){
                
                          if(singelObj.base_plan_name=='Media Base Market Plan')
                          this.ExistingModelPlanIdForConsumer=singelObj.base_market_plan_id;
                      }  
            

                      console.log('Selected Existing Media Plan ID (Base Plan ID) '+this.ExistingModelPlanIdForConsumer);   








                     this.ModelListService.getBrandList(this.ExistingModelPlanIdForConsumer, this.selectedConsumerId).subscribe((ResponseData)=>{


                      this.ConsumerBrandObjectList=ResponseData;
    
    
                      var seleectedBrandNameArr:any=[];
    
                      seleectedBrandNameArr= this.multiselectBrandList.text.split(',')
    
                      console.log('Selected Brand name arr for consumer ');
                      console.log(seleectedBrandNameArr);
                      console.log('Brand Object List for consumer ');
                      console.log(this.ConsumerBrandObjectList);
    
    
                          for(var index=0;index < seleectedBrandNameArr.length; index++ ){
    
    
                           
    
    
    
                            for(let singelAdvisorBrandObject of this.ConsumerBrandObjectList){
    
                                  if(singelAdvisorBrandObject.brand==seleectedBrandNameArr[index])
                                    this.SelectedBrandArrForConsumer.push(singelAdvisorBrandObject.brand_id);
                            }
    
                            
    
                          }
    
                
                      
                          console.log('Selected Brand string for consumer '+this.SelectedBrandArrForConsumer.join(','));





                          this.ModelListService.getSubBrandList(this.SelectedBrandArrForConsumer.join(',')).subscribe((ResponseData)=>{


                            this.ConsumerSubBrandObjectList=ResponseData;
    
    
                            var seleectedSubBrandNameArr:any=[];
          
                            seleectedSubBrandNameArr= this.multiselectSubBrandListssd.text.split(',')
          
                            console.log('Selected Sub Brand name arr for consumer ');
                            console.log(seleectedSubBrandNameArr);
                            console.log('Sub Brand Object List for consumer ');
                            console.log(this.ConsumerSubBrandObjectList);
          
          
                                for(var index=0;index < seleectedSubBrandNameArr.length; index++ ){
          
          
                                 
          
          
          
                                  for(let singelAdvisorSubBrandObject of this.ConsumerSubBrandObjectList){
          
                                        if(singelAdvisorSubBrandObject.subbrand_name==seleectedSubBrandNameArr[index])
                                          this.SelectedSubBrandArrForConsumer.push(singelAdvisorSubBrandObject.subbrand_id);
                                  }
          
                                  
          
                                }
      

                                console.log('Selected Sub Brand string for consumer '+this.SelectedSubBrandArrForConsumer.join(','));
                        
                        
                        
                        
                        
 
                                this.http.post("http://localhost:8080/prorelevantservice/simulationprocedure/mediaproc?userid=2",
                                {
                                  "mediaPlanId": this.selectedPlanId,
                                  "clientId": 1,
                                  "modelId": this.selectedModelId,
                                  "startDateSet": this.start,
                                  "endDateSet": this.end,
                                  "grpsImprsChng": this.grpImpression,
                                  "awarenessProbChng": (this.awarenessProbability/100),
                                  "persuationChange": this.changePersuasion,
                                  "newMediaPlanName": this.newPlanName,
                                  "brand": this.selectedBrandList.join(','),
                                  "subBrand": this.subBrandListselected,
                                  "product": "%",
                                  "mediatreeparam": this.mediaTree.join(','),
                                  "steps": 1,
                                  "type": this.planType,
                                  "changeValueType": this.valueType
                                } )
                                      .subscribe(
                                      data  => {
                                      console.log("POST Request is successful for first post ", data);
                      
                                     
                                             // console.log()
                                     
                                     
                                                this.http.post("http://localhost:8080/prorelevantservice/simulationprocedure/mediaproc?userid=2",
                                                {
                                                  "mediaPlanId": this.ExistingModelPlanIdForConsumer,
                                                  "clientId": 1,
                                                  "modelId": this.selectedConsumerId,
                                                  "startDateSet": this.start,
                                                  "endDateSet": this.end,
                                                  "grpsImprsChng": this.grpImpression,
                                                  "awarenessProbChng": (this.awarenessProbability/100),
                                                  "persuationChange": this.changePersuasion,
                                                  "newMediaPlanName": this.newPlanName+'_C@#$',
                                                  "brand": this.SelectedBrandArrForConsumer.join(','),
                                                  "subBrand": this.SelectedSubBrandArrForConsumer.join(','),
                                                  "product": "%",
                                                  "mediatreeparam": this.mediaTree.join(','),
                                                  "steps": 1,
                                                  "type": this.planType,
                                                  "changeValueType": this.valueType
                                                } )
                                                      .subscribe(
                                                      data  => {
                                                      console.log("POST Request is successful for second post ", data);
                                                        
                                                      this.returnData=data;
                                                      console.log(this.returnData);

                                                      this.showStatusMsg=true;
                                                      this.loading_icon=false;
                                                      this.planGenarationMsg='Plan genaration completed';

                                                     // this.linkedModelListDrp=[];

                                                      
                                                      },
                                                      error  => {
                                      
                                                      console.log("Error in second post", error);
                                      
                                                      }
                                      
                                                      );
                        
                      
                                      },
                                      error  => {
                      
                                      console.log("Error in first post", error);
                      
                                      }
                      
                                      );
                                             
                        
                        
                        
                        
                        
                              });













                  });










                });


                
      //get selected brand list for consumer model
      
      









}

} 

   
}
