import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';


@Injectable()
export class HeroService {
	private heroesUrl = 'app/heroes'; // Url to web api
	private headers = new Headers({'Content-Type': 'application/json'});
	constructor(private http: Http) {}
	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
 	getHeroes(): Promise<Hero[]> {
	  return this.http.get(this.heroesUrl)
	  	.toPromise()
	  	.then(response => response.json().data as Hero[])
	  	.catch(this.handleError);
	}
	getHero(id: number): Promise<Hero> {
  		return this.getHeroes()
        .then(heroes => heroes.find(hero => hero.id === id));
	}

	update(hero: Hero): Promise<Hero> {
	  const url = `${this.heroesUrl}/${hero.id}`;
	  return this.http
	    .put(url, JSON.stringify(hero), {headers: this.headers})
	    .toPromise()
	    .then(() => hero)
	    .catch(this.handleError);
	}
	create(name: string): Promise<Hero> {
	  return this.http
	    .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data)
	    .catch(this.handleError);
	}
	delete(id: number): Promise<void> {
	  let url = `${this.heroesUrl}/${id}`;
	  return this.http.delete(url, {headers: this.headers})
	    .toPromise()
	    .then(() => null)
	    .catch(this.handleError);
	}
	
}