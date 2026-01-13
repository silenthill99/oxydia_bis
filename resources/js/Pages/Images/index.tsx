import React, {useEffect} from 'react';
import {Head, usePage} from "@inertiajs/react";
import Images from "@/Components/Images";
import PageComponents from "@/Components/PageComponents";
import {Image} from "@/types";

const Index = () => {
    const {serverRp} = usePage<{serverRp: Image[] }>().props;
    useEffect(() => {
        console.log(serverRp);
    }, [])
    return (
        <PageComponents>
            <Head title={"Quelques images"}/>
            <h1 className={"text-center"}>Quelques images</h1>
            <p>Clique sur les images pour les agrandir</p>
            <Images images={serverRp} server_name={"RolePlay"} />
        </PageComponents>
    );
};

export default Index;
