import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { map } from 'rxjs';

@Service()
export class Recipes {
    private http = inject(HttpClient);
    private api = 'https://dummyjson.com/recipes';

    search(q: string) {
        return this.http
            .get<{ recipes: Recipe[] }>(`${this.api}/search`, { params: { q } })
            .pipe(map(res => res.recipes));
    }

    getById(id: string) {
        return this.http.get<Recipe>(`${this.api}/${id}`);
    }
}
