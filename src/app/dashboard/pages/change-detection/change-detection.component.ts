import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template:`

  <app-title [title]=" currentframework()"  />

  <pre> {{ frameworkAsSignal() | json }}  </pre>
  <pre> {{ frameworkAsProperty | json }}  </pre>




  `,
  styles: `
    :host {
      display: block;
    }
  `,

})
export default class ChangeDetectionComponent {

  public currentframework = computed(
    ()=> `Change detection -${ this.frameworkAsSignal().name }`
  )

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  })

  public frameworkAsProperty = {
    name: 'Angular..',
    releaseDate: 2016,
  };

  constructor(){

    setTimeout(()=>{

      this.frameworkAsSignal.update(value => ({
        ...value,
        name :'React'
      }) )

      this.frameworkAsProperty.name = 'react'
      console.log("hecho");

    },3000)

  }


}
