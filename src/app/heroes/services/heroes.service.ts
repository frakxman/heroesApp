import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

import { environments } from 'src/environments/environment';

import { Hero } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environments.baseUrl;

  constructor( private http: HttpClient ) { }

  // Get all Heroes 
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${ this.baseUrl}/heroes`)
      // .subscribe( heroes => {
      //   console.log(heroes);
      // });
  }

  // Get One Hero
  getHeroById( id: string ): Observable<Hero | undefined> {
    return this.http.get<Hero>(`${ this.baseUrl}/heroes/${ id }`)
      .pipe(
        catchError( err => of( undefined ) )
      )
  }

  getSuggestions( query: string ): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes?q=${ query }&limit=5`);
  }
}
