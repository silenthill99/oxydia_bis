import React from 'react';
import {PageProps} from "@/types";
import Header from "@/Components/Header";
import {Head} from "@inertiajs/react";
import Footer from "@/Components/Footer";

const NosProjets = ({auth}: PageProps<{laravelVersion: string, phpVersion: string}>) => {
    return (
        <div className={"min-h-screen flex flex-col"}>
            <Head title={"Nos projets"}/>
            <Header auth={auth.user} projects/>
            <main className={"container mx-auto flex items-center justify-center flex-col grow"}>
                <h1>Nos projets</h1>
                <ul className={"list-disc list-inside"}>
                    <li>Un serveur Pvp-Faction moddé</li>
                    <li>Un serveur RP Harry-PoCraft</li>
                    <li>Un serveur RP - Serious RP</li>
                </ul> <br/>
                <p>En bonus, des plugins et des mods 100% faits maison</p>
            </main>
            <Footer/>
        </div>
    );
};

export default NosProjets;
