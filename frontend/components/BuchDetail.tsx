'use client'

import { useEffect, useState } from 'react';
import { Buch } from '../lib/klassen';
import { RatingComponent } from './RatingComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { DeleteBuchButton, UpdateBuchButton } from './buch/buttons';

export default function BuchDetailClient({
    buch,
    datum,
}: {
    buch: Buch;
    datum: string;
}) {
    const [isAdmin, setIsAdmin] = useState(() => {
        const userRole = localStorage.getItem('user');
        return userRole === 'admin';
    });

    const renderSchlagwoerter = () => {
        return buch.schlagwoerter.map(
            (schlagwort, index) =>
                schlagwort && (
                    <span
                        key={index}
                        className="badge bg-danger rounded-pill me-1"
                    >
                        {schlagwort}
                    </span>
                ),
        );
    };

    return (
        <div className="row">
            {/* Linke Seite */}
            <div className="col-md-4 mb-3">
                <div className="card mb-3">
                    <div className="card-body text-center">
                        <div className="card-body w-100 d-flex justify-content-center align-items-center">
                            <div
                                className="rounded-circle overflow-hidden"
                                style={{ width: '250px', height: '250px' }}
                            >
                                <FontAwesomeIcon
                                    className="mt-5"
                                    icon={faBookOpen}
                                    style={{ fontSize: '200px', color: 'red' }}
                                />
                            </div>
                        </div>
                        <div className="mt-3">
                            <h4>{buch.titel.titel}</h4>
                            <p>{buch.titel.untertitel}</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column gap-3">
                    <UpdateBuchButton id={buch.id} version={buch.version} />
                    {isAdmin && <DeleteBuchButton id={buch.id} />}
                </div>
            </div>

            {/* Rechte Seite */}
            <div className="col-lg-8">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <p className="mb-0">Titel</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">
                                    {buch.titel.titel}
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <p className="mb-0">ISBN</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{buch.isbn}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <p className="mb-0">Art</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{buch.art}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <p className="mb-0">Preis</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">
                                    {buch.preis} €
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <p className="mb-0">Rabatt</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{buch.rabatt}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <p className="mb-0">Datum</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{datum}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <p className="mb-0">Lieferbar?</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">
                                    {buch.lieferbar ? 'true' : 'false'}
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <p className="mb-0">Homepage</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">
                                    {buch.homepage}
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <p className="mb-0">Rating</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">
                                    <RatingComponent
                                        stars={buch.rating}
                                        maxValue={5}
                                    />
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <p className="mb-0">Schlagwörter</p>
                            </div>
                            <div className="col-sm-9">
                                <div className="d-flex flex-wrap">
                                    {renderSchlagwoerter()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
