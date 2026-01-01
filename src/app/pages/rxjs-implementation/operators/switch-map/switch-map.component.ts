import { Component } from '@angular/core';
import { of, switchMap, timer, map } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  imports: [],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.scss'
})
export class SwitchMapComponent {


  text$ = of('Hello');

  displayText: string = '';


  onClick() {
    this.text$.pipe(switchMap(text => timer(1000).pipe(map(() => text + ' World')))).subscribe(text => {
      this.displayText = text;
    });
  }

}
