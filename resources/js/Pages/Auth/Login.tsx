import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import {Form, Head, Link} from '@inertiajs/react';
import password from "@/routes/password";
import AuthenticatedSessionController from "@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController";
import {Input} from "@/Components/ui/input";
import {Checkbox} from "@/Components/ui/checkbox";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <Form {...AuthenticatedSessionController.store.form()}>
                {({errors, processing}) => (
                    <>
                        <div>
                            <InputLabel htmlFor="email" value="Email" />

                            <Input
                                id="email"
                                type="email"
                                name="email"
                                className="mt-1 block w-full"
                                autoComplete="username"
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <Input
                                id="password"
                                type="password"
                                name="password"
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4 block">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                />
                                <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                            </label>
                        </div>

                        <div className="mt-4 flex items-center justify-end">
                            {canResetPassword && (
                                <Link
                                    href={password.request()}
                                    className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Forgot your password?
                                </Link>
                            )}

                            <PrimaryButton className="ms-4" disabled={processing}>
                                Log in
                            </PrimaryButton>
                        </div>
                    </>
                )}
            </Form>
        </GuestLayout>
    );
}
