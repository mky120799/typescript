export interface User {
    name:string;
    age:number;
    isMarried:boolean;
}

interface UserContextType {
    users:User[]|null;
    addUser:(user:User)=> void;
    updateUser: (id:string,isMarried:boolean)=> void;
    deleteUser:(id:string)=> void;
}
import { createContext } from "react";



const contextInitialValue ={
    users:null,
    addUser:()=> null,
    updateUser: ()=> null,
    deleteUser:()=> null,
};

export const UserContext = createContext<UserContextType>(contextInitialValue);

interface Props {
   children: React.ReactNode;
}
import React, { useState, useEffect } from "react";

export const UserProvider = (props: Props) => {
    const [users, setUsers] = useState<User[] | null>(null);

    useEffect(() => {
        setUsers([{ name: "pedro", age: 22, isMarried: false }]);
    }, []);

    const addUser = (user: User) => {
        setUsers(prev => prev ? [...prev, user] : [user]);
    };
    const updateUser = (id: string)=> null
    const deleteUser = (id: string)=>null

    return <UserContext.Provider value={{users,addUser,updateUser,deleteUser}}>{props.children}</UserContext.Provider>
}