import { PropsWithChildren } from 'react';
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/Components/ui/sidebar";
import AppSidebar from "@/Components/app-sidebar";

export default function Authenticated({children}: PropsWithChildren) {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <SidebarInset>
                <SidebarTrigger/>
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}
