<<<<<<< HEAD
import { Component } from '@angular/core';
import { GitHubService } from "./services/github.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'app works!';
=======
<<<<<<< HEAD
import { Component } from '@angular/core';
import { Hero } from "./Hero";

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
=======
import { Component, Input} from '@angular/core';
import { OnInit } from "@angular/core";
import { Hero } from "./heroShared/hero.model";
import { HeroService } from "./heroShared/hero.service";


>>>>>>> 2e6d7302e8cbf1ef833144e3f955aebf835d8b84

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
=======
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent  {

  title = 'Tour of Heroes';
  /*heroes : Hero[];
  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }*/
>>>>>>> 2e6d7302e8cbf1ef833144e3f955aebf835d8b84
>>>>>>> origin/master
}
