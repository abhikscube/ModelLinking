import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Modeljson } from 'src/app/model/modeljson';
import { ModelListService } from '../../service/modellist.service';

@Component({
  selector: 'app-project-link-modal',
  templateUrl: './project-link-modal.component.html',
  styleUrls: ['./project-link-modal.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ProjectLinkModalComponent implements OnInit {

  @Input() public modelId: number;  
  @Input() public modelName:string; 
  //@Input() public ModelList:Modeljson[];
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  public selectedModel: number=-1;
  public returnVlaue:any[];  
  public displayStatus:string='Hide';
  public linkedModelListDrp: any[];

  constructor(public activeModal: NgbActiveModal,public ModelListService: ModelListService) { }

  ngOnInit() {

    console.log('this.jsonInde');  
    console.log(this.modelId);  
    
    this.ModelListService.getLinkedModelListDrp().subscribe((modelResponseData)=>{
      this.linkedModelListDrp=modelResponseData;
   }); 

  }

  passBack(){

    var returnVlaue=new Array();

    this.activeModal.dismiss();
    console.log('selected model'+this.selectedModel); 

    // returnVlaue.push(this.jsonIndex);
    // returnVlaue.push(this.selectedModel);

    returnVlaue['jsonIndex']=this.modelId;
    returnVlaue['selectedModel']=this.selectedModel;
    
    //console.log('returnVlaue'); 
    console.log(returnVlaue);

    this.passEntry.emit(returnVlaue); 
  }

  toggleButtn(){

    if(this.selectedModel==-1){
      this.displayStatus='Hide';
    }else{
      this.displayStatus='Show';     
    }

  }

}
