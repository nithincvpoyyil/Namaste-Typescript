
///<reference path="crModel.ts" />
///<reference path="crService.ts" />
///<reference path="../libs/jquery.d.ts" />
import {CrModel} from './crModel';
import {CrService} from './crService';
import {CrView} from './crView';

export class CrMain {

  private crCollection: CrModel[];
  private jQuery: any;
  private view: CrView;

  constructor() {
    this.crCollection = [];
    this.view = new CrView($(".cr-container"));
    this.addCR();
  }

  addCR() {
    var self = this;
    var addCRFun = function(data: any): void { self.addCRImpl.call(self, data) };
    this.view.on("add:CR", addCRFun, "more-args");
  }

  addCRImpl(data: string) {
    var crModel = new CrModel(data);
    this.crCollection.push(crModel);
    this.view.addCR(crModel);
  }

  removeCR() {

  }

  removeCRImpl(id: string) {
    this.crCollection=this.crCollection.filter(function(item){
      return item.getName()!==id;
    });
  }
}
