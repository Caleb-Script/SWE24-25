import { GraphQLClient } from 'graphql-request';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { Buch } from '@/lib/klassen';
import { Suchkriterien } from '../lib/suchkriterien';
import dotenv from 'dotenv';
import { BUECHER_TABELLE } from './query/buecher';
import { extractErrorMessage } from './graphqlError';

dotenv.config();

const client = new GraphQLClient(
    process.env.NEXT_PUBLIC_BACKEND_SERVER_URL ||
        'https://buch:3000/graphql',
);

let BUECHER_PRO_SEITE: number;
if (process.env.BUECHER_PRO_SEITE) {
    BUECHER_PRO_SEITE = parseInt(process.env.BUECHER_PRO_SEITE);
}

export async function fetchBuecherTabelleSeiten(
    titel: string = '',
    filter: Suchkriterien[],
) {
    noStore();

    const daten = await fetchBuecherDaten(filter, titel);

    if (daten.buecher && daten.buecher.length > 0) {
        const anzahlSeiten = Math.ceil(
            Number(daten.buecher.length) / BUECHER_PRO_SEITE,
        );

        //await new Promise((resolve) => setTimeout(resolve, 3000));
        return anzahlSeiten;
    }
    return 0;
}

export async function fetchBuecherTabelle(
    titel: string = '',
    currentPage: number,
    filter: Suchkriterien[],
) {
    noStore();

    const offset = (currentPage - 1) * BUECHER_PRO_SEITE;
    const daten = await fetchBuecherDaten(filter, titel);
    if (daten.buecher && daten.buecher.length > 0) {
        const start = offset;
        const end = offset + BUECHER_PRO_SEITE;
        const buecherJeSeite = daten.buecher.slice(start, end);

        //await new Promise((resolve) => setTimeout(resolve, 3000));
        return buecherJeSeite;
    }
    return [];
}

async function fetchBuecherDaten(filter: Suchkriterien[], titel: string) {
    console.log('fetchBuecherDaten: GraphQL Client :', client);
    console.log(
        'fetchBuecherDaten: GraphQL Client initialized with URL:',
        process.env.NEXT_PUBLIC_BACKEND_SERVER_URL,
    );
    console.log('fetchBuecherDaten: %o', filter);
    const extractedCriteria: Partial<Suchkriterien> = filter.reduce(
        (acc, { key, value }) => ({
            ...acc,
            [key]: value,
        }),
        {},
    );

    let { isbn, rating, art, lieferbar, javascript, typescript } =
        extractedCriteria;

    try {
        const intRating = rating !== undefined ? parseInt(rating) : undefined;
        const data = await client.request<{ buecher: Buch[] }>(
            BUECHER_TABELLE,
            {
                titel,
                isbn,
                rating: intRating,
                art,
                lieferbar,
                javascript,
                typescript,
            },
        );

        console.log('fetchBuecherDaten: %o', data);
        return data;
    } catch (error: any) {
        console.error('Fehler beim Ausführen der GraphQL-Anfrage:', error);
        if (error.response?.errors?.length > 0) {
            const errorMessage = await extractErrorMessage(
                error.response.errors[0],
            );
            console.error(errorMessage);
        }
        console.error('Fehler beim Abrufen der Buch-Daten:', error);
        return { buecher: [] };
    }
}
