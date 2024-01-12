import {redirect} from 'next/navigation';
import {auth} from '@clerk/nextjs';
import React from "react";
import prismadb from '@/lib/prismadb';

export default async function SetupLayout({children,}: { children: React.ReactNode }) {
    const {userId} = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    const store = await prismadb.store.find({
        where: {
            userId,
        }
    });

    if (store) {
        redirect(`/${store.id}`);
    }

    return (
        <>
            {children}
        </>
    );
};
