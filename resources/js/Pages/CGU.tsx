import React from 'react';
import {Head} from "@inertiajs/react";
import PageComponents from "@/Components/PageComponents";

const Cgu = () => {
    return (
        <PageComponents>
            <Head title={"Conditions générales d'utilisation"}/>
            <h1>Conditions Générales d'Utilisation</h1>
            <p className={"text-gray-600 dark:text-gray-400 italic mb-8"}>
                Dernière mise à jour : 7 février 2026
            </p>

            <ol className={"list-decimal list-inside space-y-10"}>
                <li className={"text-3xl underline"}>
                    <strong>Objet</strong>
                </li>
                <p>
                    Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») ont pour objet de définir les
                    modalités et conditions d'utilisation du site Nebralis ainsi que des services associés, notamment
                    l'accès aux serveurs Minecraft Nebralis. En accédant au site ou en utilisant nos services, vous
                    acceptez sans réserve les présentes CGU.
                </p>

                <li className={"text-3xl underline"}>
                    <strong>Accès au site et aux services</strong>
                </li>
                <p>
                    Le site Nebralis est accessible gratuitement à tout utilisateur disposant d'un accès à Internet.
                    L'équipe Nebralis se réserve le droit de suspendre ou d'interrompre l'accès au site et aux
                    serveurs à tout moment, sans préavis, notamment pour des raisons de maintenance ou de mise à jour.
                </p>

                <li className={"text-3xl underline"}>
                    <strong>Inscription et compte utilisateur</strong>
                </li>
                <p>
                    L'inscription sur le site nécessite de fournir des informations exactes et à jour. Chaque
                    utilisateur est responsable de la confidentialité de ses identifiants de connexion. Toute
                    activité réalisée depuis un compte est réputée effectuée par son titulaire. En cas d'utilisation
                    non autorisée de votre compte, vous devez en informer l'équipe Nebralis dans les plus brefs délais.
                </p>

                <li className={"text-3xl underline"}>
                    <strong>Comportement des utilisateurs</strong>
                </li>
                <p>
                    En utilisant le site et les serveurs Nebralis, vous vous engagez à :
                </p>
                <ul className={"list-disc list-inside ml-6 mt-2 space-y-1"}>
                    <li>Respecter les autres utilisateurs et les membres de l'équipe.</li>
                    <li>Ne pas diffuser de contenu à caractère haineux, discriminatoire, pornographique, diffamatoire ou illégal.</li>
                    <li>Ne pas utiliser de logiciels de triche (cheat) ou de moyens déloyaux.</li>
                    <li>Respecter les règlements spécifiques à chaque serveur (PvP-Faction, RolePlay, Harry PoCraft).</li>
                    <li>Ne pas tenter de nuire au bon fonctionnement du site ou des serveurs.</li>
                </ul>
                <p className={"mt-2"}>
                    Tout manquement à ces règles pourra entraîner des sanctions allant d'un avertissement à un
                    bannissement définitif, à la discrétion de l'équipe Nebralis.
                </p>

                <li className={"text-3xl underline"}>
                    <strong>Propriété intellectuelle</strong>
                </li>
                <p>
                    L'ensemble des éléments du site Nebralis (textes, images, logos, design) sont la propriété
                    exclusive de l'équipe Nebralis ou de ses partenaires. Toute reproduction, distribution ou
                    utilisation sans autorisation préalable est strictement interdite.
                </p>

                <li className={"text-3xl underline"}>
                    <strong>Données personnelles</strong>
                </li>
                <p>
                    Les données personnelles collectées lors de votre inscription (nom d'utilisateur, adresse e-mail)
                    sont nécessaires au fonctionnement du service. Elles ne seront en aucun cas cédées ou vendues
                    à des tiers. Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de
                    rectification et de suppression de vos données personnelles. Pour exercer ces droits, vous pouvez
                    nous contacter via la page de contact du site.
                </p>

                <li className={"text-3xl underline"}>
                    <strong>Responsabilité</strong>
                </li>
                <p>
                    L'équipe Nebralis s'efforce d'assurer la disponibilité et le bon fonctionnement du site et des
                    serveurs. Toutefois, elle ne saurait être tenue responsable :
                </p>
                <ul className={"list-disc list-inside ml-6 mt-2 space-y-1"}>
                    <li>Des interruptions temporaires du service, quelle qu'en soit la cause.</li>
                    <li>De la perte de données ou de progression en jeu.</li>
                    <li>Des contenus publiés par les utilisateurs.</li>
                    <li>Des dommages résultant de l'utilisation ou de l'impossibilité d'utiliser le site ou les serveurs.</li>
                </ul>

                <li className={"text-3xl underline"}>
                    <strong>Sanctions et modération</strong>
                </li>
                <p>
                    L'équipe Nebralis se réserve le droit de sanctionner tout utilisateur ne respectant pas les
                    présentes CGU ou les règlements des serveurs. Les sanctions peuvent inclure : avertissement,
                    expulsion temporaire (mute, kick), bannissement temporaire ou définitif. Les décisions de
                    modération sont prises à la discrétion de l'équipe et ne sont pas nécessairement sujettes à appel.
                </p>

                <li className={"text-3xl underline"}>
                    <strong>Modification des CGU</strong>
                </li>
                <p>
                    L'équipe Nebralis se réserve le droit de modifier les présentes CGU à tout moment. Les
                    utilisateurs seront informés de toute modification importante. La poursuite de l'utilisation du
                    site et des serveurs après modification vaut acceptation des nouvelles conditions.
                </p>

                <li className={"text-3xl underline"}>
                    <strong>Contact</strong>
                </li>
                <p>
                    Pour toute question relative aux présentes CGU, vous pouvez nous contacter via la page de contact
                    accessible depuis le site Nebralis.
                </p>
            </ol>
        </PageComponents>
    );
};

export default Cgu;
