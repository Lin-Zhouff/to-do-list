import {Component, Input, PipeTransform, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {DecimalPipe} from '@angular/common';
import {first, map, startWith} from 'rxjs/operators';

// tslint:disable-next-line:class-name
export interface item {
  name: string;
}

let items: item[] = [
  {name: 'first'},
  {name: 'second'}
];

function search(text: string, pipe: PipeTransform): item[] {
  return items.filter(itemlist => {
    const term = text.toLowerCase();
    return itemlist.name.toLowerCase().startsWith(term);
  });
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DecimalPipe],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit{
  title = 'to-do-list';
  newItemName = '';
  itmes = items;
  searchKey = '';

  add(): void {
    if (this.newItemName === ''){
      alert('todo cannot be empty');
    }else{
      let newitem = {} as item;
      newitem.name = this.newItemName;
      items.push(newitem);
    }
    console.log(this.itmes);
  }
  search(): void{
    console.log('hereeeeeeeeeeeeeeeeeee');
  }

  constructor() {
  }
  ngOnChanges(): void {
    console.log('this component don\'t have parent, so this will never show up');
  }
  ngOnInit(): void {
    console.log('app component Init');
  }

  ngDoCheck(): void{
    console.log('app component Check');
  }

  ngAfterContentInit(): void {
    console.log('when list loaded');
  }
  ngAfterContentChecked(): void {
    console.log('when list Checked');
  }
  ngAfterViewInit(): void {
    console.log('All components Inited');
  }
  ngAfterViewChecked(): void {
    console.log('All components Checked');
  }
  ngOnDestroy(): void {
    console.log('root component been removed');
  }
}
