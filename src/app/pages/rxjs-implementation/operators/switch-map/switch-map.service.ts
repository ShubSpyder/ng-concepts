import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchMapService {

  http = inject(HttpClient);



  constructor() { }
}
