import React from 'react';
import {PageProps} from "@/types";
import Header from "@/Components/Header";
import {Head} from "@inertiajs/react";
import Footer from "@/Components/Footer";

const Contacts = ({auth}: PageProps) => {

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        alert("Votre message a été envoyé !")
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Head title="Page de contacts" />
            <Header auth={auth.user} contacts/>
            <main className="grow container mx-auto">
                <h1>Page de contacts</h1>
                <form action="" method="post" onSubmit={handleSubmit} className={"mb-5"}>
                    <input type="text" placeholder={"Sujet de votre demande"} required/> <br/><br/>
                    <select name="" id="">
                        <option value="concerné">-- Serveur concerné --</option>
                        <option value="discord">Serveur Discord</option>
                        <option value="pvp-faction">Serveur PVP Faction</option>
                    </select><br/><br/>
                    <textarea name="" id="" cols={50} rows={20} className={"resize-none"} placeholder={"Votre message"}></textarea><br/><br/>
                    <button type={"submit"} className={"bg-blue-500 text-white p-1 rounded border-2 border-transparent hover:border-black duration-300"}>Envoyer</button>
                </form>
            </main>
            <Footer/>
        </div>
    );
};

export default Contacts;
