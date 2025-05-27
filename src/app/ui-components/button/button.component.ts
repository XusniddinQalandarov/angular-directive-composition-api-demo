import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CanColorDirective } from 'src/app/directives/can-color.directive';
import { CanDisableDirective } from 'src/app/directives/can-disable.directive'; // Assuming you also want this
import { CanAppearanceDirective } from 'src/app/directives/can-appearance.directive';

@Component({
  selector: 'button[dfButton], a[dfButton]',
  standalone: true,
  template: `
    <span class="button-label">
      <ng-content></ng-content>
    </span>
  `,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: CanColorDirective,
      inputs: ['color'],
    },
    {
      directive: CanAppearanceDirective,
      inputs: ['appearance:type'],
    },
    {
      directive: CanDisableDirective,
      inputs: ['disabled'],
    },
  ],
})
export class ButtonComponent {}
