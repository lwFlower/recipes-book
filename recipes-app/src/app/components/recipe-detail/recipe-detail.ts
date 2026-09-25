import { Component, computed, inject, input, signal } from '@angular/core';
import { Recipes } from '../../services/recipes/recipes';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { ReturnBack } from '../return-back/return-back';

@Component({
  imports: [ReturnBack],
  selector: 'app-recipe-detail',
  styleUrl: './recipe-detail.css',
  templateUrl: './recipe-detail.html',
})
export class RecipeDetail {
  id = input.required<string>();
  private api = inject(Recipes);
  recipe = toSignal(toObservable(this.id).pipe(switchMap(id => this.api.getById(id))));

  protected checked = signal(new Set<string>());
  protected checkedAll = computed(() => {
    const all = this.recipe()?.ingredients ?? [];
    return all.length > 0 && all.every(i => this.checked().has(i));
  })

  protected toggleIngredient(name: string) {
    this.checked.update(set => {
      const next = new Set(set);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  }

  protected toggleAllIngredients() {
    this.checked.set(
      this.checkedAll() ? new Set() : new Set(this.recipe()?.ingredients ?? [])
    );
  }
}
