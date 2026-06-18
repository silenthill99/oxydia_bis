import {Head} from '@inertiajs/react';
import PageLayout from "@/Layouts/PageLayout";

export default function Welcome() {
    return (
        <PageLayout>
            <Head title="Page d'accueil"/>
            <h1 className={"indent-1"}>Page d'accueil</h1>
            <p>Bienvenue sur le site principal de l'infrastructure Nebralis</p>
            <p>Oxydia est un projet de network ayant pour but de regrouper divers serveurs Minecraft.</p>
        </PageLayout>
    )
}
