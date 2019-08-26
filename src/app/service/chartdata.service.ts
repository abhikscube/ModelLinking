import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { Modelint } from '../../app/model/modelint';
import { Observable } from 'rxjs/Observable';



@Injectable()




export class ChartDataService{

    constructor(public http: HttpClient) {}



    getChartdata(ModelID: number): Observable<any>{

        return this.http.get<any>('http://192.168.1.20:8080/prorelevantservice/marketsim/getgrpvsbranddata/1/'+ModelID)

    }


    getChartdata_media(ModelID: number,brand_string: string): Observable<any>{

        return this.http.get<any>('http://192.168.1.20:8080/prorelevantservice/marketsim/getmediavsgrpdata/1/'+ModelID+'/'+brand_string)

    }

    getChartdata_time_brand_grp(ModelID: number,media_string: string): Observable<any>{

        return this.http.get<any>('http://192.168.1.20:8080/prorelevantservice/marketsim/getgrpwithbrandtimesrs/1/'+ModelID+'/'+media_string)

    }

    getChartdata_time_media_grp(ModelID: number,brand_string: string): Observable<any>{

        return this.http.get<any>('http://192.168.1.20:8080/prorelevantservice/marketsim/getgrpvsmediabytime/1/'+ModelID+'/'+brand_string)

    }




    getBrand_list(ModelID: number): Observable<any>{

        return this.http.get<any>('http://192.168.1.20:8080/prorelevantservice/marketsim/getbrandlist/1/'+ModelID)

    }


    getMedia_list(ModelID: number): Observable<any>{

       // return this.http.get<any>('http://localhost:8012/restapi/marketsim_api.php?api_pr_name=get_media_list&model_id='+ModelID)

       return this.http.get<any>('http://192.168.1.20:8080/prorelevantservice/marketsim/getmedialist/1/'+ModelID)
  
    }



    getChartdata_grp_time(ModelID: number): Observable<any>{

        //return this.http.get<any>('http://localhost:8012/restapi/marketsim_api.php?api_pr_name=grp_vs_time&model_id='+ModelID)

        return this.http.get<any>('http://192.168.1.20:8080/prorelevantservice/marketsim/getgrpvsmediatimeseries/1/'+ModelID)
       

    }


    getChartdata_dollar_unit_simulation(ModelID: number,chartType: number): Observable<any>{

        return this.http.get<any>('http://192.168.1.20:8080/prorelevantservice/marketsim/getsalesvssimulationbytimeseries/1/'+ModelID+'/'+chartType)

    }


   

    getChartdata_brand_wise_sales_vs_time(ModelID: number,chartType: number): Observable<any>{

        return this.http.get<any>('http://192.168.1.20:8080/restapi/marketsim_api.php?api_pr_name=brand_wise_sales_vs_time&model_id='+ModelID+'&chartType='+chartType)

    }


    getChartdata_brand_preferance(ModelID: number): Observable<any>{

        return this.http.get<any>('http://192.168.1.20:8080/prorelevantservice/marketsim/getattributeavg/1/'+ModelID)

    }

    getChartdata_awareness_simulation(ModelID: number): Observable<any>{

        //return this.http.get<any>('http://localhost:8012/restapi/marketsim_api.php?api_pr_name=awareness_simulation&model_id='+ModelID)

       return this.http.get<any>('http://192.168.1.20:8080/prorelevantservice/marketsim/gettimeseriesawarenessvssimulation/1/'+ModelID)



    }



    getChartdata_persuation_simulation(ModelID: number): Observable<any>{

        return this.http.get<any>('http://192.168.1.20:8080/restapi/marketsim_api.php?api_pr_name=persuation_simulation&model_id='+ModelID)

    }



    getChartdata_romi_simulation(ModelID: number): Observable<any>{

        //return this.http.get<any>('http://localhost:8012/restapi/marketsim_api.php?api_pr_name=romi_simulation&model_id='+ModelID)

       return this.http.get<any>('http://192.168.1.20:8080/prorelevantservice/marketsim/getromivssimulation/1/'+ModelID)


    }





}