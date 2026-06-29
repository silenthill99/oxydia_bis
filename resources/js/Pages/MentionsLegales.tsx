import React from 'react';
import {Head, Link} from "@inertiajs/react";
import PageLayout from "@/Layouts/PageLayout";
import {contacts} from "@/routes";

const MentionsLegales = () => {
    return (
        <PageLayout>
            <Head title={"Mentions légales"}/>
            <article className={"prose prose-lg dark:prose-invert mx-auto max-w-3xl"}>
                <h1>Mentions légales</h1>
                <p className={"lead text-gray-600 dark:text-gray-400 italic"}>
                    Dernière mise à jour : 29 juin 2026
                </p>

                <h2>1. Éditeur du site</h2>
                <p>
                    Le site Nebralis est édité par :
                </p>
                <ul>
                    <li><strong>Nom / Prénom :</strong> [Nom Prénom à compléter]</li>
                    <li><strong>Statut :</strong> particulier</li>
                    <li>
                        <strong>Contact :</strong> via la{" "}
                        <Link href={contacts()}>page de contact</Link> du site.
                    </li>
                </ul>

                <h2>2. Directeur de la publication</h2>
                <p>
                    Le directeur de la publication est l'éditeur du site mentionné ci-dessus, responsable du contenu
                    publié sur le site Nebralis.
                </p>

                <h2>3. Hébergement</h2>
                <p>
                    Le site est hébergé par :
                </p>
                <ul>
                    <li><strong>Hébergeur :</strong> Hostinger International Ltd</li>
                    <li><strong>Adresse :</strong> 61 Lordou Vironos Street, 6023 Larnaca, Chypre</li>
                    <li><strong>Site web :</strong> https://www.hostinger.fr</li>
                </ul>

                <h2>4. Propriété intellectuelle</h2>
                <p>
                    L'ensemble des éléments du site Nebralis (textes, images, logos, design) sont la propriété
                    exclusive de l'éditeur ou de ses partenaires. Toute reproduction, distribution ou utilisation sans
                    autorisation préalable est strictement interdite.
                </p>

                <h2>5. Données personnelles</h2>
                <p>
                    Les modalités de collecte et de traitement de vos données personnelles, ainsi que les droits dont
                    vous disposez à ce titre, sont détaillés dans nos{" "}
                    <Link href="/cgu">Conditions Générales d'Utilisation</Link>.
                </p>

                <h2>6. Contact</h2>
                <p>
                    Pour toute question relative au site ou aux présentes mentions légales, vous pouvez nous contacter
                    via la <Link href={contacts()}>page de contact</Link> accessible depuis le site Nebralis.
                </p>
            </article>
        </PageLayout>
    );
};

export default MentionsLegales;