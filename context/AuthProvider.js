import { createContext, useState} from "react";
import * as SecureStore from 'expo-secure-store';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) =>{
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            login:(email, password) => {

                setUser('Test');
                SecureStore.setItemAsync('user','test');
            },
            logout: () => {
                setUser(null);
                SecureStore.deleteItemAsync('user');
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}
