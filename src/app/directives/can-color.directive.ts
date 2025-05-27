import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  standalone: true,
})
export class CanColorDirective {
  @Input()
  color: 'primary' | 'secondary' = 'primary';

  @HostBinding('class')
  protected get computedHostClasses() {
    return {
      [`df-${[this.color]}`]: true,
    };
  }
}
