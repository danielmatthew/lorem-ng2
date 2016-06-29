import { VsFor } from './ng2-vs-for';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import FilterPipe from './item.filter';
import { DROPDOWN_DIRECTIVES } from './dropdown';
import { CollapseDirective } from './collapse';
// import { ACCORDION_DIRECTIVES } from './accordion';


@Component({
  selector: 'hero-list',
  templateUrl: 'app/toh/hero-list.component.html',
  directives: [ VsFor, DROPDOWN_DIRECTIVES, CollapseDirective ],
  providers: [ HeroService ],
  pipes: [ FilterPipe ]
})

export class HeroListComponent implements OnInit {
  errorMessage: string;
  heroes: Hero[];
  mode = 'Observable';

  constructor (private heroService: HeroService) {}

  ngOnInit() { this.getHeroes(); }

  public isCollapsed:boolean = true;

  getHeroes() {
    this.heroService.getHeroes()
                     .subscribe(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);
  }

  addHero (name: string) {
    if (!name) { return; }
    this.heroService.addHero(name)
                     .subscribe(
                       hero  => this.heroes.push(hero),
                       error =>  this.errorMessage = <any>error);
  }

  getSize(item, index){
    return 18;
  }
}
