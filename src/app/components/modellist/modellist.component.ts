import { Component, OnInit } from '@angular/core';
import { ModelListService} from '../../service/modellist.service';

import { Modelint } from '../../../app/model/modelint';


@Component({
  selector: 'app-modellist',
  templateUrl: './modellist.component.html',
  styleUrls: ['./modellist.component.css']
})
export class ModellistComponent implements OnInit {

 public modelList=[];



  constructor(public ModelListService: ModelListService) { }

  ngOnInit() {

    console.log('hiiiiiii---2223232');
    
    //this.modelList = this.ModelListService.getModelList();

 
     // console.log(this.modelList);


  }

  selectModel(id: number){



  }

}
