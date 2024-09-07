import React, { createContext } from "react";

export const AuthContextUser = createContext({
    avatar: "",
    email: "",
    fullName: "",
    id: "",
    phone: "",
    role: "",
});
export const AuthWrapper = (props) => {
    const [user, setUser] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);
    return (
        <AuthContextUser.Provider value={{ user, setUser, isLoading, setIsLoading}}>
            {props.children}
        </AuthContextUser.Provider>
    );
};
