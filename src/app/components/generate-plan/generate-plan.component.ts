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

public planType:any;

public changePersuasion:any;

public awarenessProbability:any;

public grpImpression:any;

public valueType:any;


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
   });





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


   });


  }





  onChangePlanlList(planId: number){

    this.selectedPlanId=planId;

    this.ModelListService.getBrandList(planId, this.selectedModelId).subscribe((ResponseData)=>{

     console.log(ResponseData);
     
      this.brandsData=ResponseData;
      this.subBrandsData=[];
      this.multiselectSubBrandListssd.selectAll(false);

      
   });


   this.ModelListService.getStartDateEndDate(planId, this.selectedModelId).subscribe((ResponseData)=>{

    //this.brandsData=ResponseData;

    console.log(ResponseData);

    this.start=new Date(ResponseData.start_date);
    this.end=new Date(ResponseData.end_date);

    console.log(this.start);
    console.log(this.end);

    
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
      console.log('in bnalk');
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


              if((this.eventCategoriesTree.checkedNodes[i] > 5000) && (this.eventCategoriesTree.checkedNodes[i] < 8000) ){


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
      
      
      
        alert("The selected node's id: " + this.eventCategoriesTree.checkedNodes);
        console.log(this.eventCategoriesTree.checkedNodes);

       
       console.log(this.mediaJesonsarr);
        console.log(this.mediaTree);

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
  

      
      for(let singelObj of modelResponseData){
  
        var temp:any;
  
       
        this.mediaJesonsarr.push(singelObj);

        if(singelObj.subchanelid==0){



                 // responseObj.push({ id: singelObj.subchanelid,name: singelObj.subchanel, pid: singelObj.directivesid});
                
          
          
                if(mediaType.indexOf(singelObj.brandid)== -1){
                                        
                    mediaType.push(singelObj.brandid);
                   // responseObj.push({ id: singelObj.brandid,name: singelObj.brandname,hasChild: true, expanded: false  });

                }






        }else{


      
          if(singelObj.directivesid==0){
  
  
            
   



                              if(mediaType.indexOf(singelObj.brandid)== -1){
                                
                                mediaType.push(singelObj.brandid);
                               // responseObj.push({ id: singelObj.brandid,name: singelObj.brandname,hasChild: true, expanded: false  });

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



  onSubmitForm(){



      console.log(this.newPlanName);
      console.log(this.planType);
      console.log(this.changePersuasion);
      console.log(this.awarenessProbability);
      console.log(this.valueType);
      console.log(this.grpImpression);
      

     // console.log(this.mediaTree);

      // const httpOptions = {
      //   headers: new HttpHeaders({ 
      //     'Access-Control-Allow-Origin':'*'
      //   })
      // };

            // this.http.post("http://localhost:8080/prorelevantservice/simulationprocedure/mediaproc?userid=2",
            // {
            //   "mediaPlanId": this.selectedPlanId,
            //   "clientId": 1,
            //   "modelId": this.selectedModelId,
            //   "startDateSet": this.start,
            //   "endDateSet": this.end,
            //   "grpsImprsChng": "102",
            //   "awarenessProbChng": "0.1",
            //   "persuationChange": "0.1",
            //   "newMediaPlanName": "plan2",
            //   "brand": "1941",
            //   "subBrand": "1948",
            //   "product": "%",
            //   "mediatreeparam": this.mediaTree.join(","),
            //   "steps": 1,
            //   "type": "GEN",
            //   "changeValueType": "P"
            // } )
            //       .subscribe(
            //       data  => {
            //       console.log("POST Request is successful ", data);

            //       //this.form.reset();
            //       },
            //       error  => {

            //       console.log("Error", error);

            //       }

            //       );

  }

   
}
