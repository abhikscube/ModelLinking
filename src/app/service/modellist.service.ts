import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { Modelint } from '../../app/model/modelint';
import { Observable } from 'rxjs/Observable';



@Injectable()

export class ModelListService{

    private modellist_1 = [
        { id: 1, name: 'one' },
        { id: 2, name: 'two' },
        { id: 3, name: 'three' },
        { id: 4, name: 'four' },
        { id: 5, name: 'five' },
        { id: 6, name: 'six' }
    ];

    public modellist: any;

    constructor(private http: HttpClient) {}


getModelList(): Observable<Modelint>{
   
    /*
    
    
    this.http.get<Modelint>('http://localhost:8080/prorelevantservice/model/byclient/1').subscribe(data => {
 
        //this.modellist=Object.keys(data).map(e=>data[e]);

        console.log(data.name);

      });
*/
   /*  

this.http.get('http://localhost:8080/prorelevantservice/model/byclient/1').subscribe(data => {
    console.log('kii',data);
    this.modellist=data;
    console.log('huiii',this.modellist);
    return data;
    });

    */
    //console.log('from service', this.http.get('http://localhost:8080/prorelevantservice/model/byclient/1',{responseType: 'json'}));

    
    
    
    //return this.http.get('http://localhost:8080/prorelevantservice/model/byclient/1',{responseType: 'json'});

    /*
    return this.http.get('http://localhost:8080/prorelevantservice/model/byclient/1').map(res => {

        return res;
      });
      */

     return this.http.get<Modelint>('http://192.168.1.20:8080/prorelevantservice/model/byclient/1');

}



}