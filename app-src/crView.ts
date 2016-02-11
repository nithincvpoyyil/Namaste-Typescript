
 ///<reference path="crModel.ts" />
 ///<reference path="../libs/jquery.d.ts" />
///<reference path="baseView.ts" />

import {CrModel} from './crModel';
import {BaseView} from './baseView';

export class CrView extends BaseView {
    
    private crCollection:CrModel[];
      
    constructor(targetNode){
        super(targetNode);
        this.registerEvents();
    }
    
    registerEvents():void{
    
        var self=this;
        self.logger("reg events");
        $(".add-btn",self.getContainer()).off("click").on("click",function(){
            self.trigger("add:CR","added data");
        });
        
    }
    
   addCR(data:string):void{
       var newCRNode=$("<div>").addClass("column is-3");
        newCRNode.html(data);
        this.getContainer().append(newCRNode);
    }
    
    removeCR(id:string):void{
        
    } 
}