import React from 'react';
import {PageProps} from "@/types";
import {Head} from "@inertiajs/react";
import PageComponents from "@/Components/PageComponents";

const Contacts = ({auth}: PageProps) => {

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        alert("Votre message a été envoyé !")
    }

    return (
        <PageComponents auth={auth.user}>
            <Head title="Page de contacts" />
            <h1>Page de contacts</h1>
            <form action="" method="post" onSubmit={handleSubmit} className={"mb-5"}>
                <input type="text" placeholder={"Sujet de votre demande"} className={"border p-2"} required/> <br/><br/>
                <select name="" id="">
                    <option value="concerné">-- Serveur concerné --</option>
                    <option value="discord">Serveur Discord</option>
                    <option value="pvp-faction">Serveur PVP Faction</option>
                </select><br/><br/>
                <textarea name="" id="" cols={50} rows={20} className={"resize-none border"} placeholder={"Votre message"}></textarea><br/><br/>
                <button type={"submit"} className={"bg-blue-500 text-white p-1 rounded border-2 border-transparent hover:border-black duration-300"}>Envoyer</button>
            </form>
        </PageComponents>
    );
};

export default Contacts;
