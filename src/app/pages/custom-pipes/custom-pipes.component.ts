import { Component } from '@angular/core';
import { MaskPipe } from '../../shared/pipes/mask.pipe';

@Component({
  selector: 'app-custom-pipes',
  imports: [MaskPipe],
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.scss'
})
export class CustomPipesComponent {

}
