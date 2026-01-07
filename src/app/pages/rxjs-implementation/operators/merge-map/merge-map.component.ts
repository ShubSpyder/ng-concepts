import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { from, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss'
})
export class MergeMapComponent {
  results: string[] = [];

  start() {
    this.results = [];
    // Source values
    const letters = ['A', 'B', 'C'];

    from(letters).pipe(
      // mergeMap maps each value to an Observable and flattens it.
      // Since 'of' emits immediately/synchronously, this happens instantly for all items.
      mergeMap(letter => {
        return of(`Processed ${letter}`);
      })
    ).subscribe(result => {
      this.results.push(result);
      console.log(result);
    });
  }
}
