import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'statusShow'})
export class ShowStatus implements PipeTransform {
  transform(isOnline: boolean):string {
    if(isOnline){
        return 'online';
    }
    return 'offline';
  }
}