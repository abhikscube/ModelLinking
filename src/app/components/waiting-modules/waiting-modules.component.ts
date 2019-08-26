import { Component, OnInit } from '@angular/core';
import { WaitingModuleService } from '../../service/waiting-module.service';

@Component({
  selector: 'app-waiting-modules',
  templateUrl: './waiting-modules.component.html',
  styleUrls: ['./waiting-modules.component.css']
})
export class WaitingModulesComponent implements OnInit {


  WatingModelList: any;


  constructor(public WaitingModuleService: WaitingModuleService) { }

  ngOnInit() {

    console.log('huiiii');

    this.WatingModelList=[{"id":1,"name":"MoAflac Distribution"},
                            {"id":2,"name":"Ceader Model"},
                            {"id":3,"name":"Gen X Market Plan Separator"}];

      /*
        this.WaitingModuleService.getModelList().subscribe((modelResponseData)=>{
          this.WatingModelList=modelResponseData;
        });
    */

  }

}
