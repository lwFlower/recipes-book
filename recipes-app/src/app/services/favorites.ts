import { computed, effect, Service, signal } from '@angular/core';

@Service()
export class Favorites {
    private ids = signal<number[]>(JSON.parse(localStorage.getItem('fav') ?? '[]'));
    readonly count = computed(() => this.ids().length);

    constructor() {
        effect(() => localStorage.setItem('fav', JSON.stringify(this.ids())));
    }

    has(id: number) { return this.ids().includes(id)};

    toggle(id: number) {
        this.ids.update(ids => ids.includes(id) ? ids.filter(x => x !== id) : [...ids, id]);
    }
}
