
///<reference path="crModel.ts" />
///<reference path="../libs/jquery.d.ts" />
///<reference path="baseView.ts" />

import {CrModel} from './crModel';
import {BaseView} from './baseView';

export class CrView extends BaseView {

 // constructor with targetNode as argument
  constructor(targetNode) {
    super(targetNode);
    this.registerEvents();
  }
  // method to register events
  registerEvents(): void {

    var self = this;

    // add button event
    $(".add-btn", self.getContainer()).off("click").on("click", function() {
      self.getContainer().find(".cr-popup").addClass("orginal-size");
    });

   // close button event
    $(".close-btn", self.getContainer()).off("click").on("click", function() {
      $(this).parent().removeClass("orginal-size");
    });
    // on clicking submit
    $(".submit-btn", self.getContainer()).off("click").on("click", function() {
      var text = self.getContainer().find("#cr-input").val();
      self.getContainer().find("#cr-input").val("")
      if (text) {
        self.getContainer().find(".cr-popup").removeClass("orginal-size");
        // triggering add:CR event with data
        self.trigger("add:CR", text);
      }
    });
  }

  // creating new CR item view
  addCR(crModel: CrModel): void {
    var newCRNode = $("<div>").addClass("column is-3");
    newCRNode.html(crModel.getName());
    this.getContainer().find(".cr-items").append(newCRNode);
  }

  removeCR(id: string): void {

  }
}
