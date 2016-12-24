import { Injectable } from '@angular/core';

@Injectable()
export class TodoDataService {

  lastId: number = 0;

  todos: Todos[] = [];

  constructor() { }

//Simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this, todos.push(todo);
    return this;
  }

  //simulate DELETE /todos/:id
  deleteTodoById(id:number):TodoDataService {
    this.todos=this.todos
    .filter(todo=>todo.id!==id);
    return this;
  }

  //simulate PUT /todos/:id
  updateTodoById(id :number ,values:Object ={}):Todo{
    let todo = this.getTodoById(id);
    if(!todo){
      return null;
    }
  }

  //simulate GET /todos/:id
  getTodoById(id:number):Todo {
    return this.todos.filter(todo => todo.id === id)
    .pop();
  }

toggleTodoComplete(todo:Todo){
  let updatedTodo =this.updateTodoById(todo.id,{
    complete:!todo.complete
  });
  return updatedTodo;
}


}
