import React, {PropsWithChildren} from 'react';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import {Toaster} from "@/Components/ui/sonner";

const PageLayout = ({children, className}: PropsWithChildren<{className?: string}>) => {
    return (
        <section className="min-h-screen overflow-hidden flex flex-col bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <Header/>
            <Toaster/>
            <main className={`container mx-auto grow px-4 py-8 md:py-12 ${className}`}>
                {children}
            </main>
            <Footer/>
        </section>
    );
};

export default PageLayout;
