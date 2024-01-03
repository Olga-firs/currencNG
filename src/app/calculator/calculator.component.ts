import { Component, inject,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Currency } from '../currency';
import { CurrenciesService } from '../currencies.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
  
export class CalculatorComponent {
   
  @Input() currencyCCList!: String[];
  currenciesList: Currency[] = [];
  currencyService: CurrenciesService = inject(CurrenciesService);
 
  uah: number = 1;
  rate1: number = 1;
  rate2: number = 1;
    
  constructor() {
    this.currencyService.getAllCurrencies().then(curList => {
      this.currenciesList = curList;
    });
  }
  // -------------------------
  get input1() {
    return   this.uah/this.rate1 ;
  }
  set input1( n ) {
    this.uah = n * this.rate1 ;
  }

  get input2() {
     return this.uah / this.rate2 ;
  }
  set input2( n ) {
    this.uah = n * this.rate2 ; 
  }
  
  
  
  //----------------------------
  set select1(n: string) {

    if (n === "UAH") {
       this.uah = this.uah / this.rate1;
       this.rate1= 1;
       return;
    }
    
    let input1 = 1;
    this.currencyService.getCurrenciesByCC(n).then(cur => {
      input1 = this.uah * this.rate1;
      this.rate1 = cur.rate;
      this.uah = input1 * this.rate1;
    });
  }


  //----------------------------
  set select2(n :string) {
     
    if (n === "UAH") {
       this.uah = this.uah / this.rate2;
       this.rate2 = 1;
       return;
    }
     
    let input2 = 1;
    this.currencyService.getCurrenciesByCC(n).then(cur => {
      input2 = this.uah * this.rate2;
      this.rate2 = cur.rate;
      this.uah = input2 * this.rate2;
    });
     
  }

}


