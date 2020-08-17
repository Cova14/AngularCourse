import { Component, OnInit, } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-heroes',
  templateUrl: './search-heroes.component.html',
  styles: [
  ]
})
export class SearchHeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscaHeroes(params['termino']);
    });
  }

  verHeroe( idx: number) {
    this.router.navigate( ['/heroe', idx] );
  }

}
