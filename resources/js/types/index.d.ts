export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;

    [key: string]: unknown;
}
