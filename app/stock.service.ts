import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {Stock} from './stock';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StockService {
  private _BASE_URL = "https://query.yahooapis.com/v1/public/yql?q=";;
  private _yql_query;
  private _yql_query_str;
  private _query_str_final;

  constructor(private _http: Http){}

  getStocks(stockSearch){
    var query = this.getSearchQuery(stockSearch);
    this._yql_query = "select * from yahoo.finance.quote where symbol in" + "("+query+")";
    this._yql_query_str = encodeURI(this._BASE_URL + this._yql_query);
    this._query_str_final = this._yql_query_str + "&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

    return this._http.get(this._query_str_final)
      .map(data => data.json());
  }

  getSearchQuery(searchQuery){
    var array = searchQuery.split(",");
    var modSearchQuery = "";

    for(var item of array){
      item = "'"+item.toUpperCase()+"',";
      modSearchQuery = modSearchQuery.concat(item);
    }
    modSearchQuery = modSearchQuery.slice(0, -1);

    return modSearchQuery;
  }

}
