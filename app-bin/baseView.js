define(["require", "exports"], function (require, exports) {
    var BaseView = (function () {
        function BaseView(container) {
            this.container = container;
            this.eventCollection = [];
        }
        BaseView.prototype.on = function (type, handler, data) {
            this.eventCollection.push({ "event": type, "handler": handler, "data": data });
        };
        BaseView.prototype.off = function (type) {
            this.eventCollection = this.eventCollection.filter(function (eventManageItem) {
                return (eventManageItem["event"] !== type);
            });
        };
        BaseView.prototype.trigger = function (type, data) {
            var self = this;
            self.eventCollection.forEach(function (eventManageItem) {
                if (eventManageItem["event"] === type) {
                    eventManageItem["handler"].call(null, data, eventManageItem["data"]);
                }
            });
        };
        BaseView.prototype.getContainer = function () {
            return this.container;
        };
        BaseView.prototype.logger = function (msg) {
            console.info(new Date().getTime() + " >>" + msg);
        };
        BaseView.prototype.debug = function () {
            debugger;
        };
        return BaseView;
    })();
    exports.BaseView = BaseView;
});
