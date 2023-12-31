import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo) {
    return this.http.post('...', todo);
  }

  getTodos() : Observable<any> { 
    return this.http.get('...');
  }

  getTodosPromise() : Promise<Object> {
    return this.http.get('...').toPromise();
  }

  delete(id) {
    return this.http.delete('...');
  }
}