import { createContext, useState } from 'react';

export const AuthContext = createContext({
    isAuth: false,
    toggle: () => {},
});

export const AuthContextProvider = ({ children }) => {
    const [isAuth, toggleIsAuth] = useState(false);

    const toggle = () => {
        toggleIsAuth(!isAuth);
    };

    return (
        <AuthContext.Provider value={{ isAuth, toggle }}>
            {children}
        </AuthContext.Provider>
    );
};
