import { Injectable } from '@angular/core';
import { filter, map, Observable, of, switchMap } from 'rxjs';

export interface UserData {
  id: number;
  name: string;
  age: number;
  city: string;
}

@Injectable({
  providedIn: 'root'
})
export class SwitchMapService {

  constructor() { }

  private userData: UserData[] = [
    {
      id: 1,
      name: 'Shubham',
      age: 22,
      city: 'Mumbai'
    },
    {
      id: 2,
      name: 'Riya',
      age: 22,
      city: 'Surat'
    },
    {
      id: 3,
      name: 'Yug',
      age: 22,
      city: 'Indore'
    },

  ]

  getUserNameById(id: number): Observable<string> {
    const user = this.userData.find((u) => u.id === id);
    return of(user).pipe(
      filter((u): u is UserData => u !== undefined),
      map((u) => u.name)
    );
  }

  getUserCityByName(name: string): Observable<string> {
    const user = this.userData.find((u) => u.name === name);
    return of(user).pipe(
      filter((u): u is UserData => u !== undefined),
      map((u) => u.city)
    );
  }

  getCityById(id: number): Observable<string> {
    return this.getUserNameById(id).pipe(
      switchMap((name) => this.getUserCityByName(name))
    );
  }

}
