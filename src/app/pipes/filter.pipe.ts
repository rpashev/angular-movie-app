import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, query: string) {
    if (value.length === 0 || !value) return;
    if (query === '') return value;
    return value.filter((movie: any) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  }
}
