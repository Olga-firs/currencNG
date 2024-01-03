import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UsdEurRateComponent } from './usd-eur-rate/usd-eur-rate.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { Currency } from './currency';
import { CurrenciesService } from './currencies.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    UsdEurRateComponent,
    CalculatorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'З Новим Роком!';
  usdEurList: Currency[] = [];
  currenciesList: Currency[] = [];
  currencyCCList: String[] = [];
  currencyService: CurrenciesService = inject(CurrenciesService);
  

  constructor() {
    this.currencyService.getCurrenciesByCC("USD").then(cur => this.usdEurList.push(cur));
    this.currencyService.getCurrenciesByCC("EUR").then(cur => this.usdEurList.push(cur));
    this.currencyService.getAllCurrencies().then(curList => {
      this.currenciesList = curList;
      this.currencyCCList = this.currenciesList.map(el => el.cc).sort();
    });
  }


}
