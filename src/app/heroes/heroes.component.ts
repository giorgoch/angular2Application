import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


title="Tour of Heroes";
  constructor() { }

  ngOnInit() {
  }

}
