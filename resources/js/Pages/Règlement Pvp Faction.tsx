import React from 'react';
import {Head} from "@inertiajs/react";
import PageComponents from "@/Components/PageComponents";


const ReglementPvpFaction = () => {
    return (
        <PageComponents>
            <Head title={"Règlement Pvp Faction"}/>
            <h1>Règlement Pvp-Faction</h1>
            <p className={"text-red-400"}>Ce règlement est disposé à être modifié régulièrement. Songez donc à le consulter de façon régulière.</p>
            <ol className={"list-decimal list-inside my-20"}>
                <li className={"text-3xl underline"}>
                    <strong>Le cheat</strong>
                </li>
                <p>Toute forme de cheat est formellement interdite. Les sanctions pourront aller d'un bannissement d'1
                    mois
                    jusqu'à un bannissement définitif. Rappelons que le cheat gache l'expérience de jeu des autres
                    joueurs, ainsi que
                    l'économie du serveur.
                </p> <br/>
                <li className={"text-3xl underline"}>
                    <strong>Le TpKill</strong>
                </li>
                <p>
                    Pour rappel : Le TpKill consiste à se téléporter à un joueur dans le but de le tuer (ou l'inverse,
                    soit
                    téléporter un joueur sur nous dans le but de le tuer). Cela est également totalement interdit.
                </p><br/>
                <li className={"text-3xl underline"}>
                    <strong>Les arnaques</strong>
                </li>
                <p>
                    Les arnaques au shop sont tolérées mais il est interdit d'en abuser, afin de limiter les conflits
                    entre les joueurs.
                </p>
                <br/>
                <li className={"text-3xl underline"}>
                    <strong>Les skins et les pseudos</strong>
                </li>
                <p>
                    Merci de vous présenter sur le serveur avec un skin correct. Les skins à caractère pornographique,
                    politique, terroriste, etc. sont formellement interdits et entraineront des sanctions pouvant aller d'un
                    bannissement d'un mois jusqu'à un bannissement définitif. Ceci est également valable pour les pseudos.
                </p>
                <br/>
                <li className={"text-3xl underline"}>
                    <strong>Le respect</strong>
                </li>
                <p>
                    Le respect sur le serveur est primordial. N'oubliez pas que vous serez confrontés à des personnes que
                    vous ne connaissez pas, vous ne savez donc pas comment la personne en face dee vous pourrait réagir.
                </p>
                <br/>
                <li className={"text-3xl underline"}>
                    <strong>La laïcité</strong>
                </li>
                <p>
                    En venant jouer sur le serveur, vous mettez de côté tout ce qui est lié de près ou de loin à votre religion.
                </p>
                <br/>
                <li className={"text-3xl underline"}>
                    <strong>Politique</strong>
                </li>
                <p>
                    Vos opinions politiques vous sont propres. Merci de ne pas débattre là-dessus sur le serveur.
                </p>
            </ol>
        </PageComponents>
    );
};


export default ReglementPvpFaction;
