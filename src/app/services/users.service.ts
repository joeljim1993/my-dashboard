import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UsersResponse } from '../interfaces/req.response';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

interface State {
  users:User[];
  loading:boolean;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject( HttpClient);

  // "#" significa privado
  #state = signal<State>({
    users:[],
    loading:true
  })

  public users   = computed( ()=> this.#state().users );
  public loading = computed( ()=> this.#state().loading );


  constructor() {

    this.http.get<UsersResponse>('https://reqres.in/api/users')
    .pipe(
      delay(1500)
    )
    .subscribe(resp => {
      console.log("resp",resp);

      this.#state.set({
        loading:false,
        users: resp.data
      })


    })


   }

}
