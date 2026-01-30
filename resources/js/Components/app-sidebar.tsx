import React, {useEffect} from 'react';
import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel, SidebarHeader,
    SidebarMenu, SidebarMenuButton, SidebarMenuItem
} from "@/Components/ui/sidebar";
import {accueil, dashboard, logout} from "@/routes";
import {Link, usePage} from "@inertiajs/react";
import profile from "@/routes/profile";
import {HomeIcon} from "lucide-react";
import SharedData from "@/types";

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

    const {auth} = usePage<SharedData>().props;
    const {url} = usePage()

    useEffect(() => {
        console.log(auth.isAdmin)
    }, [])

    const isActive = (link: string) => {
        if (link === "/") {
            return url === "/"
        }
        return url.startsWith(link)
    }

    return (
        <Sidebar variant={"inset"}>
            <SidebarHeader>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <Link href={accueil()} className="flex items-center gap-2">
                                        <HomeIcon />
                                        <span>Retour à la page d'accueil</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item, i) => (
                                <SidebarMenuItem key={i}>
                                    <SidebarMenuButton asChild isActive={isActive(item.url.url)}>
                                        <Link href={item.url}>{item.label}</Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {auth.isAdmin && (
                    <SidebarGroup>
                        <SidebarGroupLabel>Partie administrateur</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <p>Essai</p>
                        </SidebarGroupContent>
                    </SidebarGroup>
                )}
            </SidebarContent>
            <SidebarFooter>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={logout()} className={"text-red-600! hover:underline"}>Se déconnecter</Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarFooter>
        </Sidebar>
    );
};

export default AppSidebar;
