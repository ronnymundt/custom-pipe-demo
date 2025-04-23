import { Pipe, PipeTransform } from '@angular/core';
import { TMethods } from '../types/string-manipulation.type';

@Pipe({
  name: 'stringmanipulation',
})
export class StringManipulationPipe implements PipeTransform {
  public transform(value: string, method?: TMethods): string {
    switch (method) {
      case 'order':
        value = value.split('').sort().join('');
        break;
      case 'shuffle':
        value = value
          .split('')
          .sort(() => {
            return Math.random() - 0.5;
          })
          .join('');
        break;
      case 'camel':
        value = value
          .split('')
          .map((x: string, index: number) => {
            return index % 2 === 0 ? x.toLowerCase() : x.toUpperCase();
          })
          .join('');
        break;
      case 'reverse':
        value = value.split('').reverse().join('');
        break;
      default:
        break;
    }
    return value;
  }
}
