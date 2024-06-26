import { gql } from "graphql-request";

export const BUCH_FORMULAR = gql`
    query Buch($id: ID!) {
        buch(id: $id) {
            id
            version
            isbn
            preis
            rating
            datum
            homepage
            homepage
            art
            lieferbar
            schlagwoerter
            titel {
                titel
                untertitel
            }
        }
    }
`;

export const BUCH = gql`
    query Buch($id: ID!) {
        buch(id: $id) {
            id
            version
            isbn
            rating
            art
            preis
            lieferbar
            datum
            homepage
            schlagwoerter
            rabatt
            titel {
                titel
                untertitel
            }
        }
    }
`;
