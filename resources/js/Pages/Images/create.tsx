import React, {ChangeEvent, useState} from 'react';
import PageComponents from "@/Components/PageComponents";
import {Form, Head} from "@inertiajs/react";
import {Label} from "@/Components/ui/label";
import {Input} from "@/Components/ui/input";
import InputError from "@/Components/InputError";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/Components/ui/select";
import {Button} from "@/Components/ui/button";
import ImageController from "@/actions/App/Http/Controllers/ImageController";

const Create = () => {
    const [preview, setPreview] = useState<string | null>( null);

    const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return null;

        setPreview(URL.createObjectURL(file))
    }
    return (
        <PageComponents>
            <Head title={"Ajouter une image"}/>
            <Form {...ImageController.store.form()}>
                {({errors}) => (
                    <div className={"space-y-4"}>
                        <div>
                            <Label htmlFor={"image"}>Choisissez une image</Label>
                            <Input
                                type={"file"}
                                accept="image/*"
                                id={"image"}
                                name={"image"}
                                onChange={handleChange}
                            />
                            {errors.image && (
                                <InputError message={errors.image} />
                            )}
                        </div>
                        <div>
                            <Label htmlFor={"server_name"}>Choix du serveur</Label>
                            <Select name={"server_name"}>
                                <SelectTrigger id={"server_name"}>
                                    <SelectValue placeholder="-- Choix du serveur --" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={"server_rp"}>Serveur RolePlay</SelectItem>
                                    <SelectItem value={"Pvp-Faction"}>Serveur PvP Faction</SelectItem>
                                    <SelectItem value={"Harry PoCraft"}>Serveur Harry PoCraft</SelectItem>
                                </SelectContent>
                            </Select>
                            <InputError message={errors.server_name} />
                        </div>
                        <div>
                            <Label htmlFor={"image_name"}>Nom de l'image</Label>
                            <Input id={'image_name'} name={"image_name"} placeholder={"Nom de l'image"}/>
                            <InputError message={errors.image_name} />
                        </div>
                        {preview && (
                            <img src={preview} alt={"visuel"} className={"rounded-md"}/>
                        )}
                        <Button>Envoyer</Button>
                    </div>
                )}
            </Form>
        </PageComponents>
    );
};

export default Create;
