import {PageProps} from '@/types';
import { Head } from '@inertiajs/react';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Welcome({auth}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <div className={"h-screen flex flex-col"}>
            <Head title="Page d'accueil"/>
            <Header auth={auth.user} accueil={true}/>
            <main className={"container mx-auto grow"}>
                <h1>Page d'accueil</h1>
                <p>Bienvenue sur le site principal de l'infrastructure Oxydia</p>
                <p>Oxydia est un projet de network ayant pour but de regrouper divers serveurs Minecraft.</p>

            </main>
            <Footer/>
        </div>
    );
}
