import React from 'react';
import {PageProps} from "@/types";
import Header from '@/Components/Header';
import Footer from "@/Components/Footer";
import {Head} from "@inertiajs/react";

const RèglementRp = ({auth}: PageProps<{laravelVersion: string; phpVersion: string}>) => {
    return (
        <div className={"h-screen flex flex-col"}>
            <Head title={"Règlement RP"}/>
            <Header auth={auth.user} rulesRp/>
            <main className={"grow container mx-auto"}>
                <h1>Règlement RolePlay</h1>
            </main>
            <Footer/>
        </div>
    );
};

export default RèglementRp;
