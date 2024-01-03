import { Component, Input } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Currency } from '../currency';

@Component({
  selector: 'app-usd-eur-rate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usd-eur-rate.component.html',
  styleUrl: './usd-eur-rate.component.css'
})
export class UsdEurRateComponent {
  @Input() usdEurList!: Currency[];
}
