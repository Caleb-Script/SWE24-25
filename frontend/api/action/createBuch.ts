'use client';

import { GraphQLClient } from 'graphql-request';
import { BuchartTyp, SchlagwortTyp } from '../../lib/typen';
import { CREATE_BUCH } from '../mutation/create';
import { SchlagwortEnum } from '../../lib/enum';
import { extractErrorMessage, handleGraphQLError } from '../graphqlError';

export const createActionBuch = async (
    formData: FormData,
    client: GraphQLClient,
    token: string | null,
) => {
    const schlagwoerter: SchlagwortTyp[] = [];
    const schlagwoerterOptions = formData.getAll('schlagwoerter');

    schlagwoerterOptions.forEach((schlagwort) => {
        if (
            Object.values(SchlagwortEnum).includes(schlagwort as SchlagwortEnum)
        ) {
            schlagwoerter.push(schlagwort as SchlagwortTyp);
        }
    });

    const titel = formData.get('titel')?.toString().trim();
    const isbn = formData.get('isbn')?.toString().trim();
    const preis = formData.get('preis')?.toString().trim();
    const rabatt = formData.get('rabatt')?.toString().trim();
    const homepage = formData.get('homepage')?.toString().trim();
    const datum = formData.get('datum')?.toString().trim();
    const lieferbar = formData.get('lieferbar') === 'true';
    const buchart = formData.get('buchart') as BuchartTyp;
    const rating = formData.get('rating')?.toString().trim();
    const abbildungen = [
        {
            beschriftung: 'Abb. 1',
            contentType: 'img/png',
        },
    ];

    const intPreis = preis ? parseFloat(preis) : 0;
    const intRabatt = rabatt ? parseFloat(rabatt) / 100 : 0;
    const intRating = rating ? parseInt(rating) : 0;

    try {
        client.setHeader('Authorization', `Bearer ${token}`);

        const data = await client.request<{ id: string }>(CREATE_BUCH, {
            isbn,
            preis: intPreis,
            rabatt: intRabatt,
            datum,
            homepage,
            buchart,
            schlagwoerter,
            lieferbar,
            titel,
            rating: intRating,
            abbildungen,
        });

        console.log('GraphQL-Anfrage erfolgreich abgeschlossen:', data);
        return { message: `Buch ${titel} erfolgreich erstellt.` };
    } catch (error: any) {
        console.error('Fehler beim Ausführen der GraphQL-Anfrage:', error);
        await handleGraphQLError(
            error,
            'Unbekannter Fehler beim Erstellen des Buchs.',
        );
    }
};
