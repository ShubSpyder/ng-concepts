import { Component } from '@angular/core';
import { ShowElementDirective } from '../../shared/directives/show-element.directive';
import { NoSpecialCharacterDirective } from '../../shared/directives/no-special-character.directive';

@Component({
  selector: 'app-custom-directives',
  imports: [ShowElementDirective, NoSpecialCharacterDirective],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.scss'
})
export class CustomDirectivesComponent {

  isVisible: boolean = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

}
