import React from 'react';
import PageComponents from "@/Components/PageComponents";
import {PageProps} from "@/types";

const ReglementHarryPoCraft = ({auth}: PageProps) => {
    return (
        <PageComponents auth={auth.user} className={"relative"}>
            <p className={"text-4xl text-center absolute top-1/2 left-1/2 -translate-1/2"}>Le serveur Harry PoCraft ayant son propre site web, le règlement se trouve sur ce dernier.</p>
        </PageComponents>
    );
};

export default ReglementHarryPoCraft;
