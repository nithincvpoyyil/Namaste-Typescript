var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './baseView'], function (require, exports, baseView_1) {
    var CrView = (function (_super) {
        __extends(CrView, _super);
        function CrView(targetNode) {
            _super.call(this, targetNode);
            this.registerEvents();
        }
        CrView.prototype.registerEvents = function () {
            var self = this;
            $(".add-btn", self.getContainer()).off("click").on("click", function () {
                self.getContainer().find(".cr-popup").addClass("orginal-size");
            });
            $(".close-btn", self.getContainer()).off("click").on("click", function () {
                $(this).parent().removeClass("orginal-size");
            });
            $(".submit-btn", self.getContainer()).off("click").on("click", function () {
                var text = self.getContainer().find("#cr-input").val();
                if (text) {
                    self.getContainer().find(".cr-popup").removeClass("orginal-size");
                    self.trigger("add:CR", text);
                }
            });
        };
        CrView.prototype.addCR = function (crModel) {
            var newCRNode = $("<div>").addClass("column is-3");
            newCRNode.html(crModel.getName());
            this.getContainer().find(".cr-items").append(newCRNode);
        };
        CrView.prototype.removeCR = function (id) {
        };
        return CrView;
    })(baseView_1.BaseView);
    exports.CrView = CrView;
});
