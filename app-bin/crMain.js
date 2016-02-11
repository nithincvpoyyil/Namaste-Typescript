define(["require", "exports", './crView'], function (require, exports, crView_1) {
    var CrMain = (function () {
        function CrMain() {
            this.view = new crView_1.CrView($(".cr-container"));
            this.addCR();
        }
        CrMain.prototype.addCR = function () {
            var self = this;
            var addCRFun = function (data) { self.addCRImpl.call(self, data); };
            this.view.on("add:CR", addCRFun, "more-args");
        };
        CrMain.prototype.addCRImpl = function (data) {
            this.view.addCR(data);
        };
        CrMain.prototype.removeCR = function () {
        };
        CrMain.prototype.removeCRImpl = function (data) {
            this.view.addCR(data);
        };
        return CrMain;
    })();
    exports.CrMain = CrMain;
});
