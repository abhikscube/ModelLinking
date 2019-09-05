import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ModeljsondadaService} from '../../service/modeljsondada.service';
import {Modeljson} from '../../model/modeljson';
import {ProjectLinkModalComponent} from '../project-link-modal/project-link-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-link-modules',
  templateUrl: './project-link-modules.component.html',
  styleUrls: ['./project-link-modules.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectLinkModulesComponent implements OnInit {
  
  dtOptions: DataTables.Settings = {};
  ModelList: Modeljson[]=[];


  constructor(public ModeljsondadaService: ModeljsondadaService,private modalService: NgbModal,) { }

  ngOnInit() {


    this.dtOptions = {

      pagingType: 'full_numbers',
      pageLength: 100,
      lengthMenu: [2,10,30,100],
      columnDefs: [
        { "orderable": false, "targets": [2,3,4] } ,
        { "width": "20%", "targets": 0 }  ,
        { "width": "30%", "targets": 1 }  ,
        { "width": "30%", "targets": 2 }  ,
        { "width": "10%", "targets": 3 }  ,
        { "width": "10%", "targets": 4 }     
      ]  

    }; 

      this.ModelList=this.ModeljsondadaService.modeldada;

  }

  openModal(jsonIndex:number) {

      const modalRef = this.modalService.open(ProjectLinkModalComponent);
      modalRef.componentInstance.jsonIndex = jsonIndex;
      modalRef.componentInstance.name = this.ModelList[jsonIndex].name;
      modalRef.componentInstance.ModelList = this.ModelList;

      modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {

      this.ModeljsondadaService.updateData(receivedEntry);
     // console.log(receivedEntry)

      //  console.log(this.ModeljsondadaService.modeldada);

    });
  }

  unlinkModel(i:any){

    this.ModeljsondadaService.unlinkModelservice(i);

  }

}
