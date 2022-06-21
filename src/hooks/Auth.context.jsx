import { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
    const [isAuth, toggleIsAuth] = useState(false);

    const signIn = () => {
        toggleIsAuth(true);
    };

    const signOut = () => {
        toggleIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuth, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
