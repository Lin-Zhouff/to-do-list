import {Component, Input, PipeTransform} from '@angular/core';
import { FormControl } from '@angular/forms';
import {DecimalPipe} from '@angular/common';
import {first, map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';

// tslint:disable-next-line:class-name
interface item{
  name: string;
}

let items: item[] = [
  {name: 'first'},
  {name: 'second'}
];

function search(text: string, pipe: PipeTransform): item[] {
  return items.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term);
  });
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DecimalPipe],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
  newItemName = '';
  itmes: Observable<item[]>;
  filter = new FormControl('');

  add(): void {
    if (this.newItemName === ''){
      alert('todo cannot be empty');
    }else{
      let newitem = {} as item;
      newitem.name = this.newItemName;
      items.push(newitem);
    }

    this.itmes = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, DecimalPipe))
    );
  }

  constructor(pipe: DecimalPipe) {
    this.itmes = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }

  delete(event): void{
    let key = event.target.innerHTML;
    items.splice(items.findIndex(v => v.name === key), 1);
    this.itmes = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, DecimalPipe))
    );
  }

}
