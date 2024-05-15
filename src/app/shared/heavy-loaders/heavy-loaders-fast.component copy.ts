import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template : `
  <section [ngClass]="['w-full',cssClass]">

    <ng-content/>

  </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersFastComponent {

  @Input() cssClass!: string;

  constructor(){
    console.log("heavy fast creado ");

  }

 }
