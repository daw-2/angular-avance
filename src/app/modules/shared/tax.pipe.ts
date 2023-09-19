import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {
  transform(value: number, rate: number = 20): number {
    // const rate = args[0] || 20;

    return value * (1 + rate / 100);
  }
}
