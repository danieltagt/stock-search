System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var StockList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StockList = (function () {
                function StockList() {
                }
                StockList.prototype.hack = function (stocks) {
                    if (stocks == null) {
                        return stocks;
                    }
                    if (stocks instanceof Array) {
                        return stocks;
                    }
                    var array = [];
                    array.push(stocks);
                    return array;
                };
                StockList = __decorate([
                    core_1.Component({
                        selector: 'stock-list',
                        inputs: ['stocks'],
                    }),
                    core_1.View({
                        template: "\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-md-4\">Stock</div>\n        <div class=\"col-xs-6 col-md-4\">Change</div>\n        <div class=\"col-xs-6 col-md-4\">Low - High</div>\n      </div>\n      <hr>\n      <div *ngFor=\"#stock of hack(stocks)\">\n        <div class=\"row\">\n          <strong><div class=\"col-xs-18 col-md-12\">{{stock.Name}}</div></strong>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-6 col-md-4\">{{stock.LastTradePriceOnly}}</div>\n          <div class=\"col-xs-6 col-md-4\">{{stock.Change}}</div>\n          <div class=\"col-xs-6 col-md-4\">{{stock.DaysRange}}</div>\n        </div>\n      </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], StockList);
                return StockList;
            }());
            exports_1("StockList", StockList);
        }
    }
});
//# sourceMappingURL=stock-list.component.js.map