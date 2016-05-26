import {Component, View} from 'angular2/core';

@Component({
  selector: 'stock-list',
  inputs: ['stocks'],
})
@View({
  template: `
      <div class="row">
        <div class="col-xs-6 col-md-4">Stock</div>
        <div class="col-xs-6 col-md-4">Change</div>
        <div class="col-xs-6 col-md-4">Low - High</div>
      </div>
      <hr>
      <div *ngFor="#stock of hack(stocks)">
        <div class="row">
          <strong><div class="col-xs-18 col-md-12">{{stock.Name}}</div></strong>
        </div>
        <div class="row">
          <div class="col-xs-6 col-md-4">{{stock.LastTradePriceOnly}}</div>
          <div class="col-xs-6 col-md-4">{{stock.Change}}</div>
          <div class="col-xs-6 col-md-4">{{stock.DaysRange}}</div>
        </div>
      </div>
  `,
})
export class StockList {
  public stocks: Array<string>;

  hack(stocks){
    if(stocks == null){
      return stocks;
    }
    if(stocks instanceof Array ) {
      return stocks;
    }

    var array = []
    array.push(stocks);
    return array;
  }

}
