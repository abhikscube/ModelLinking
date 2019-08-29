import { Component, OnInit } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);


@Component({
  selector: 'app-generate-plan',
  templateUrl: './generate-plan.component.html',
  styleUrls: ['./generate-plan.component.css']
})
export class GeneratePlanComponent implements OnInit {

  public start: Date = new Date ("02/07/2013"); 
  public end: Date = new Date ("11/25/2017");
  
  constructor() { }

  public brandWithSubbrand :Object[]=
  [
    {id:1,name:'B_Aflac',hasChild:true},
    {id:2,pid:1,name:'B_aflac_accident'},
    {id:3,pid:1,name:'B_aflac_dental'}

  ];
// maps the appropriate column to fields property
public brandSubbrand: Object = { dataSource: this.brandWithSubbrand, 
  id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
// set the CheckBox to the TreeView
public showBrandCheckBox: boolean = true;

  public countries: Object[] = [
    { id: 1, name: 'Australia', hasChild: true, expanded: true },
    { id: 2, pid: 1, name: 'New South Wales' },
    { id: 3, pid: 1, name: 'Victoria',hasChild:true },
    {id:  26,  pid:3,name:'Sukdebpur'},
    {id:  27,  pid:3,name:'Amtala'},
    { id: 4, pid: 1, name: 'South Australia' },
    { id: 6, pid: 1, name: 'Western Australia' },
    { id: 7, name: 'Brazil', hasChild: true },
    { id: 8, pid: 7, name: 'Paraná' },
    { id: 9, pid: 7, name: 'Ceará' },
    { id: 10, pid: 7, name: 'Acre' },
    { id: 11, name: 'China', hasChild: true },
    { id: 12, pid: 11, name: 'Guangzhou' },
    { id: 13, pid: 11, name: 'Shanghai' },
    { id: 14, pid: 11, name: 'Beijing' },
    { id: 15, pid: 11, name: 'Shantou' },
    { id: 16, name: 'France', hasChild: true },
    { id: 17, pid: 16, name: 'Pays de la Loire' },
    { id: 18, pid: 16, name: 'Aquitaine' },
    { id: 19, pid: 16, name: 'Brittany' },
    { id: 20, pid: 16, name: 'Lorraine' },
    { id: 21, name: 'India', hasChild: true },
    { id: 22, pid: 21, name: 'Assam' },
    { id: 23, pid: 21, name: 'Bihar' },
    { id: 24, pid: 21, name: 'Tamil Nadu' },
    { id: 25, pid: 21, name: 'Punjab' }
];
// maps the appropriate column to fields property
public field: Object = { dataSource: this.countries, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
// set the CheckBox to the TreeView
public showCheckBox: boolean = true;

  ngOnInit() {
  }

}
