
import useAdmin from "../assets/components/hooks/useAdmin";
const AdminRoute = ({ children }) => {
    const [isAdmin] = useAdmin()
    if (!isAdmin) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    if (isAdmin) {
        return children;
    }
};

export default AdminRoute;


