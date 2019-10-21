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

    public submodelist: any;

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




getLinkedModelListDrp(): Observable<any>{
   
    return this.http.get<any>('http://localhost:8080/prorelevantservice/marketsim/getlinkedmodellistfordrp/1');

}



getLinkedModelList(): Observable<any>{
   
    return this.http.get<any>('http://localhost:8080/prorelevantservice/marketsim/getlinkedlistmodel/1');

}


updateLinkedModelList(receivedEntry): Observable<any>{
   
    return this.http.get<any>('http://localhost:8080/prorelevantservice/marketsim/linkedmodel/1/'+receivedEntry['jsonIndex']+'/'+receivedEntry['selectedModel']);

}


unLinkedModel(modelId): Observable<any>{
   
    return this.http.get<any>('http://localhost:8080/prorelevantservice/marketsim/unlinkedmodel/1/'+modelId);

}



getPlanList(modelId): Observable<any>{
   
    return this.http.get<any>('http://localhost:8080/prorelevantservice/marketsim/getmediaplanlistbyclientidmodelid/1/'+modelId);

}



getBrandList(planId,modelId): Observable<any>{
   
    return this.http.get<any>('http://localhost:8080/prorelevantservice/marketsim/getbrandlistbyclientidmodelidplanid/1/'+modelId+'/'+planId);

}



getSubBrandList(brandListString): Observable<any>{
   
    return this.http.get<any>('http://localhost:8080/prorelevantservice/marketsim/getsubbrandlistbybrandlist/'+brandListString);

}



getStartDateEndDate(planId,modelId): Observable<any>{
   
    return this.http.get<any>('http://localhost:8080/prorelevantservice/marketsim/getstartdateenddate/1/'+modelId+'/'+planId);

}




getmediaListonBrand(selectedPlanId,selectedModelId,barndListStr): Observable<any>{
      
  return this.http.get<any>('http://localhost:8080/prorelevantservice/marketsim/getmediatree/1/'+selectedPlanId+'/'+selectedModelId+'/'+barndListStr);


}



getBrandListOnModelId(modelId): Observable<any>{
      
    return this.http.get<any>('http://localhost:8080/prorelevantservice/brand/getbrandsbymodelclient/1/'+modelId);
  
  
  }


}



