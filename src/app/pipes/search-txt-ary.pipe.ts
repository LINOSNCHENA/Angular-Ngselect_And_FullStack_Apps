import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchTxtAry'
})
export class SearchTxtAryPipe implements PipeTransform {
  transform(value: any, q: []): any {
    if (!q) { return value; }
    if (q === []) { return value; }
    return value.filter(function (w) {
      return w.city.indexOf(q) >= 0;
    });
  }
}
