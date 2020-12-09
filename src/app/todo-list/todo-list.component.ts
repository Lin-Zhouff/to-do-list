import {Component, Input, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit} from '@angular/core';
import {item} from '../app.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {
  @Input() items: item[];

  constructor() { }
  ngOnChanges(): void {
    console.log('adding new item by Input');
  }
  ngOnInit(): void {
    console.log('list Init');
  }

  ngDoCheck(): void{
    console.log('list Check');
  }

  ngAfterContentInit(): void {
    console.log('List Content Init');
  }
  ngAfterContentChecked(): void {
    console.log('List Content checked');
  }
  ngAfterViewInit(): void {
    console.log('All thing Inited');
  }
  ngAfterViewChecked(): void {
    console.log('All thing Checked');
  }
  ngOnDestroy(): void {
    console.log('List Component been removed');
  }

  delete(event): void{
    let key = event.target.innerHTML;
    this.items.splice(this.items.findIndex(v => v.name === key), 1);
  }

}
