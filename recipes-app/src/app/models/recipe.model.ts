export interface Recipe {
    id: number;
    name: string;
    image: string;
    cuisine: string; // стиль кухни
    difficulty: string;
    prepTimeMinutes: number;
    ingredients: string[];
    instructions: string[];
}