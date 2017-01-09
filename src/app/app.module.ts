import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { GithubComponent } from './github/github.component';
import { GitHubService } from "./services/github.service";


=======
<<<<<<< HEAD

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
=======
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroService } from "./heroShared/hero.service";
import { AppRoutingModule } from "./app-routing.module";
>>>>>>> origin/master

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    GithubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpModule,GitHubService],
=======
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HeroService],
>>>>>>> 2e6d7302e8cbf1ef833144e3f955aebf835d8b84
>>>>>>> origin/master
  bootstrap: [AppComponent]
})
export class AppModule { }
