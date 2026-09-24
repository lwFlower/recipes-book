import { Component, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { Favorites } from '../../services/favorites/favorites';

@Component({
  imports: [RouterLink],
  selector: 'app-recipe-card',
  styleUrl: './recipe-card.css',
  templateUrl: './recipe-card.html',
})
export class RecipeCard {
  recipe = input.required<Recipe>();
  fav = inject(Favorites);

  protected pulsing = signal(false);

  protected toggle() {
    const willBeFav = !this.fav.has(this.recipe().id);
    this.fav.toggle(this.recipe().id);

    if (willBeFav) {
      this.pulsing.set(true);
    }
  }
}
