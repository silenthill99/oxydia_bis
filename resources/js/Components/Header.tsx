import React from 'react';
import {User} from "@/types";
import Login from "@/Components/Login";
import {Link, usePage} from "@inertiajs/react";

type Props = {
    auth: User
}

const Header = (props: Props) => {

    const { url } = usePage();

    const isActive = (link: string) => (`hover:underline p-2 ${link === url && "border-x"}`);

    return (
        <header className={"bg-blue-500 text-white"}>
            <div className={"container mx-auto flex justify-between items-center flex-wrap px-5 md:p-0"}>
                <a href={route('accueil')}><h1>Oxydia</h1></a>
                <nav className={"grid grid-cols-3 md:flex gap-2 items-center flex-wrap"}>
                    <Link href={route('accueil')} className={isActive("/")}>Accueil</Link>
                    <Link href={route('projects')} className={isActive("/projects")}>Nos projets</Link>
                    <div className={`group p-2 relative text-center flex justify-center ${(url === "/rules-pvp" || url === "/rules-rp"
                    || url === "/rules-hp") && "border-x"}`}>
                        <span className={"inline-block"}>Règlement intérieur</span>
                        <ul className={"absolute bg-blue-400 hidden group-hover:block shadow z-10 top-10"}>
                            <li className={"w-52 py-2"}><Link href={route('rules-pvp')} className={isActive("/rules-pvp")}>Règlement Pvp-Faction</Link></li>
                            <li className={"w-52 py-2"}><Link href={route('rules-rp')} className={isActive("/rules-rp")}>Règlement RP</Link></li>
                            <li className={"w-52 py-2"}><Link href={route("rules-hp")} className={isActive("/rules-hp")}>Règlement Harry PoCraft</Link></li>
                        </ul>
                    </div>
                    <Link href={route('images')} className={isActive("/images")}>Quelques images</Link>
                    <Link href={route('contacts')} className={isActive("/contacts")}>Nous contacter</Link>
                </nav>
                <Login auth={props.auth}/>
            </div>
        </header>
    );
};

export default Header;
