import React from 'react';
import {PageProps} from "@/types";
import {Head} from "@inertiajs/react";
import RolePlay from "@/Components/RolePlay";
import PageComponents from "@/Components/PageComponents";

const Images = ({auth}: PageProps) => {
    return (
        <PageComponents auth={auth.user}>
            <Head title={"Quelques images"}/>
            <h1 className={"text-center"}>Quelques images</h1>
            <p>Clique sur les images pour les agrandir</p>
            <RolePlay />
        </PageComponents>
    );
};

export default Images;
