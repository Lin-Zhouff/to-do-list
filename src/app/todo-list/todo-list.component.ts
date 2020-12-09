import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() itme;
  items = [
    {id: 0, name: 'first'},
    {id: 1, name: 'second'}
    ];
  constructor() { }

  ngOnInit(): void {
  }


  delete(event): void{
    const key = event.target.findElement();
    console.log(key.value);
  }

}
