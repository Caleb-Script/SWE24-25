import { GraphQLClient } from 'graphql-request';
import { deleteActionBuch } from './action/deleteBuch';
import { createActionBuch } from './action/createBuch';
import { updateActionBuch } from './action/updateBuch';

const backendServerURL =
    process.env.NEXT_PUBLIC_BACKEND_CLIENT_URL ||
    'https://localhost:3000/graphql';
console.log(backendServerURL);
const client = new GraphQLClient(backendServerURL);

export async function createBuch(token: string | null, formData: FormData) {
    console.log('createBuch: GraphQL Client :', client);
    console.log(
        'createBuch: GraphQL Client initialized with URL:',
        process.env.NEXT_PUBLIC_BACKEND_CLIENT_URL,
    );
    return await createActionBuch(formData, client, token);
}

export async function updateBuch(
    id: number,
    version: number,
    token: string | null,
    formData: FormData,
) {
    return await updateActionBuch(id, version, token, formData, client);
}

export async function deleteBuch(id: number, token: string | null) {
    await deleteActionBuch(id, token, client);
    return;
}
