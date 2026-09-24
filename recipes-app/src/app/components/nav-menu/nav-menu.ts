import { Component, inject } from '@angular/core';
import { Search } from '../../services/search/search';
import { ReactiveFormsModule } from '@angular/forms';
import { Favorites } from '../../services/favorites/favorites';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-nav-menu',
  styleUrl: './nav-menu.css',
  templateUrl: './nav-menu.html',
})
export class NavMenu {
  protected fav = inject(Favorites);
  protected search = inject(Search);
  private router = inject(Router);

  constructor() {
    this.search.query.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.router.navigate(['/']));
  }
}
