import React from 'react';
import {User} from "@/types";
import Login from "@/Components/Login";

type Props = {
    auth: User,
    accueil?: boolean,
    projects?: boolean,
    rulesPvp?: boolean,
    rulesRp?: boolean,
    contacts?: boolean
}

const Header = (props: Props) => {
    return (
        <header className={"bg-blue-500 text-white"}>
            <div className={"container mx-auto flex justify-between items-center flex-wrap"}>
                <a href={route('accueil')}><h1>Oxydia</h1></a>
                <nav className={"flex gap-2 items-center"}>
                    <a href={route('accueil')} className={props.accueil ? "border-x border-white hover:underline p-2" : "hover:underline p-2"}>Accueil</a>
                    <a href={route('projects')} className={props.projects ? "border-x border-white hover:underline p-2" : "hover:underline p-2"}>Nos projets</a>
                    <div className={(props.rulesPvp || props.rulesRp) ? "border-x border-white group p-2 relative text-center flex justify-center" : "group p-2 relative text-center flex justify-center"}>
                        <span className={"inline-block"}>Règlement intérieur</span>
                        <ul className={"absolute bg-blue-400 hidden group-hover:block shadow z-10 top-10"}>
                            <li className={"w-52"}><a href={route('rules-pvp')} className={props.rulesPvp ? "hover:bg-blue-500 w-full inline-block underline" : "hover:bg-blue-500 w-full inline-block"}>Règlement Pvp-Faction</a></li>
                            <li className={"w-52"}><a href={route('rules-rp')} className={props.rulesRp ? "hover:bg-blue-500 w-full inline-block underline" : "hover:bg-blue-500 inline-block w-full"}>Règlement RP</a></li>
                            <li className={"w-52"}><a href="" className={"hover:bg-blue-500 inline-block w-full"}>Règlement Harry PoCraft</a></li>
                        </ul>
                    </div>
                    <a href={route('contacts')} className={props.contacts ? "border-x border-white hover:underline p-2" : "hover:underline p-2"}>Nous contacter</a>
                </nav>
                <Login auth={props.auth}/>
            </div>
        </header>
    );
};

export default Header;
