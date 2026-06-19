import { Auth } from './index';

declare module '@inertiajs/core' {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string;
            quote: { message: string; author: string };
            auth: Auth;
            sidebarOpen: boolean;

            [key: string]: unknown;
        }
    }
}
