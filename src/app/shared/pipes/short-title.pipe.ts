import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortTitle',
})
export class ShortTitlePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    return value.length > 17 ? `${value.substring(0, 17) }...` : value;
  }
}
