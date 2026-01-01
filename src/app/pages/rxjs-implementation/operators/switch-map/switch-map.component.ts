import { Component, inject } from '@angular/core';
import { of, switchMap, timer, map } from 'rxjs';
import { SwitchMapService } from './switch-map.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-map',
  imports: [FormsModule],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.scss'
})
export class SwitchMapComponent {


  text$ = of('Hello');

  displayText: string = '';
  userId: number = -1;

  switchMapService = inject(SwitchMapService);


  onClick() {
    this.text$.pipe(switchMap(text => timer(1000).pipe(map(() => text + ' World')))).subscribe(text => {
      this.displayText = text;
    });
  }

  click2() {
    let text = of('Welcome To');
    let case1 = text.pipe(map((value) => value + ' Tutorialspoint!'));
    case1.subscribe((value) => { console.log(value); });
  }

  findCityByUID() {
    if (this.userId == -1) {
      return;
    }
    this.switchMapService.getCityById(this.userId).subscribe((data) => {
      console.log('city', data);
    });
  }
}
