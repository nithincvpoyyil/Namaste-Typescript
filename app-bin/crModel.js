define(["require", "exports"], function (require, exports) {
    var CrModel = (function () {
        function CrModel(name) {
            this.name = name;
            this.id = this.getRandomNumber();
            this.time = new Date();
        }
        CrModel.prototype.getRandomNumber = function () {
            return "ID" + Math.floor(Math.random() * (1000 - 1) + 1) + "-" + Math.floor(Math.random() * (1000 - 1) + 1);
        };
        CrModel.prototype.getName = function () {
            return this.name;
        };
        return CrModel;
    })();
    exports.CrModel = CrModel;
});
