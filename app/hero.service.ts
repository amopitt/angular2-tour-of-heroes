import { Injectable } from 'angular2/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    );
  }

  getHero(id: number) {
    return Promise.resolve(HEROES).then(
      heroes => {
        var filtered = heroes.filter(hero => hero.id === id);
        
        if (filtered && filtered.length > 0)
          return heroes.filter(hero => hero.id === id)[0]
        else
          {
            return new Hero(-1, "Boombastic");
          }
      }
    );
  }
}
