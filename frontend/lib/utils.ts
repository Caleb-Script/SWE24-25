export const generatePagination = (currentPage: number, totalPages: number) => {
    // Wenn insgesamt 3 oder weniger Seiten existieren
    if (totalPages <= 7) {
        // Zeige alle Seitennummern ohne Ellipsen an
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Wenn der aktuelle Seitenindex unter oder gleich 3 ist
    if (currentPage <= 3) {
        // Zeige die ersten 3 Seiten, ein Ellipsen-Symbol und die letzten 2 Seiten
        return [1, 2, 3, '...', totalPages - 1, totalPages];
    }

    // Wenn der aktuelle Seitenindex unter oder gleich den letzten 3 Seiten ist
    if (currentPage >= totalPages - 2) {
        // Zeige die ersten 2 Seiten, ein Ellipsen-Symbol und die letzten 3 Seiten
        return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    // Für alle anderen Fälle (der aktuelle Seitenindex ist in der Mitte)
    // Zeige die erste Seite, ein Ellipsen-Symbol, die aktuelle Seite und ihre Nachbarn,
    // ein weiteres Ellipsen-Symbol und die letzte Seite
    return [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages,
    ];
};
