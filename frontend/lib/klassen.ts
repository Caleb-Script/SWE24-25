import { BuchartTyp } from './typen';

export interface Buch {
    id: number;
    version: number;
    isbn: string;
    rating: number;
    art: BuchartTyp;
    preis: number;
    lieferbar: boolean;
    datum: string;
    homepage: string;
    schlagwoerter: string[];
    titel: Titel;
    rabatt: string;
}

export interface Titel {
    titel: string;
    untertitel?: string;
}
