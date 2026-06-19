export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    messages: Message[];
}

export interface Auth {
    user: User | null;
    isAdmin: boolean;
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

export interface Role {
    id: number;
    role: string;
    label: string;
}
