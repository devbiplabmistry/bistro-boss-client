
import { useContext, useEffect, useState } from "react";
import useAxios from "./useAxios";
import { authContext } from "../../../providers/authProvider";

const useAdmin = () => {
    const [instance]=useAxios()
    const { user } = useContext(authContext)
    const [isAdmin,setAdmin]=useState()
  useEffect(()=>{
    instance.get(`/users/admin/${user?.email}`)
    .then(res=>{
        setAdmin(res.data.admin)
    })
  },[user?.email,instance])
    return [isAdmin]   
};

export default useAdmin;