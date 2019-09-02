import {Modeljson} from '../model/modeljson';

export class ModeljsondadaService{

    public modeldada: Modeljson[]=[];
    public brandMediaList: Object[]=[];
   

    constructor(){


        this.modeldada=[
                            {"id":1,"name":"MoAflac Distribution","parent":-1,"status": "Normal","chnagedName":"MoAflac Distribution"},
                            {"id":2,"name":"Ceader Model","parent":-1,"status": "Normal","chnagedName":"Ceader Model"},
                            {"id":3,"name":"Gen X Market Plan Separator","parent":-1,"status": "Normal","chnagedName":"Gen X Market Plan Separator"},
                            {"id":4,"name":"BUMillenials","parent":-1,"status": "Normal","chnagedName":"BUMillenials"},
                            {"id":5,"name":"BuGenX","parent":-1,"status": "Normal","chnagedName":"BuGenX"},
                            {"id":6,"name":"BabyBoomer","parent":-1,"status": "Normal","chnagedName":"BabyBoomer"}                         
                        ];

    }


    updateData(returnVlaue:any){

        console.log(returnVlaue);

        
        if(returnVlaue['selectedModel']){

                this.modeldada[returnVlaue['selectedModel']].status='Consumer';
                this.modeldada[returnVlaue['selectedModel']].parent=returnVlaue['jsonIndex'];
                this.modeldada[returnVlaue['jsonIndex']].status='Advisors';
                this.modeldada[returnVlaue['jsonIndex']].chnagedName=this.modeldada[returnVlaue['jsonIndex']].name+"/"+this.modeldada[returnVlaue['selectedModel']].name;
        }

    
      }

      unlinkModelservice(index:number){

        this.modeldada[index].status='Normal';
        this.modeldada[this.modeldada[index].parent].status='Normal';
        this.modeldada[this.modeldada[index].parent].chnagedName=this.modeldada[this.modeldada[index].parent].name;  
        this.modeldada[index].parent=-1;  
            


      }

      updateBrandMedialist(e:any){

        this.brandMediaList.push({'id': +e.itemData.id,'name': e.itemData.brand},
        {'id': 10+(+e.itemData.id),'pid':+e.itemData.id, 'name': 'TV'},
        {'id': 11+(+e.itemData.id),'pid':+e.itemData.id, 'name': 'Website'}
        );
    
  }

  
  removeElement(e:any){
       
          var index=0;
          var deletedIndex=0;
          this.brandMediaList.forEach(function(element:any) {

                if(element.id==e.itemData.id){
                  deletedIndex=index;
                }
                index++;
          })

          this.brandMediaList.splice(deletedIndex,1);

  }


}