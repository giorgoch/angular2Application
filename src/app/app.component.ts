import { Component, Input} from '@angular/core';
import { OnInit } from "@angular/core";
import { Hero } from "./heroShared/hero.model";
import { HeroService } from "./heroShared/hero.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
}
