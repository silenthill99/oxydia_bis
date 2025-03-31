import React from 'react';
import {PageProps} from "@/types";
import {Head, useForm} from "@inertiajs/react";
import PageComponents from "@/Components/PageComponents";
import {Button, Select, Textarea} from "@headlessui/react";
import TextInput from "@/Components/TextInput";

const Contacts = ({auth}: PageProps) => {

    const {data, setData, post, reset} = useForm({
        subject: "",
        servers: "",
        message: "",
    })

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        post(route('contacts'), {
            onFinish: () => reset()
        })
    }

    return (
        <PageComponents auth={auth.user}>
            <Head title="Page de contacts"/>
            <h1>Page de contacts</h1>
            <form action="" method="post" onSubmit={handleSubmit} className={"mb-5"}>
                <TextInput
                    type="text"
                    placeholder={"Sujet de votre demande"}
                    className={"border p-2"}
                    name={"subject"}
                    required
                    value={data.subject}
                    onChange={event => setData("subject", event.target.value)}
                /> <br/><br/>
                <Select name="servers" id="" value={data.servers}
                        onChange={event => setData("servers", event.target.value)}>
                    <option value="concerné">-- Serveur concerné --</option>
                    <option value="discord">Serveur Discord</option>
                    <option value="pvp-faction">Serveur PVP Faction</option>
                </Select><br/><br/>
                <Textarea
                    name="message"
                    id=""
                    cols={50}
                    rows={20}
                    className={'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border resize-none'}
                    placeholder={"Votre message"}
                    value={data.message}
                    onChange={event => setData("message", event.target.value)}
                ></Textarea>
                <br/><br/>
                <Button type={"submit"}
                        className={"bg-blue-500 text-white p-1 rounded border-2 border-transparent hover:border-black duration-300"}>Envoyer
                </Button>
            </form>
        </PageComponents>
    );
};

export default Contacts;
