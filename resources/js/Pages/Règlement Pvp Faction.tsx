import React from 'react';
import {Head} from "@inertiajs/react";
import PageLayout from "@/Layouts/PageLayout";

type Rule = {
    title: string;
    text: string;
    sanction?: string;
};

const rules: Rule[] = [
    {
        title: "Le cheat",
        text: "L'utilisation de toute forme de triche est strictement interdite. Au-delà de fausser l'équilibre du jeu et l'économie du serveur, elle gâche l'expérience de l'ensemble des joueurs.",
        sanction: "Bannissement d'un mois à définitif",
    },
    {
        title: "Le TpKill",
        text: "Le TpKill consiste à se téléporter vers un joueur — ou à le téléporter vers soi — dans le seul but de l'éliminer. Cette pratique est totalement interdite.",
    },
    {
        title: "Les arnaques",
        text: "Les arnaques au shop sont tolérées, mais ne doivent jamais devenir abusives. Cette limite vise à éviter les conflits inutiles entre joueurs.",
    },
    {
        title: "Les skins et les pseudos",
        text: "Présentez-vous sur le serveur avec un skin et un pseudo corrects. Tout contenu à caractère pornographique, politique, terroriste ou assimilé est formellement interdit.",
        sanction: "Bannissement d'un mois à définitif",
    },
    {
        title: "Le respect",
        text: "Le respect est la règle la plus importante. Vous croiserez des joueurs que vous ne connaissez pas : restez courtois, car vous ne pouvez pas anticiper la façon dont ils réagiront.",
    },
    {
        title: "La laïcité",
        text: "Lorsque vous jouez sur le serveur, laissez de côté tout ce qui touche, de près ou de loin, à la religion.",
    },
    {
        title: "La politique",
        text: "Vos opinions politiques vous appartiennent. Merci de ne pas en débattre sur le serveur.",
    },
];

const ReglementPvpFaction = () => {
    return (
        <PageLayout>
            <Head title={"Règlement Pvp Faction"}/>

            <h1>Règlement Pvp-Faction</h1>

            <div className={"mt-2 mb-12 flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-amber-800 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-300"}>
                <span aria-hidden={"true"} className={"text-lg leading-6"}>⚠️</span>
                <p>
                    Ce règlement est susceptible d'évoluer régulièrement. Pensez à le consulter de façon régulière.
                </p>
            </div>

            <ol className={"grid gap-5 sm:grid-cols-2"}>
                {rules.map((rule, index) => (
                    <li
                        key={rule.title}
                        className={"flex flex-col gap-3 rounded-xl border border-gray-200 bg-white/70 p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800/50"}
                    >
                        <div className={"flex items-center gap-3"}>
                            <span className={"flex size-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-indigo-600 font-semibold text-white"}>
                                {index + 1}
                            </span>
                            <h2 className={"!py-0 text-xl font-semibold"}>{rule.title}</h2>
                        </div>

                        <p className={"text-gray-600 dark:text-gray-300"}>{rule.text}</p>

                        {rule.sanction && (
                            <span className={"mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700 dark:bg-red-500/10 dark:text-red-400"}>
                                Sanction : {rule.sanction}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </PageLayout>
    );
};

export default ReglementPvpFaction;