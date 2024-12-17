import React from 'react';
import Login from "@/Components/Login";
interface Props {
    user: {
        id: string;
        name: string;
        email: string;
    };
    message: string;
}
const Essai: React.FC<Props> = ({user, message}) => {
    return (
        <div>
            <Login user={user} message={message} />
            <p>Test</p>
            <h1>Bonjour {user.name}</h1>
            <p>{message}</p>
        </div>
    );
};

export default Essai;
