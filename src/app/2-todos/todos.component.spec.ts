/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from } from 'rxjs';

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  // it('should load todos from the server', () => {
  //   // will not work if there are dependencies which are provided for a
  //   // specific component, only works with dependencies provided on the app.module.
  //   let service = TestBed.inject(TodoService)

  //   // to get service from a component provided level:
  //   // fixture.debugElement.injector.get(TodoService);

  //   spyOn(service, 'getTodos').and.returnValue(from([ [1, 2, 3] ]));

  //   fixture.detectChanges();

  //   expect(component.todos.length).toBe(3);
  // });

  it('should load todos from the server', fakeAsync(() => {
    // will not work if there are dependencies which are provided for a
    // specific component, only works with dependencies provided on the app.module.
    let service = TestBed.inject(TodoService)

    // to get service from a component provided level:
    // fixture.debugElement.injector.get(TodoService);

    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

    fixture.detectChanges();

    tick();
    expect(component.todos.length).toBe(3);
  }));
});
