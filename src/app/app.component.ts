import { Component } from '@angular/core';
import { TodoItem } from './todo-item.model';
import { todoItems } from './todo-list.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'introAngular';
  userName = 'Ertugrul';
  email = 'ertugrulgurkan16@gmail.com';
  message:string ='';
  isShowAllItems :boolean = true;
  constructor(){
    console.log(todoItems[0].isCompleted);
  }

  todoItems: TodoItem[]=todoItems;

  filterList(){
    this.isShowAllItems = !this.isShowAllItems;
    if (this.isShowAllItems) {
       this.todoItems = todoItems; 
    }
    else{
      this.todoItems = this.todoItems.filter(x=>!x.isCompleted);
    }

  }
  getButtonText(){
    return this.isShowAllItems ? "Show To Do" : "Show All";
  }
}
