import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import {Form, Head, Link} from '@inertiajs/react';
import {cgu, login} from "@/routes";
import {Label} from "@/Components/ui/label";
import {Input} from "@/Components/ui/input";
import {Checkbox} from "@/Components/ui/checkbox";
import RegisteredUserController from "@/actions/App/Http/Controllers/Auth/RegisteredUserController";

export default function Register() {

    return (
        <GuestLayout>
            <Head title="Register"/>

            <Form {...RegisteredUserController.store.form()}>
                {({errors, processing}) => (
                    <div className={"space-y-4"}>
                        <div>
                            <Label htmlFor="name">Name</Label>

                            <Input
                                id="name"
                                name="name"
                                className="mt-1 block w-full"
                                autoComplete="name"
                                // required
                            />

                            <InputError message={errors.name} className="mt-2"/>
                        </div>

                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                className="mt-1 block w-full"
                                autoComplete="username"
                                // required
                            />

                            <InputError message={errors.email} className="mt-2"/>
                        </div>

                        <div>
                            <Label htmlFor="password">Password</Label>

                            <Input
                                id="password"
                                type="password"
                                name="password"
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                // required
                            />

                            <InputError message={errors.password} className="mt-2"/>
                        </div>

                        <div>
                            <Label htmlFor="password_confirmation">Confirm Password</Label>

                            <Input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                // required
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <div className={"flex gap-2 items-center"}>
                                <input type={"hidden"} name={"cgu"} value={0}/>
                                <Checkbox name={"cgu"} id={"cgu"} value={1}/>
                                <Label htmlFor={"cgu"}>En créant un compte, j'accepte les présentes <Link
                                    className={"underline text-blue-500"} href={cgu()}>conditions générales
                                    d'utilisation</Link></Label>
                            </div>
                            <InputError
                                message={errors.cgu}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex items-center justify-end">
                            <Link
                                href={login()}
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Already registered?
                            </Link>

                            <PrimaryButton className="ms-4" disabled={processing}>
                                Register
                            </PrimaryButton>
                        </div>
                    </div>
                )}
            </Form>
        </GuestLayout>
    );
}
