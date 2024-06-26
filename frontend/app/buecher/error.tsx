'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const router = useRouter();

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="d-flex h-100 flex-column align-items-center justify-content-center">
            <h2 className="text-center text-dark">Buch Existiert Nicht 😓</h2>
            <button
                className="mt-4 w-25 rounded bg-danger px-4 py-2 text-sm text-white"
                onClick={() => router.push('/buecher')}
            >
                Zurück zu den Büchern
            </button>
        </main>
    );
}
