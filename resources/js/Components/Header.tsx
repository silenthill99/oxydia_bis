import React, {useState} from 'react';
import Login from "@/Components/Login";
import {Link, usePage} from "@inertiajs/react";
import {accueil, contacts, images, projects, rulesHp, rulesPvp, rulesRp} from "@/routes";
import {MenuIcon} from "lucide-react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/Components/ui/accordion";
import {Separator} from "@/Components/ui/separator";

const Header = () => {

    const { url } = usePage();

    const navLinks = [
        {
            href: accueil(),
            label: "Accueil",
        },
        {
            href: projects(),
            label: "Nos projets",
        },
        {
            label: "Règlement",
            isDropdown: true,
            children: [
                { href: rulesPvp(), label: "Règlement Pvp-Faction" },
                { href: rulesRp(), label: "Règlement RP" },
                { href: rulesHp(), label: "Règlement Harry PoCraft" }
            ]
        },
        {
            label: "Quelques images",
            href: images(),
        },
        {
            label: "Nous contacter",
            href: contacts(),
        }
    ]
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const isActive = (link: string) => {
        const baseClasses = "px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/20";
        return `${baseClasses} ${link === url && "bg-white/25 font-semibold"}`;
    };

    const isDropdownActive = url === "/rules-pvp" || url === "/rules-rp" || url === "/rules-hp";

    return (
        <header className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white shadow-lg z-50">
            <div className="container mx-auto flex justify-between items-center flex-wrap px-4 py-3 md:px-6">
                <Link href={accueil()} className="group">
                    <h1 className="text-2xl font-bold tracking-tight transition-transform duration-200 group-hover:scale-105">
                        Nebralis
                    </h1>
                </Link>

                {/*Menu PC*/}
                <nav className="hidden lg:flex gap-1 items-center flex-wrap">
                    {navLinks.map((link, i) => (
                        link.isDropdown ? (
                            <div key={i} className="group relative">
                        <span className={`px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/20 cursor-pointer inline-flex items-center gap-1 ${isDropdownActive && "bg-white/25 font-semibold"}`}>
                            {link.label}
                            <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                                <ul className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100 overflow-hidden">
                                    {link.children?.map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.href} className={"block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"}>{item.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <Link href={link.href} className={isActive(link.href!.url)} key={i}>{link.label}</Link>
                        )
                    ))}
                </nav>
                {/*Menu Mobile*/}
                {isOpenMenu && (
                    <div className={"lg:hidden block absolute inset-0 z-10"} onClick={() => setIsOpenMenu(false)}/>
                )}
                <div className="lg:hidden relative">
                    <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        <MenuIcon/>
                    </button>
                    <nav className={`absolute bg-white text-black p-2 border rounded left-full transition-all duration-1000 w-56 z-50 ${isOpenMenu ? "-translate-x-full opacity-100 visible" : " opacity-0 invisible"}`}>
                        <ul>
                            {navLinks.map((link, i) => (
                                link.isDropdown ? (
                                    <Accordion key={i} type={"single"} collapsible>
                                        <AccordionItem value={link.label}>
                                            <AccordionTrigger>{link.label}</AccordionTrigger>
                                            <AccordionContent>
                                                <ul>
                                                    {link.children.map((item, i) => (
                                                        <li key={i}>
                                                            <Link href={item.href}>{item.label}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                ) : (
                                    <li key={i} className={"w-full"}>
                                        <Link href={link.href} className={"hover:bg-gray-200 w-full inline-block p-2 rounded-lg hover:underline active:bg-gray-300"}>{link.label}</Link>
                                    </li>
                                )
                            ))}
                        </ul>
                        <Separator/>
                        <Login className={"flex text-sm"}/>
                    </nav>
                </div>
                <Login className={"hidden lg:block"}/>
            </div>
        </header>
    );
};

export default Header;
