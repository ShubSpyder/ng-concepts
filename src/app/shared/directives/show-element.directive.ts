import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[showElement]'
})
export class ShowElementDirective {

  showElementCondition: boolean = true;
  private elseTemplateRef: TemplateRef<any> | null = null;

  constructor(private _viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>) { }

  @Input()
  set showElement(condition: boolean) {
    this.showElementCondition = condition;
    this._updateView();
  }

  @Input()
  set showElementElse(templateRef: TemplateRef<any>) {
    this.elseTemplateRef = templateRef;
    this._updateView();
  }

  _updateView() {
    this._viewContainer.clear();
    if (this.showElementCondition) {
      this._viewContainer.createEmbeddedView(this.templateRef);
    } else if (this.elseTemplateRef) {
      this._viewContainer.createEmbeddedView(this.elseTemplateRef);
    }
  }


}
