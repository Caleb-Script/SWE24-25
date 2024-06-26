import { gql } from "graphql-request";

export const BUECHER_TABELLE = gql`
    query Buch(
        $titel: String
        $isbn: String
        $rating: Int
        $art: Art
        $lieferbar: Boolean
        $javascript: Boolean
        $typescript: Boolean
    ) {
        buecher(
            suchkriterien: {
                titel: $titel
                isbn: $isbn
                rating: $rating
                art: $art
                lieferbar: $lieferbar
                javascript: $javascript
                typescript: $typescript
            }
        ) {
            id
            titel {
                titel
            }
            isbn
            art
            preis
            schlagwoerter
            rating
        }
    }
`;
