import React from 'react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu, SidebarMenuButton, SidebarMenuItem
} from "@/Components/ui/sidebar";
import {dashboard} from "@/routes";
import {Link, usePage} from "@inertiajs/react";
import profile from "@/routes/profile";

const navItems = [
    {
        label: "Tableau de bord",
        url: dashboard()
    },
    {
        label: "Modifier le profil",
        url: profile.edit()
    }
]

const AppSidebar = () => {

    const {url} = usePage()

    const isActive = (link: string) => {
        if (link === "/") {
            return url === "/"
        }
        return url.startsWith(link)
    }

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item) => (
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild isActive={isActive(item.url.url)}>
                                        <Link href={item.url}>{item.label}</Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};

export default AppSidebar;
