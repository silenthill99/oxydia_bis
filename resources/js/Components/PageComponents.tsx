import React, {PropsWithChildren} from 'react';
import {User} from "@/types";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";



const PageComponents = ({auth, children, className}: PropsWithChildren<{auth: User, className?: string}>) => {
    return (
        <section className={"min-h-screen flex flex-col"}>
            <Header auth={auth}/>
            <main className={`container mx-auto grow ${className}`}>
                {children}
            </main>
            <Footer/>
        </section>
    );
};

export default PageComponents;
