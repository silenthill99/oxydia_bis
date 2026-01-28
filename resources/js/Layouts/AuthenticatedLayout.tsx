import { PropsWithChildren } from 'react';
import {SidebarProvider, SidebarTrigger} from "@/Components/ui/sidebar";
import AppSidebar from "@/Components/app-sidebar";

export default function Authenticated({children}: PropsWithChildren) {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <main className={"grow"}>
                <SidebarTrigger/>
                {children}
            </main>
        </SidebarProvider>
    );
}
