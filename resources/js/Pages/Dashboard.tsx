import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import SharedData from "@/types";
import {Separator} from "@/Components/ui/separator";
import {Card, CardContent, CardHeader, CardTitle} from "@/Components/ui/card";

export default function Dashboard() {
    const {auth} = usePage<SharedData>().props
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div>
                <p className={"text-5xl py-5 font-semibold"}>{auth.user.name}</p>
                <Separator/>
                <div className="m-20">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <Card>
                            <CardHeader>
                                <CardTitle>Vos messages</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Messages envoyés : {auth.user.messages.length}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
