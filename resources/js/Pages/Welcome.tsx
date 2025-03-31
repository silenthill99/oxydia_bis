import {PageProps} from '@/types';
import {Head} from '@inertiajs/react';
import PageComponents from "@/Components/PageComponents";

export default function Welcome({auth}: PageProps) {
    return (
        <PageComponents auth={auth.user}>
            <Head title="Page d'accueil"/>
            <h1 style={{textDecorationLine: "underline overline"}} className={"indent-1"}>Page d'accueil</h1>
            <p>Bienvenue sur le site principal de l'infrastructure Oxydia</p>
            <p>Oxydia est un projet de network ayant pour but de regrouper divers serveurs Minecraft.</p>

            <h1 style={{textShadow: "5px 5px"}}>Un titre de niveau 1</h1>

            <p style={{textShadow: "-5px 2px 1px blue"}}>Un premier paragraphe</p>
            <p style={{textShadow: "0 0 5px red"}}>Un autre paragraphe</p>
        </PageComponents>
    )
}
