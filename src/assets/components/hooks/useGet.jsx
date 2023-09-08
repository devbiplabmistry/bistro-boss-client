
import useAxios from "./useAxios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../providers/authProvider";

const useGet = (route) => {
    const { user } = useContext(authContext)
    const [data, setData] = useState([])
    const [instance] = useAxios()
    useEffect(() => {
        instance.get(`/${route}?email=${user.email}`)
            .then(res => {
                setData(res.data)
            })
    }, [instance,route,user?.email])
    return [data]
};

export default useGet;