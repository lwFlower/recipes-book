import { Component, inject, input } from '@angular/core';
import { Recipes } from '../../services/recipes/recipes';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-recipe-detail',
  styleUrl: './recipe-detail.css',
  templateUrl: './recipe-detail.html',
})
export class RecipeDetail {
  id = input.required<string>();
  private api = inject(Recipes);

  recipe = toSignal(toObservable(this.id).pipe(switchMap(id => this.api.getById(id))));
}
