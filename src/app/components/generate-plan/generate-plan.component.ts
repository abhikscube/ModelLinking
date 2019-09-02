import { Component, OnInit, ViewChild } from '@angular/core';
import { enableRipple, EmitType } from '@syncfusion/ej2-base';
import { CheckBoxSelectionService, FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import {ModeljsondadaService} from '../../service/modeljsondada.service';
import {Modeljson} from '../../model/modeljson';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { json } from 'd3';
enableRipple(true);

import{RemoveEventArgs} from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-generate-plan',
  templateUrl: './generate-plan.component.html',
  styleUrls: ['./generate-plan.component.css']
})
export class GeneratePlanComponent implements OnInit {

 // @ViewChild('multiselectelement') private refresh;
  public start: Date = new Date ("02/07/2013"); 
  public end: Date = new Date ("11/25/2017");
  public mode:String;
  ModelList: Modeljson[]=[];
  public showMe:boolean=true;
  
  constructor(public ModeljsondadaService: ModeljsondadaService) { }

public brandsData:Object=[
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
public subBrands:Array<Object>=[];
public subBrandFields:Object = {text:'subbrand',value:'id'};
public placeholdersub:string='Select sub barnds';
public brandDatas:Array <Object>=[];


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

  public onRemove:EmitType<RemoveEventArgs> = (e:RemoveEventArgs)=>{
    console.log(e.itemData);
  };

  changeValue(e){
   // console.log(e.itemData.id);

    
    if(e.itemData.id==3){
      this.brandDatas.push({id:'1',subbrand:'MetLife_Accident'});
      this.brandDatas.push({id:'2',subbrand:'MetLife_Cancer'});
      this.brandDatas.push({id:'4',subbrand:'MetLife_Dental'});
      this.brandDatas.push({id:'5',subbrand:'MetLife_Hospital Ind'});

    }
    if(e.itemData.id==1){
      this.brandDatas.push({id:'6',subbrand:'Colonial Life_Accident'});
      this.brandDatas.push({id:'7',subbrand:'Colonial Life_Cancer'});
      this.brandDatas.push({id:'8',subbrand:'Colonial Life_Dental'});
      

    }
    this.subBrands = [];

    // this.refresh.fields.dataSource=brandDatas;
    //console.log(this.brandDatas.length);

    for (let i of this.brandDatas){
      console.log(i);
      this.subBrands.push(i);
    }
  }
   
}
