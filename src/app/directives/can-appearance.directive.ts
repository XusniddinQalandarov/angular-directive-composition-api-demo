import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  standalone: true,
})
export class CanAppearanceDirective {
  @Input()
  appearance: 'solid' | 'stroked' = 'solid';

  @HostBinding('class')
  protected get computedHostClasses() {
    return {
      [`df-${[this.appearance]}`]: true,
    };
  }
}
