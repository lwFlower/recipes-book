import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RecipeCard } from '../recipe-card/recipe-card';
import { Recipes } from '../../services/recipes';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs';

@Component({
  imports: [ReactiveFormsModule, RecipeCard],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.css',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
  private api = inject(Recipes);
  query = new FormControl('', { nonNullable: true });

  recipes = toSignal(
    this.query.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(q => this.api.search(q)),
    ),
    { initialValue: [] },
  )
}
