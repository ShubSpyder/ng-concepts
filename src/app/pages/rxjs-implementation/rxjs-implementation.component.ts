import { Component } from '@angular/core';
import { MapComponent } from './operators/map/map.component';
import { FilterComponent } from './operators/filter/filter.component';
import { SwitchMapComponent } from "./operators/switch-map/switch-map.component";

@Component({
  selector: 'app-rxjs-implementation',
  imports: [MapComponent, FilterComponent, SwitchMapComponent],
  templateUrl: './rxjs-implementation.component.html',
  styleUrl: './rxjs-implementation.component.scss'
})
export class RxjsImplementationComponent {

}
