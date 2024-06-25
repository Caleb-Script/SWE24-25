import { GraphQLClient } from "graphql-request";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { Buch } from "@/lib/klassen";
import { Suchkriterien } from "../lib/suchkriterien";
import dotenv from "dotenv";
import { BUECHER_TABELLE } from "./query/buecher";

dotenv.config();

const client = new GraphQLClient(
  process.env.BACKEND_SERVER_URL || "https://localhost:3000/graphql"
);


  
let BUECHER_PRO_SEITE: number;
if (process.env.BUECHER_PRO_SEITE) {
  BUECHER_PRO_SEITE = parseInt(process.env.BUECHER_PRO_SEITE);
}

export async function fetchBuecherTabelleSeiten(
  query: string = "",
  filter: Suchkriterien[]
) {
  noStore();

  const daten = await fetchBuecherDaten(filter, query);

   if (daten.buecher && daten.buecher.length > 0) {
     const anzahlSeiten = Math.ceil(
       Number(daten.buecher.length) / BUECHER_PRO_SEITE
     );

     //await new Promise((resolve) => setTimeout(resolve, 3000));
     return anzahlSeiten;
   }
  return 0;
}

export async function fetchBuecherTabelle(
  titel: string = "",
  currentPage: number,
  filter: Suchkriterien[]
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
  const extractedCriteria: Partial<Suchkriterien> = filter.reduce(
    (acc, { key, value }) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );

  let { isbn, rating, art, lieferbar, javascript, typescript } =
    extractedCriteria;

  try {
    const intRating = rating !== undefined ? parseInt(rating) : undefined
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
      }
    );

    return data;
  } catch (error) {
   
    console.error("Fehler beim Abrufen der Buch-Daten:", (error as Error));

    return { buecher: [] };
  }
}
