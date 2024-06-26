import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  login: async () => {},
  logout: () => {},
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
  };

  const isLoggedIn = !!user;

  const authContextValue: AuthContextType = {
    user,
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
