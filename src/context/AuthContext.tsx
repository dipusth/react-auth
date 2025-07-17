import { createContext } from "react";

type AuthContextType {
    isAuthenticated: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
}
export const AuthContext =createContext<AuthContextType>({
    
})