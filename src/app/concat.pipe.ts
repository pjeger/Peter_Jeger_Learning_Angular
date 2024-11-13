import { Pipe, PipeTransform } from '@angular/core';
import {smiteTwoGod} from "./Shared/Models/smiteTwoGod";

@Pipe({
  name: 'concat',
  standalone: true
})
export class ConcatPipe implements PipeTransform {

  transform(smiteTwoGod: smiteTwoGod): string {
    return `${smiteTwoGod.name} is a ${smiteTwoGod.class}`;
  }

}
