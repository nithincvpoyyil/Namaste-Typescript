
/**
 * Controller class which calls view class for rendering.
 */
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
    this.registerEvents();
  }

  // register events
  registerEvents() {
    var self = this;
    var addCRFunction = function(data: any): void { self.addCR.call(self, data) };
    this.view.on("add:CR", addCRFunction, "more-args");
  }

  // To add CR to crCollection and update the view
  addCR(data: string) {
    var crModel = new CrModel(data);
    this.crCollection.push(crModel);
    this.view.addCR(crModel);
  }

  // To remove cr from crCollection and update the view
  removeCR(id: string) {
    this.crCollection = this.crCollection.filter(function(item) {
      return item.getName() !== id;
    });
  }
}
