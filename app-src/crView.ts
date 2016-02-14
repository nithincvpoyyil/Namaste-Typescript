
///<reference path="crModel.ts" />
///<reference path="../libs/jquery.d.ts" />
///<reference path="baseView.ts" />

import {CrModel} from './crModel';
import {BaseView} from './baseView';

export class CrView extends BaseView {

  constructor(targetNode) {
    super(targetNode);
    this.registerEvents();
  }

  registerEvents(): void {

    var self = this;
    self.logger("reg events");
    $(".add-btn", self.getContainer()).off("click").on("click", function() {
      self.getContainer().find(".cr-popup").addClass("orginal-size");

    });

    $(".close-btn", self.getContainer()).off("click").on("click", function() {
      $(this).parent().removeClass("orginal-size");
    });

    $(".submit-btn", self.getContainer()).off("click").on("click", function() {
      var text = self.getContainer().find("#cr-input").val();
      if (text) {
        self.getContainer().find("cr-popup").removeClass("orginal-size");
        self.trigger("add:CR", text);
      }
    });

  }

  addCR(crModel: CrModel): void {
    var newCRNode = $("<div>").addClass("column is-3");
    newCRNode.html(crModel.getName());
    this.getContainer().find(".cr-items").append(newCRNode);
  }

  removeCR(id: string): void {

  }
}
