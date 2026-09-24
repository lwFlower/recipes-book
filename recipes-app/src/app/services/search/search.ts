import { Service } from '@angular/core';
import { FormControl } from '@angular/forms';

@Service()
export class Search {
    readonly query = new FormControl('', { nonNullable: true });
}
