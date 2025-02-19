import React from 'react';
import {User} from "@/types";
import {Link} from "@inertiajs/react";

type PageProps = {
    auth: User;
}

const Login = (props: PageProps) => {
    return (
        <div>
            {props.auth ? (
                <Link
                    href={route('dashboard')}
                    className="rounded-md px-3 py-2 ring-1 ring-transparent transition focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    {props.auth.name}
                </Link>
            ) : (
                <>
                    <Link
                        href={route('login')}
                        className="rounded-md px-3 py-2 ring-1 ring-transparent transition focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white hover:underline"
                    >
                        Se connecter
                    </Link>
                    <Link
                        href={route('register')}
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
