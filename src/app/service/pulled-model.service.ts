import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PulledModelService {

  private numberOfPulledModel:any;


  constructor() { 
    this.numberOfPulledModel ={"NumberOfModels":8};
  }
  public getNumberOfPulledModel():any{
    return this.numberOfPulledModel;
  }

}
