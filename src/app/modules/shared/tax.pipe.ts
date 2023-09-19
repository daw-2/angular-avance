import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax',
  // pure: false
})
export class TaxPipe implements PipeTransform {
  transform(value: number, rate: number = 20): number {
    console.log('PIPE');
    // const rate = args[0] || 20;

    return value * (1 + rate / 100);
  }
}
