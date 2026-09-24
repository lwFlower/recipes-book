import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeCard } from '../recipe-card/recipe-card';
import { Recipes } from '../../services/recipes/recipes';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs';
import { Search } from '../../services/search/search';

@Component({
  imports: [ReactiveFormsModule, RecipeCard],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.css',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
  private api = inject(Recipes);
  private search = inject(Search);

  recipes = toSignal(
    this.search.query.valueChanges.pipe(
      startWith(this.search.query.value),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(q => this.api.search(q)),
    ),
    { initialValue: [] },
  )
}
