import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, active: boolean = true): string {
    return active ? '*'.repeat(value.length) : value;
  }

}
