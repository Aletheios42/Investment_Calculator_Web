import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
/*
 *  -  @Input(); comprueba el objeto del tipo que coincide con el padre
 *  -  ?; porque hasta que el usuario no introduzca los datos y le de al boton
 *     de calcular, no tenemos valor y typescript peta
 *  -  [] es un array porque el objeto representa los datos de un año
 *      y nos pueden pedir el balance de 10 años por ejemplo.
 *      comprobar el array en el navegador con console.log
 * */
export class InvestmentResultsComponent {
  @Input() results?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalAmountInvested: number;
  }[];
}
