import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'custompipe',
})
export class customPipe implements PipeTransform {
  transform(value: any, minlength: number) {
    return value.filter((val: any) => val.length > minlength);
  }
}
