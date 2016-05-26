import {Component, View} from 'angular2/core';
import {StockService} from './stock.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {StockList} from './stock-list.component';

@Component({
    selector: 'search-form',
    providers: [HTTP_PROVIDERS, StockService]
})
@View({
  template: `
    <h1>Stock Searcher</h1>
    <form #f="ngForm" (ngSubmit)="onSubmit(f.form)">
      <div class="form-group">
        <div class="row">
          <div class="col-xs-14 col-md-9">
            <input
              ngControl="search"
              #search="ngForm"
              id="search"
              type="text"
              class="form-control"
              placeholder="Exampel on search input: GOOG, AAPL, FB"
              required
              minLength="2">
              <div *ngIf="search.touched && search.errors">
                <div class="alert alert-danger" *ngIf="search.errors.required">Search text is required.</div>
                <div class="alert alert-danger" *ngIf="search.errors.minlength">Search text should be minimum 2 characters.</div>
              </div>
            </div>
          <div class="col-xs-4 col-md-3">
            <button class="btn btn-primary" type="submit" style="margin-left: -25px;">Search</button>
          </div>
        </div>
      </div>
    </form>
    <stock-list [stocks]="stocks"></stock-list>
    <div class="spinner" *ngIf="isLoading">
      <i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>
  `,
  directives: [StockList]
})
export class SearchFormComponent {
  isLoading = false;
  stocks: Object[];

  constructor(public _stockService: StockService){
  }

  onSubmit(form){
    this.stocks = null;
    this.isLoading = true;
    this._stockService.getStocks(form.value.search)
      .subscribe(data => {this.isLoading = false;this.stocks = data.query.results.quote;console.log(this.stocks);})
      ,err => console.error("Error" +err);
  }

}
