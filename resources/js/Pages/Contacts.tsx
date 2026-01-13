import React from 'react';
import {Form, Head} from "@inertiajs/react";
import PageComponents from "@/Components/PageComponents";
import MessageController from "@/actions/App/Http/Controllers/MessageController";

const Contacts = () => {

    return (
        <PageComponents>
            <Head title="Page de contacts"/>
            <h1>Page de contacts</h1>
            <Form {...MessageController.store.form()} className={"mb-5"} resetOnSuccess={true}>
                <input
                    type="text"
                    name={"subject"}
                    placeholder={"Sujet de votre demande"}
                    className={"border p-2"}
                    required
                    id={"subject"}
                /> <br/><br/>
                <select name="server" id="server">
                    <option value="concerné">-- Serveur concerné --</option>
                    <option value="discord">Serveur Discord</option>
                    <option value="pvp-faction">Serveur PVP Faction</option>
                </select><br/><br/>
                <textarea name="message" id="message" cols={50} rows={20} className={"resize-none border"}
                          placeholder={"Votre message"}
                ></textarea><br/><br/>
                <button type={"submit"}
                        className={"bg-blue-500 text-white p-1 rounded border-2 border-transparent hover:border-black duration-300"}>Envoyer
                </button>
            </Form>
        </PageComponents>
    );
};

export default Contacts;
