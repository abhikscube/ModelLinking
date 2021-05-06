import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ModeldatalistService } from '../../service/modeldatalist.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

//test
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  modeldataList: any;
  load_media_grp;



  constructor(public ModeldatalistService: ModeldatalistService) { }

  ngOnInit() {

  
    this.dtOptions = {

      pagingType: 'full_numbers',
      pageLength: 2,
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

      this.ModeldatalistService.getModelDataList().subscribe((modeldatalistResponseData)=>{
        this.modeldataList=modeldatalistResponseData;     
        this.dtTrigger.next();
        this.load_media_grp=2;

        console.log(modeldatalistResponseData);
    },
    err => {
      console.log("err"); 
    console.log(err);
    });    

  }

}
