import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

interface User {
  _id: string;
  email: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  handleOAuthLogin: (user: Omit<User, "token">, token: string) => void;
  handleOAuthRegister: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  login: async () => {},
  logout: () => {},
  handleOAuthLogin: () => {},
  handleOAuthRegister: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const userFromStorage = localStorage.getItem("user");
    return userFromStorage ? JSON.parse(userFromStorage) : null;
  });

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post<{
        token: string;
        user: Omit<User, "token">;
      }>("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      console.log(response);
      const loggedInUser = {
        ...response.data.user,
        token: response.data.token,
      };
      setUser(loggedInUser);
      localStorage.setItem("user", JSON.stringify(loggedInUser));
    } catch (error) {
      throw new Error("Invalid email or password"); // Handle error based on your API response
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const handleOAuthLogin = (user: Omit<User, "token">, token: string) => {
    const loggedInUser = { ...user, token };
    setUser(loggedInUser);
    localStorage.setItem("user", JSON.stringify(loggedInUser));
  };

  const handleOAuthRegister = async (email: string, password: string) => {
    try {
      const response = await axios.post<{
        token: string;
        user: Omit<User, "token">;
      }>("http://localhost:5000/api/auth/register", {
        email,
        password,
      });
      const registeredUser = {
        ...response.data.user,
        token: response.data.token,
      };
      setUser(registeredUser);
      localStorage.setItem("user", JSON.stringify(registeredUser));
    } catch (error) {
      throw new Error("OAuth Registration failed"); // Handle error based on your API response
    }
  };

  const isLoggedIn = !!user;

  const authContextValue: AuthContextType = {
    user,
    isLoggedIn,
    login,
    logout,
    handleOAuthLogin,
    handleOAuthRegister,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
