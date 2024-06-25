'use server';

import { fetchBuecherTabelle } from '@/api/tabellen';
import { Suchkriterien } from '@/lib/suchkriterien';
import BuchListeClient from '../../components/buecher/BuchListe';

export default async function BuecherTabelle({
    titel,
    page,
    filter,
}: {
    titel: string;
    page: number;
    filter: Suchkriterien[];
}) {
    const buecher = await fetchBuecherTabelle(titel, page, filter);

    return <BuchListeClient buecher={buecher} />;
}
