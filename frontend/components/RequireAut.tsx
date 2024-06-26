'use client';
import { useRouter } from 'next/navigation';
import { useEffect, ReactNode } from 'react';

type RequireAuthProps = {
    children: ReactNode;
};

export default function RequireAuth({ children }: RequireAuthProps) {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.replace('/');
        }
    }, [router]);

    return <>{children}</>;
}
