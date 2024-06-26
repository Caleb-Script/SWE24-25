import { GraphQLClient } from 'graphql-request';
import { DELETE_BUCH } from '../mutation/delete';
import { extractErrorMessage, handleGraphQLError } from '../graphqlError';

export async function deleteActionBuch(
    id: number,
    token: string | null,
    client: GraphQLClient,
) {
    try {
        client.setHeader('Authorization', `Bearer ${token}`);
        const data = await client.request<{ delete: boolean }>(DELETE_BUCH, {
            id,
        });
        return { message: `Buch: ${id} wurde gelöscht` };
    } catch (error: any) {
        console.error('Fehler beim Ausführen der GraphQL-Anfrage:', error);
        await handleGraphQLError(
            error,
            'Unbekannter Fehler beim Löschen des Buchs.',
        );
    }
}
