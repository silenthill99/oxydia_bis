import React, {useEffect} from 'react';
import {Head, router, usePage} from "@inertiajs/react";
import Images from "@/Components/Images";
import PageLayout from "@/Layouts/PageLayout";
import {Image} from "@/types";
import {Button} from "@/Components/ui/button";
import images from "@/routes/images";

const Index = () => {
    const {serverRp, auth} = usePage<{ serverRp: Image[] }>().props;
    useEffect(() => {
        console.log(serverRp);
    }, [])
    return (
        <PageLayout>
            <Head title={"Quelques images"}/>
            <h1 className={"text-center"}>Quelques images</h1>
            {auth.isAdmin && (
                <Button onClick={() => router.visit(images.create())}>Ajouter une image</Button>
            )}
            <p>Clique sur les images pour les agrandir</p>
            <Images images={serverRp} server_name={"RolePlay"} />
        </PageLayout>
    );
};

export default Index;
