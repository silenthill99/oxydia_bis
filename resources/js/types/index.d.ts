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

export interface Image {
    id: number;
    image_path: string;
    server_name: string;
    image_name: string;
    user: User;
    created_at: string;
    updated_at: string;
}
