import React from 'react';
import {Form, Head} from "@inertiajs/react";
import PageComponents from "@/Components/PageComponents";
import MessageController from "@/actions/App/Http/Controllers/MessageController";
import {Input} from "@/Components/ui/input";
import {Label} from "@/Components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/Components/ui/select";
import {Textarea} from "@/Components/ui/textarea";
import InputError from "@/Components/InputError";
import {cn} from "@/lib/utils";

const Contacts = () => {

    return (
        <PageComponents>
            <Head title="Page de contacts"/>
            <h1>Page de contacts</h1>
            <Form {...MessageController.store.form()} className={"mb-5"} resetOnSuccess={true}>
                {({errors}) => (
                    <div className={"space-y-5"}>
                        <div>
                            <Label htmlFor={"subject"}>Sujet de votre demande</Label>
                            <Input
                                type="text"
                                name={"subject"}
                                placeholder={"Sujet de votre demande"}
                                className={!!errors.subject ? "border-red-600 placeholder:text-red-600" : ""}
                                id={"subject"}
                                aria-invalid={!!errors.subject}
                            />
                            <InputError message={errors.subject}/>
                        </div>
                        <div>
                            <Label htmlFor={"server"}>Serveur concerné</Label>
                            <Select name={"server"}>
                                <SelectTrigger id={"server"} className={!!errors.server ? "border-red-600" : ""}>
                                    <SelectValue placeholder={"-- Serveur concerné --"}/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={"discord"}>Serveur Discord</SelectItem>
                                    <SelectItem value={"pvp-faction"}>Serveur Pvp-Faction</SelectItem>
                                </SelectContent>
                            </Select>
                            <InputError message={errors.server}/>
                        </div>
                        <div>
                            <Label htmlFor={"message"}>Votre message</Label>
                            <Textarea
                                name={"message"}
                                id={"message"}
                                cols={50}
                                rows={20}
                                className={cn("resize-none", errors.message ? "border-red-600 placeholder:text-red-600" : "")}
                                placeholder={"Votre message"}
                                aria-invalid={!!errors.message}
                            />
                            <InputError message={errors.message}/>
                        </div>
                        <button type={"submit"}
                                className={"bg-blue-500 text-white p-1 rounded border-2 border-transparent hover:border-black duration-300"}>Envoyer
                        </button>
                    </div>
                )}
            </Form>
        </PageComponents>
    );
};

export default Contacts;
