System.register(['angular2/http', 'rxjs/add/operator/map', 'angular2/core'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var StockService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StockService = (function () {
                function StockService(_http) {
                    this._http = _http;
                    this._BASE_URL = "https://query.yahooapis.com/v1/public/yql?q=";
                }
                ;
                StockService.prototype.getStocks = function (stockSearch) {
                    var query = this.getSearchQuery(stockSearch);
                    this._yql_query = "select * from yahoo.finance.quote where symbol in" + "(" + query + ")";
                    this._yql_query_str = encodeURI(this._BASE_URL + this._yql_query);
                    this._query_str_final = this._yql_query_str + "&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
                    return this._http.get(this._query_str_final)
                        .map(function (data) { return data.json(); });
                };
                StockService.prototype.getSearchQuery = function (searchQuery) {
                    var array = searchQuery.split(",");
                    var modSearchQuery = "";
                    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                        var item = array_1[_i];
                        item = "'" + item.toUpperCase() + "',";
                        modSearchQuery = modSearchQuery.concat(item);
                    }
                    modSearchQuery = modSearchQuery.slice(0, -1);
                    return modSearchQuery;
                };
                StockService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], StockService);
                return StockService;
            }());
            exports_1("StockService", StockService);
        }
    }
});
//# sourceMappingURL=stock.service.js.map