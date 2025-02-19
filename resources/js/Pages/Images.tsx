import React from 'react';
import {PageProps} from "@/types";
import Header from "@/Components/Header";
import {Head} from "@inertiajs/react";
import Footer from "@/Components/Footer";
import RolePlay from "@/Components/RolePlay";

const Images = ({auth}: PageProps) => {
    return (
        <div className={"min-h-screen flex flex-col"}>
            <Head title={"Quelques images"}/>
            <Header auth={auth.user} images/>
            <main className={"flex-grow container mx-auto"}>
                <h1 className={"text-center"}>Quelques images</h1>
                <p>Clique sur les images pour les agrandir</p>
                <RolePlay />
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Images;
