import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

import { environments } from 'src/environments/environment';

import { Hero } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environments.baseUrl;

  constructor( private http: HttpClient ) { }

  // Method to get all Heroes 
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes`);
  }

  // Method to get One Hero
  getHeroById( id: string ): Observable<Hero | undefined> {
    return this.http.get<Hero>(`${ this.baseUrl }/heroes/${ id }`)
      .pipe(
        catchError( err => of( undefined ) )
      )
  }

  // Method to autocomplete search bar 
  getSuggestions( query: string ): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes?q=${ query }&limit=5`);
  }

  // Method to create new hero
  addHero( hero: Hero ): Observable<Hero> {
    return this.http.post<Hero>(`${ this.baseUrl }/heroes`, hero );
  }

  // Method to update hero
  updateHero( hero: Hero ): Observable<Hero> {
    if( !hero.id ) throw Error('Hero id is required');
    return this.http.patch<Hero>(`${ this.baseUrl }/heroes/${ hero.id }`, hero );
  }

  // Method to delete hero 
  deleteHeroById( id: string ): Observable<boolean> {
    return this.http.delete(`${ this.baseUrl }/heroes/${ id }`)
      .pipe(
        map( resp => true ),
        catchError( err => of( false ) ),
      );
  }
}
