import { Component } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-filter',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  source$ = from([1, 2, 3, 4, 5]);
  sourceValues$ = this.source$.pipe(toArray());
  filteredData$ = this.source$.pipe(
    filter(num => num % 2 === 0),
    toArray()
  );

}
