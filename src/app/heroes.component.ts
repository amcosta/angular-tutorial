import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero";
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  styleUrls: ['./hero.component.css'],
  templateUrl: './hero.component.html'
})
export class HeroesComponent  {
    selectedHero: Hero;
    heroes: Hero[];

    constructor(private heroService: HeroService, private router: Router){
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
      this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    goToDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id])
    }

    ngOnInit(): void {
      this.getHeroes();
    }
}