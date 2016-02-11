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
            self.logger("reg events");
            $(".add-btn", self.getContainer()).off("click").on("click", function () {
                self.trigger("add:CR", "added data");
            });
        };
        CrView.prototype.addCR = function (data) {
            var newCRNode = $("<div>").addClass("column is-3");
            newCRNode.html(data);
            this.getContainer().append(newCRNode);
        };
        CrView.prototype.removeCR = function (id) {
        };
        return CrView;
    })(baseView_1.BaseView);
    exports.CrView = CrView;
});
