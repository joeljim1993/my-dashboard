import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/req.response';

import { toSignal } from '@angular/core/rxjs-interop'
import { switchMap, tap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [
      CommonModule,
      TitleComponent
  ],

    styles: `
    :host {
      display: block;
    }
  `,

    template: `
    @if(user()){
      <app-title [title]="userName()"></app-title>
    }@else {
      <h1>User</h1>
    }


  @if( user()){

    <section>
      <img [srcset]="user()?.avatar" [alt]="user()?.first_name">
      <h3> {{ user()?.email }} </h3>
      <h3> {{ userName() }} </h3>
    </section>
  }@else {
    <p>Cargando informacion</p>
  }

    `,
})
export default class UserComponent {


  private route = inject( ActivatedRoute);
  private userService = inject( UsersService);


  // public user = signal<User|undefined>(undefined);
  public userName = computed( ()=> `${ this.user()?.first_name } ${this.user()?.last_name}` )

  public user = toSignal<User|undefined>(
    this.route.params.pipe(

      switchMap( ({ id })=> this.userService.getUserById( id) ),
      tap(data => console.log("data",data)),
    )
  )


  constructor(){
  //  this.route.params.subscribe( params =>{
  //   console.log({params});

  //  })


  }

 }
