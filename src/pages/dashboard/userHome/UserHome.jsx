import { useContext } from "react";
import { authContext } from "../../../providers/authProvider";

const UserHome = () => {
    const { user } = useContext(authContext)
    console.log(user);
    return (
        <div>
            {/* <img src={} alt="" /> */}
          
                <img src={user?.photoURL} alt="" />
          
        </div>
    );
};

export default UserHome;