import { FaHome, FaUsers, FaWallet } from "react-icons/fa";
import { MdOutlineCardTravel, MdOutlineReviews, MdOutlineVerticalDistribute } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import { AiFillShopping, AiOutlineMenu} from "react-icons/ai";
import { BiSolidBookAlt } from "react-icons/bi";
import { ImSpoonKnife } from "react-icons/im";
import { GrContact } from "react-icons/gr";
import useCart from "../../../assets/components/hooks/useCart";
import useAdmin from "../../../assets/components/hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart()
    const [isAdmin]= useAdmin();
    return (
        <div className="w-full">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                   { isAdmin ?
                    <ul className="menu  p-4 w-full min-h-full bg-[#D1A054] text-base-content">
                        <div className="dashboard-title mb-20 mt-12">
                            <h2 className="font-cinzel font-black text-2xl">BISTRO BOSS</h2>
                            <h3 className="font-cinzel font-bold text-lg tracking-[5px]">Restaurant</h3>
                        </div>
                        <NavLink to="/dashboard/userHome" className="flex gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active"><FaHome></FaHome>Admin Home</NavLink>
                        <NavLink to="/dashboard/addItem" className="flex gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active"> <ImSpoonKnife></ImSpoonKnife> Ad Items</NavLink>
                        <NavLink to="/dashboard/manageItem" className="flex gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active"> <MdOutlineVerticalDistribute></MdOutlineVerticalDistribute>Manage Items</NavLink>
                        <NavLink to="/dashboard/manageBookings" className="flex items-center gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active"><BiSolidBookAlt></BiSolidBookAlt> Manage Bookings<span className="font-roboto font-medium text-2xl text-green-600  ">{cart.length}</span></NavLink>

                        <NavLink to="/dashboard/allUsers" className="flex gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active" ><FaUsers></FaUsers>All Users</NavLink>


                        <div className="divider"></div>
                        <NavLink to="/" className="flex gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active"><FaHome></FaHome>User Home</NavLink>
                        <NavLink to="/menu" className="flex gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active"><AiOutlineMenu></AiOutlineMenu>Menu</NavLink>
                        <NavLink to="/shop/salad" className="flex gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active"><AiFillShopping></AiFillShopping> Shop</NavLink>
                        <NavLink to="/" className="flex gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active"><GrContact></GrContact> Contact</NavLink>
                    </ul> :
                    <ul className="menu  p-4 w-full min-h-full bg-[#D1A054] text-base-content">
                        <div className="dashboard-title mb-20 mt-12">
                            <h2 className="font-cinzel font-black text-2xl">BISTRO BOSS</h2>
                            <h3 className="font-cinzel font-bold text-lg tracking-[5px]">Restaurant</h3>
                        </div>
                        <NavLink to="/dashboard/userHome" className="flex gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active"><FaHome></FaHome>User Home</NavLink>
                        <NavLink to="/dashboard/bookTable" className="flex gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active"> <MdOutlineCardTravel></MdOutlineCardTravel>Reservation</NavLink>
                        <NavLink to="/dashboard/paymentHistory" className="flex gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active"> <FaWallet></FaWallet>Payment History</NavLink>
                        <NavLink to="/dashboard/cart" className="flex items-center gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active"> <BsFillCartFill></BsFillCartFill>My Cart<span className="font-roboto font-medium text-2xl text-green-600  ">{cart.length}</span></NavLink>
                        <NavLink to="/dashboard/review" className="flex gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active" > <MdOutlineReviews></MdOutlineReviews>Add Review</NavLink>
                        <NavLink to="/dashboard/booking" className="flex gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active"> <TbBrandBooking></TbBrandBooking>My Booking</NavLink>
                        <div className="divider"></div>
                        <NavLink to="/" className="flex gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active"><FaHome></FaHome>User Home</NavLink>
                        <NavLink to="/menu" className="flex gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active"><AiOutlineMenu></AiOutlineMenu>Menu</NavLink>
                        <NavLink to="/shop/salad" className="flex gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active"><AiFillShopping></AiFillShopping> Shop</NavLink>
                        <NavLink to="/" className="flex gap-2 mb-6 font-cinzel font-semibold text-base" activeClassName="active"><GrContact></GrContact> Contact</NavLink>
                    </ul>
}
                </div>
            </div>

        </div>
    );
};

export default Dashboard;