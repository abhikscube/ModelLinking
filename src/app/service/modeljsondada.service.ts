import {Modeljson} from '../model/modeljson';

export class ModeljsondadaService{

    public modeldada: Modeljson[]=[];
   

    constructor(){


        this.modeldada=[
                            {"id":1,"name":"MoAflac Distribution","parent":-1,"status": "Normal"},
                            {"id":2,"name":"Ceader Model","parent":-1,"status": "Normal"},
                            {"id":3,"name":"Gen X Market Plan Separator","parent":-1,"status": "Normal"},
                            {"id":4,"name":"BUMillenials","parent":-1,"status": "Normal"},
                            {"id":5,"name":"BuGenX","parent":-1,"status": "Normal"},
                            {"id":6,"name":"BabyBoomer","parent":-1,"status": "Normal"}                         
                        ];

    }


    updateData(returnVlaue:any){

        console.log(returnVlaue);

        
        if(returnVlaue['selectedModel']){

                this.modeldada[returnVlaue['selectedModel']].status='Consumer';
                this.modeldada[returnVlaue['selectedModel']].parent=returnVlaue['jsonIndex'];
                this.modeldada[returnVlaue['jsonIndex']].status='Advisors';
        }

    
      }

      unlinkModelservice(index:number){

        this.modeldada[index].status='Normal';
        this.modeldada[this.modeldada[index].parent].status='Normal';
        this.modeldada[index].parent=-1;        


      }


      

}