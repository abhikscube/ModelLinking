import { Component, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
import {ModeljsondadaService} from '../../service/modeljsondada.service';
import {Modeljson} from '../../model/modeljson';
import {ProjectLinkModalComponent} from '../project-link-modal/project-link-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelListService } from '../../service/modellist.service';
import { DataTableDirective } from 'angular-datatables';


import { Subject } from 'rxjs';

@Component({
  selector: 'app-project-link-modules',
  templateUrl: './project-link-modules.component.html',
  styleUrls: ['./project-link-modules.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectLinkModulesComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  
  dtOptions: DataTables.Settings = {};
  ModelList: Modeljson[]=[];
  public linkedModelList: any[];



  dtTrigger: Subject<any> = new Subject<any>()


  constructor(public ModeljsondadaService: ModeljsondadaService,private modalService: NgbModal,public ModelListService: ModelListService) { }

  ngOnInit() {


 

     // this.ModelList=this.ModeljsondadaService.modeldada;

      this.ModelListService.getLinkedModelList().subscribe((modelResponseData)=>{

              this.dtOptions = {

                pagingType: 'full_numbers',
                columnDefs: [
                  { "orderable": false, "targets": [2,3,4] } ,
                  { "width": "20%", "targets": 0 }  ,
                  { "width": "30%", "targets": 1 }  ,
                  { "width": "30%", "targets": 2 }  ,
                  { "width": "10%", "targets": 3 }  ,
                  { "width": "10%", "targets": 4 }     
                ]  
          
              };
       
                this.linkedModelList=modelResponseData;                 
                this.dtTrigger.next();
     });



  }


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  openModal(modelId:number,modelName:string) {

      const modalRef = this.modalService.open(ProjectLinkModalComponent);
      modalRef.componentInstance.modelId = modelId;
      modalRef.componentInstance.modelName = modelName;
      //modalRef.componentInstance.ModelList = this.ModelList;

      modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {


        this.ModelListService.updateLinkedModelList(receivedEntry).subscribe((modelResponseData)=>{




                  this.ModelListService.getLinkedModelList().subscribe((modelResponseData)=>{
                   
                    this.linkedModelList=modelResponseData; 
                    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                      // Destroy the table first
                      dtInstance.destroy();
                      // Call the dtTrigger to rerender again
                      this.dtTrigger.next();
                    });
            
                });

          


        });



        //console.log('receive_arrayjhkjjk');
      //this.ModeljsondadaService.updateData(receivedEntry);
      //console.log(receivedEntry);

      //  console.log(this.ModeljsondadaService.modeldada);

    });
  }

  unlinkModel(i:any){

    this.ModelListService.unLinkedModel(i).subscribe((retmodelResponseData)=>{
                   
      this.ModelListService.getLinkedModelList().subscribe((modelResponseData)=>{
                   
        this.linkedModelList=modelResponseData; 
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          // Destroy the table first
          dtInstance.destroy();
          // Call the dtTrigger to rerender again
          this.dtTrigger.next();
        });

    });

  });
    
    
    
  //  this.ModelListService.unLinkedModel(i);


  }

}
