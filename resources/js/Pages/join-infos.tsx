import React from 'react';
import PageLayout from "@/Layouts/PageLayout";
import {Head} from "@inertiajs/react";
import { Button } from "@/Components/ui/button";

const JoinInfos = () => {
    return (
        <PageLayout className={"container mx-auto"}>
            <Head title={"Avant de commencer"}/>
            <h1>Avant de commencer</h1>
            <p>
                Assurez-vous que ces conditions soient bien remplies avant de commencer la procédure de recrutement :
            </p>
            <ul className={"list-disc list-inside"}>
                <li>Avoir 18 ans ou plus</li>
            </ul>
            <p>Un document sera rédigé d'ici peu.</p>
            <Button className="my-10">Commencer le test</Button>
        </PageLayout>
    );
};

export default JoinInfos;
