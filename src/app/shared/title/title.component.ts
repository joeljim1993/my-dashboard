import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, booleanAttribute, input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<h1 class="text-3xl mb-3"> {{ title }} </h1>`,
  styleUrl: './title.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {

  @Input({ required:true}) title!:string;
  @Input({transform: booleanAttribute }) withShadow:boolean=false ;


 }
