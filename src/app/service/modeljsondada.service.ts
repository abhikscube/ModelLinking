import {Modeljson} from '../model/modeljson';

export class ModeljsondadaService{

    public modeldada: Modeljson[]=[];

    constructor(){


        this.modeldada=[
                            {"id":1,"name":"MoAflac Distribution","status": "N"},
                            {"id":2,"name":"Ceader Model","status": "N"},
                            {"id":3,"name":"Gen X Market Plan Separator","status": "N"},
                            {"id":4,"name":"BUMillenials","status": "N"},
                            {"id":5,"name":"BuGenX","status": "N"},
                            {"id":6,"name":"BabyBoomer","status": "N"}                         
                        ];

    }


    updateData(returnVlaue:any){

        console.log(returnVlaue);

        
        if(returnVlaue[1]){

            for (var id of returnVlaue[1]) {

                this.modeldada[id].status='true';
                this.modeldada[id].name=this.modeldada[id].name+' (Consumer)';
            }
    
    
            this.modeldada[returnVlaue[0]].status='fixed';
            this.modeldada[returnVlaue[0]].name=this.modeldada[returnVlaue[0]].name+' (Advisors)';
        }

    
      }



}