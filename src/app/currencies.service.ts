import { Injectable } from '@angular/core';
import { Currency } from './currency';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
  url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
  
  currencyList: Currency[] = [];
  timeOfLastFetch: number = Date.now();
  periodOfRefresh: number = 3600000; //ms
  
  async getAllCurrencies(): Promise<Currency[]> {
    if (this.currencyList.length != 0 && this.timeOfLastFetch + this.periodOfRefresh < Date.now()  )
      return this.currencyList; 

    this.timeOfLastFetch = Date.now();
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getCurrenciesByCC(cc: string): Promise<Currency> {
    let cur: Currency = {
      r030: -1 ,
      cc: "UAH",
      txt: "українська гривня",
      rate: 1,
      exchangedate:"",
    };
    
    this.currencyList = await  this.getAllCurrencies();
    cur = this.currencyList.find(cur => cur.cc === cc) ?? cur;
   
   return cur;
}
  constructor() {
  }
}
