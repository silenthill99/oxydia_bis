import React from 'react';
import {PageProps} from "@/types";
import {Head} from "@inertiajs/react";
import PageComponents from "@/Components/PageComponents";

const ReglementRp = ({auth}: PageProps<{laravelVersion: string; phpVersion: string}>) => {
    return (
        <PageComponents auth={auth.user}>
            <Head title={"Règlement RP"}/>
            <h1>Règlement RolePlay</h1>
        </PageComponents>
    );
};

export default ReglementRp;
