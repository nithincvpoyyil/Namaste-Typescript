define(["require", "exports", './crModel', './crView'], function (require, exports, crModel_1, crView_1) {
    var CrMain = (function () {
        function CrMain() {
            this.crCollection = [];
            this.view = new crView_1.CrView($(".cr-container"));
            this.registerEvents();
        }
        CrMain.prototype.registerEvents = function () {
            var self = this;
            var addCRFunction = function (data) { self.addCR.call(self, data); };
            this.view.on("add:CR", addCRFunction, "more-args");
        };
        CrMain.prototype.addCR = function (data) {
            var crModel = new crModel_1.CrModel(data);
            this.crCollection.push(crModel);
            this.view.addCR(crModel);
        };
        CrMain.prototype.removeCR = function (id) {
            this.crCollection = this.crCollection.filter(function (item) {
                return item.getName() !== id;
            });
        };
        return CrMain;
    })();
    exports.CrMain = CrMain;
});
