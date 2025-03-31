import {PageProps} from '@/types';
import {Head} from '@inertiajs/react';
import PageComponents from "@/Components/PageComponents";

export default function Welcome({auth}: PageProps) {
    return (
        <PageComponents auth={auth.user}>
            <Head title="Page d'accueil"/>
            <h1 className={"indent-1"}>Page d'accueil</h1>
            <p>Bienvenue sur le site principal de l'infrastructure Oxydia</p>
            <p>Oxydia est un projet de network ayant pour but de regrouper divers serveurs Minecraft.</p>
        </PageComponents>
    )
}
