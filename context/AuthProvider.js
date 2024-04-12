import { createContext, useState } from "react";
import * as SecureStore from "expo-secure-store";
import axiosConfig from "../services/axiosConfig";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        isLoading,
        register : async (  name, contact, email, password, passwordConfirmation ) => {
          setIsLoading(true);
          await axiosConfig.post('/register', {
              name,
              contact,
              email,
              password,
              password_confirmation: passwordConfirmation,
              device_name:'mobile',
            })
            .then(async response => {
                const userResponse = {
                    token: response.data.token,
                    id: response.data.user.id,
                    name: response.data.user.name,
                    email: response.data.user.email,
                };
                setUser(userResponse);
                setError(null);
                SecureStore.setItemAsync('user', JSON.stringify(userResponse));
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error.response.data.message);
                setError(error.response.data.message);
                setIsLoading(false);
            });

        },
        login : async (email, password) => {
            setIsLoading(true);
            await axiosConfig.post('/login', {
                email,
                password,
                device_name: 'mobile',
            })
            .then(response => {
                const userResponse = {
                    token: response.data.token,
                    id: response.data.user.id,
                    name: response.data.user.name,
                    email: response.data.user.email,
                };
                setUser(userResponse);
                setError(null);
                SecureStore.setItemAsync('user', JSON.stringify(userResponse));
                setIsLoading(false);
            })
            .catch(error => {
              console.log(error.response.data.message);
              setError(error.response.data.message);
              setIsLoading(false);
            });
        },
        logout: async () => {
            setIsLoading(true);
            axiosConfig.defaults.headers.common = {
              Accept: 'application/json',
              Authorization: `Bearer ${user.token}`,
            };
            axiosConfig.post('/logout').then(response => {
              setUser(null);
              setError(null);
              SecureStore.deleteItemAsync("user");
              setIsLoading(false);
            })
            .catch( error => {
              setError(error.response.data.message);
              console.log(error.response.data.message);
              setIsLoading(false);
            });
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
