import { Component, OnInit, Injectable, Input} from '@angular/core';
import { Hero } from "../heroShared/hero.model";
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }  from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';


@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero: Hero;

  constructor(
    private heroService:HeroService,
    private route:ActivateRoute,
    private location:Location
  ) { }

  ngOnInit() {
this.route.params.switchMap((params:Params)=>this.heroService.getHero(+params['id'])).subscribe(hero =>this.hero=hero);

  }



}
