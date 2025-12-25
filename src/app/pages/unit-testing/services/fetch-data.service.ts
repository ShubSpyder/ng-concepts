import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  http = inject(HttpClient);

  constructor() { }

  fetchData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
