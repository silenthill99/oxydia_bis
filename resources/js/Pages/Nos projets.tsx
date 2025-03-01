import React from 'react';
import {PageProps} from "@/types";
import {Head} from "@inertiajs/react";
import PageComponents from "@/Components/PageComponents";

const NosProjets = ({auth}: PageProps<{laravelVersion: string, phpVersion: string}>) => {
    return (
        <PageComponents auth={auth.user} className={"flex flex-col justify-center items-center"}>
            <Head title={"Nos projets"}/>
            <h1>Nos projets</h1>
            <ul className={"list-disc list-inside"}>
                <li>Un serveur Pvp-Faction moddé</li>
                <li>Un serveur RP Harry-PoCraft</li>
                <li>Un serveur RP - Serious RP</li>
            </ul> <br/>
            <p>En bonus, des plugins et des mods 100% faits maison</p>
        </PageComponents>
    );
};

export default NosProjets;
