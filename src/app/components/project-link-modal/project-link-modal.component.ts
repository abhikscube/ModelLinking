import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-link-modal',
  templateUrl: './project-link-modal.component.html',
  styleUrls: ['./project-link-modal.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ProjectLinkModalComponent implements OnInit {

  @Input() public id;  
  @Input() public ModelList;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  public selectedModel: Array<any>;
  public returnVlaue:any[];  
  

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {

    console.log(this.id);   
  }

  passBack(){

    var returnVlaue=new Array();

    this.activeModal.dismiss();
    //console.log(this.selectedModel); 

    returnVlaue.push(this.id);
    returnVlaue.push(this.selectedModel);

    console.log(returnVlaue); 
    this.passEntry.emit(returnVlaue); 
  }

}
