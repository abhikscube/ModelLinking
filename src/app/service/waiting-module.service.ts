import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class WaitingModuleService {

  waitingModelData: any;

  constructor(private http: HttpClient) { }

  //cmont 

  getModelList(): Observable<any>{

    return this.http.get<any>('http://192.168.1.20:8080/prorelevantservice/model/byclient/1');

  }



}
