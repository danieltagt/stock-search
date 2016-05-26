System.register(['angular2/core', './stock.service', 'angular2/http', './stock-list.component'], function(exports_1, context_1) {
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
    var core_1, stock_service_1, http_1, stock_list_component_1;
    var SearchFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (stock_service_1_1) {
                stock_service_1 = stock_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (stock_list_component_1_1) {
                stock_list_component_1 = stock_list_component_1_1;
            }],
        execute: function() {
            SearchFormComponent = (function () {
                function SearchFormComponent(_stockService) {
                    this._stockService = _stockService;
                    this.isLoading = false;
                }
                SearchFormComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this.stocks = null;
                    this.isLoading = true;
                    this._stockService.getStocks(form.value.search)
                        .subscribe(function (data) { _this.isLoading = false; _this.stocks = data.query.results.quote; console.log(_this.stocks); })
                        , function (err) { return console.error("Error" + err); };
                };
                SearchFormComponent = __decorate([
                    core_1.Component({
                        selector: 'search-form',
                        providers: [http_1.HTTP_PROVIDERS, stock_service_1.StockService]
                    }),
                    core_1.View({
                        template: "\n    <h1>Stock Searcher</h1>\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.form)\">\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-xs-14 col-md-9\">\n            <input\n              ngControl=\"search\"\n              #search=\"ngForm\"\n              id=\"search\"\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Exampel on search input: GOOG, AAPL, FB\"\n              required\n              minLength=\"2\">\n              <div *ngIf=\"search.touched && search.errors\">\n                <div class=\"alert alert-danger\" *ngIf=\"search.errors.required\">Search text is required.</div>\n                <div class=\"alert alert-danger\" *ngIf=\"search.errors.minlength\">Search text should be minimum 2 characters.</div>\n              </div>\n            </div>\n          <div class=\"col-xs-4 col-md-3\">\n            <button class=\"btn btn-primary\" type=\"submit\" style=\"margin-left: -25px;\">Search</button>\n          </div>\n        </div>\n      </div>\n    </form>\n    <stock-list [stocks]=\"stocks\"></stock-list>\n    <div class=\"spinner\" *ngIf=\"isLoading\">\n      <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n    </div>\n  ",
                        directives: [stock_list_component_1.StockList]
                    }), 
                    __metadata('design:paramtypes', [stock_service_1.StockService])
                ], SearchFormComponent);
                return SearchFormComponent;
            }());
            exports_1("SearchFormComponent", SearchFormComponent);
        }
    }
});
//# sourceMappingURL=search-form.component.js.map