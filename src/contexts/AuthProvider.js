import React, { createContext }  from 'react';
import useReviews from '../hooks/useReviews';
import useServices from '../hooks/useServices';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const allReviews = useReviews();
    const allServices = useServices();
    return (
        <AuthContext.Provider value={{allReviews,allServices}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;