import React from 'react';

import BootstrapClient from '@/components/BootstrapClient';
import RequireAuth from '../../components/RequireAut';
import SideNav from '../../components/SideNavigation';

export const metadata = {
    title: 'Bücherverwaltung',
    description: 'Bücherverwaltungssystem',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <RequireAuth>
            <SideNav>
                <BootstrapClient />
                {children}
            </SideNav>
        </RequireAuth>
    );
};

export default Layout;
