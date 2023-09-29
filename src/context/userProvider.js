"use client"
import React, {useState, useEffect} from 'react'
import UserContext from './userContext'
import { toast } from 'react-toastify';
import { currentUser } from '@/services/userServices';

function UserProvider({children}) {
    const[user,setUser]=useState(undefined);

    async function load(){
        try {
            const user=await currentUser();
            setUser({...user});
            
        } catch (error) {
            setUser(undefined)
        }
    }

    useEffect(()=>{
        load(); 
    },[])

  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider