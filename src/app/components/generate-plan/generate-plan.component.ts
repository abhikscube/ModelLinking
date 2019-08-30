import { Component, OnInit } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { CheckBoxSelectionService, FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import {ModeljsondadaService} from '../../service/modeljsondada.service';
import {Modeljson} from '../../model/modeljson';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { json } from 'd3';
enableRipple(true);


@Component({
  selector: 'app-generate-plan',
  templateUrl: './generate-plan.component.html',
  styleUrls: ['./generate-plan.component.css']
})
export class GeneratePlanComponent implements OnInit {

  public start: Date = new Date ("02/07/2013"); 
  public end: Date = new Date ("11/25/2017");
  public mode:String;
  ModelList: Modeljson[]=[];
  public showMe:boolean=true;
  
  constructor(public ModeljsondadaService: ModeljsondadaService) { }

public brandsData:Object[]=[
  { id: '0', brand: 'ALL' },
  { id: '1', brand: 'B_Colonial Life' },
  { id: '3', brand: 'B_MetLife' },
  { id: '4', brand: 'B_Aflac_Dental' },
  { id: '5', brand: 'B_Aflac_Hospital Ind' }
];
// maps the appropriate column to fields property
public brandsField: Object = { text: 'brand', value: 'id' };
 // set placeholder to MultiSelect input element
 public placeholder: string = 'Select brands';


//sub brand object
public subBrands:Object[]=[];
public subBrandFields:Object = {text:'subbrand',value:'id'};
public placeholdersub:string='Select sub barnds';
public obj:Object[]=[];


  public countries: Object[] = [
    { id: 1, name: 'Australia', hasChild: true, expanded: true },
    { id: 2, pid: 1, name: 'New South Wales' },
    { id: 3, pid: 1, name: 'Victoria',hasChild:true },
    {id:  26,  pid:3,name:'Sukdebpur'},
    {id:  27,  pid:3,name:'Amtala'},
    { id: 4, pid: 1, name: 'South Australia' },
    { id: 21, name: 'India', hasChild: true },
    { id: 22, pid: 21, name: 'Assam' },
    { id: 23, pid: 21, name: 'Bihar' },
    { id: 24, pid: 21, name: 'Tamil Nadu' },
    { id: 25, pid: 21, name: 'Punjab' }
];
// maps the appropriate column to fields property
public field: Object = { dataSource: this.countries, id: 'id', 
parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
// set the CheckBox to the TreeView
public showCheckBox: boolean = true;

  ngOnInit() {

    this.ModelList=this.ModeljsondadaService.modeldada;

  }
  changeValue(e){
    //** Sub brand population */
  

   //console.log(this.subBrands);
   let tempObj:Object[]=[{id:'',subbrand:''}];
   this.subBrands =<Object[]>tempObj;
   console.log("First Time"+this.subBrands );
   

   let metalifesub_1 ={id:'1',subbrand:'aaaa'};
   let smetalifesub_2= {id:'2',subbrand:'MetLissssdfe_Cancer'};
   let metalifesub_3= {id:'3',subbrand:'MetLife_Denfsdfhsdfhsfkhtal'};
   //********************* */

   let B_Colonial_1 ={id:'4',subbrand:'Colonial Life_Accident'};
   let B_Colonial_2= {id:'5',subbrand:'Colonial Life_Cancer'};
   let B_Colonial_3= {id:'6',subbrand:'Colonial Life_Dental'};
    //  this.subBrands.push (metalifesub_1);
    //   this.subBrands.push(smetalifesub_2);
    //   this.subBrands.push(metalifesub_3);

    if(e.itemData.id==3){
     this.obj[0]=metalifesub_1;
     this.obj[1]=smetalifesub_2;
     this.obj[2]=metalifesub_3;
    }
    if(e.itemData.id==1){
      this.obj[3]=B_Colonial_1;
      this.obj[4]=B_Colonial_2;
      this.obj[5]=B_Colonial_3;
    }
    this.subBrands =this.obj;
    this.subBrandFields = {text:'subbrand',value:'id'};
      console.log(this.subBrands);
  }

}
