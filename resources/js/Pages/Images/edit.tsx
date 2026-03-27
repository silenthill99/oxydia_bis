import React, {useState} from 'react';
import PageComponents from "@/Components/PageComponents";
import {Form, Head, usePage} from "@inertiajs/react";
import {Image} from "@/types";
import {Input} from "@/Components/ui/input";
import InputError from "@/Components/InputError";
import {Label} from "@/Components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/Components/ui/select";
import ImageController from "@/actions/App/Http/Controllers/ImageController";
import {Button} from "@/Components/ui/button";

const Edit = () => {
    const {image} = usePage<{image: Image}>().props
    const [preview, setPreview] = useState("/storage/" + image.image_path || null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file))
        }
    }

    return (
        <PageComponents>
            <Head>
                <title>Modifier une image</title>
            </Head>
            <Form {...ImageController.update.form({image: image.id})}>
                {({errors}) => (
                    <div className={"space-y-4"}>
                        <div>
                            <Label htmlFor={"image"}>Choisissez une image</Label>
                            <Input
                                type={"file"}
                                accept={"image/*"}
                                name={"image"}
                                id="image"
                                onChange={handleChange}
                            />
                            <InputError message={errors.image}/>
                        </div>
                        <div>
                            <Label htmlFor={"server_name"}>Choix du serveur</Label>
                            <Select name={"server_name"} defaultValue={image.server_name}>
                                <SelectTrigger id={"server_name"}>
                                    <SelectValue placeholder="-- Choix du serveur" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={"server_rp"}>Serveur RolePlay</SelectItem>
                                    <SelectItem value={"Pvp-Faction"}>Serveur PvP Faction</SelectItem>
                                    <SelectItem value={"Harry PoCraft"}>Serveur Harry PoCraft</SelectItem>
                                </SelectContent>
                            </Select>
                            <InputError message={errors.server_name}/>
                        </div>
                        <div>
                            <Label htmlFor={"image_name"}>Nom de l'image</Label>
                            <Input id={'image_name'} name={"image_name"} placeholder={"Nom de l'image"} defaultValue={image.image_name}/>
                            <InputError message={errors.image_name} />
                        </div>
                        {preview && (
                            <img src={preview} alt={"visuel"} className={"rounded-md"}/>
                        )}
                        <Button>Modifier l'image</Button>
                    </div>
                )}
            </Form>
        </PageComponents>
    );
};

export default Edit;
