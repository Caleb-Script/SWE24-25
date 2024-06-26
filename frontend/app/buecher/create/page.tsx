'use server';

import { Form } from 'react-bootstrap';
import Breadcrumbs from '../../../components/Breadcrumbs';
import CreateCustomerFormular from '../../../components/forms/CreateFormular';

export default async function AnlegeFormular() {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Bücher', href: '/buecher' },
                    {
                        label: 'Buch anlegen',
                        href: '/buecher/create',
                        active: true,
                    },
                ]}
            />
            <CreateCustomerFormular />
            <Form />
        </main>
    );
}
