import React, { createContext }  from 'react';
import useReviews from '../hooks/useReviews';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const allReviews = useReviews();
    return (
        <AuthContext.Provider value={{allReviews}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;