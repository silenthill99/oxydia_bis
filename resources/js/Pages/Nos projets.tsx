import React from 'react';
import {Head} from "@inertiajs/react";
import PageLayout from "@/Layouts/PageLayout";

const NosProjets = () => {
    return (
        <PageLayout className={"flex flex-col justify-center items-center"}>
            <Head title={"Nos projets"}/>
            <h1>Nos projets</h1>
            <ul className={"list-disc list-inside"}>
                <li>Un serveur Pvp-Faction moddé</li>
                <li>Un serveur RP Harry-PoCraft</li>
                <li>Un serveur RP - Serious RP</li>
            </ul> <br/>
            <p>En bonus, des plugins et des mods 100% faits maison</p>
        </PageLayout>
    );
};

export default NosProjets;
