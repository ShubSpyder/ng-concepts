import { Component } from '@angular/core';
import { map, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-map',
  imports: [AsyncPipe],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

  data$ = of([1, 2, 3, 4, 5]);
  mappedData$ = this.data$.pipe(map(arr => arr.map(x => x * 10)));

}
