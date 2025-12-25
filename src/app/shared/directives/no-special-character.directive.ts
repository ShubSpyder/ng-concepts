import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[noSpecialCharacter]'
})
export class NoSpecialCharacterDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const initialValue = this.el.nativeElement.value;
    const filteredValue = initialValue.replace(/[^a-zA-Z0-9 ]/g, '');
    if (initialValue !== filteredValue) {
      this.el.nativeElement.value = filteredValue;
      event.target.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }

}
