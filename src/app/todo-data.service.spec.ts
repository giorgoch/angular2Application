/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoDataService } from './todo-data.service';

//this  are the tests
describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  //test for get All Todos
  describe('#getAllTodos()', () => {
    it('should return an empty array by default', inject([TodoDataService], (service: TodoDataService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));
    it('should return all todos', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({ title: 'Hello 1', complete: false });
      let todo2 = new Todo({ title: 'Hello 2', complete: true });
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos().toEqual([todo1, todo2]));
    }));

  });

  //test for save
  describe('#save(todo)', () => {
    it('should automatically assign an incrementing id', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({ title: 'Hello 1 ', complete: false });
      let todo2 = new Todo({ title: 'Hello 2', complete: true });
    }));
  });

  //test for delete todo by id
  describe('#deleteTodoById(id)', () => {
    it('should remove todo with the corresponding id', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({ title: 'Hello 1', complete: false });
      let todo2 = new Todo({ title: 'Hello 2', complete: true });
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos().toEqual([todo1, todo2]));
      service.deleteTodoById(3);
      expect(service.getAllTodos().toEqual([todo1, todo2]));
    }));
  });

  //test for update
  describe('#updateTodoById(id,values)', () => {
    it('should return todo with the corresponding id and updated data', inject([TodoDataService], (service: TodoDataService) => {
      let todo = new Todo({ title: 'Hello 1', complete: false });
      service.addTodo(todo);
      let updateTodo = service.updateTodoById(1, { title: 'new title' });
      expect(updatedTodo.title).toEqual('new title');
    }));
    it('should return null if todo is not found', inject([TodoDataService], (service: TodoDataService) => {
      let todo = new Todo({ title: 'Hello 1 ', complete: false });
      service.addTodo(todo);
      let updatedTodo(=service.updateTodoById(2, { title: 'new title' }));
      expect(updatedTodo) = service.toEqual(null);
    }));
  });

  //test for toogle
  describe('#toogleTodoComplete(todo)', () => {
    it('should return the updated todo with inverse complete status', inject([TodoDataService], (service: TodoDataService) => {
      let todo = new Todo({ title: 'Hello 1', complete: false });
      service.addTodo(todo);
      let updatedTodo = service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(true);
      service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(false);
    }));
  });
});
