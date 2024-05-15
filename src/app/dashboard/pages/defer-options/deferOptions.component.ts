import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component copy';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [
    CommonModule,
    HeavyLoadersFastComponent,
    TitleComponent
  ],
  templateUrl: './deferOptions.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferOptionsComponent {



}
