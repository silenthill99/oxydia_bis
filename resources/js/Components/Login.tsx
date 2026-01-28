import React from 'react';
import SharedData from "@/types";
import {Link, usePage} from "@inertiajs/react";
import {dashboard, login, register} from "@/routes";

interface Props extends React.HTMLProps<HTMLDivElement> {}

const Login = ({...props}: Props) => {
    const {auth} = usePage<SharedData>().props
    return (
        <div {...props}>
            {auth.user ? (
                <Link
                    href={dashboard()}
                    className="rounded-md px-3 py-2 ring-1 ring-transparent transition focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    {auth.user.name}
                </Link>
            ) : (
                <>
                    <Link
                        href={login()}
                        className="rounded-md px-3 py-2 ring-1 ring-transparent transition focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white hover:underline"
                    >
                        Se connecter
                    </Link>
                    <Link
                        href={register()}
                        className="rounded-md px-3 py-2 ring-1 ring-transparent transition focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white hover:underline"
                    >
                        Créer un compte
                    </Link>
                </>
            )}
        </div>
    );
};

export default Login;
