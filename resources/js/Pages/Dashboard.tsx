import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import SharedData, {Role} from "@/types";
import {Separator} from "@/Components/ui/separator";
import {Card, CardContent, CardHeader, CardTitle} from "@/Components/ui/card";
import {Badge} from "@/Components/ui/badge";

export default function Dashboard() {
    const {auth, roles} = usePage<SharedData & {roles: Role[]}>().props
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div>
                <p className={"text-5xl py-5 font-semibold"}>{auth.user?.name}</p>
                <Separator/>
                <div className="m-20">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <Card>
                            <CardHeader>
                                <CardTitle>Vos messages</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Messages envoyés : {auth.user?.messages.length}</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Vos rôles</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul>
                                    {roles.map((role) => (
                                        <li key={role.id}>
                                            <Badge>{role.role}</Badge>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
