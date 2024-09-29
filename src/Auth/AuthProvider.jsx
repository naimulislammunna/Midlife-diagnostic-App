import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createContext } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const handleRegister = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
    }

    const info = {
        handleRegister
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;