import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { Favorites } from '../../services/favorites';

@Component({
  imports: [RouterLink],
  selector: 'app-recipe-card',
  styleUrl: './recipe-card.css',
  templateUrl: './recipe-card.html',
})
export class RecipeCard {
  recipe = input.required<Recipe>();
  fav = inject(Favorites);
}
