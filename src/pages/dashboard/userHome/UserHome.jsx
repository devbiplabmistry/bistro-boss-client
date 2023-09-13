import { useContext } from "react";
import { authContext } from "../../../providers/authProvider";
import { BiBookmarkMinus, BiCart, BiHomeAlt, BiMobile, BiStar, BiWallet, BiWalletAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import useMenu from "../../../assets/components/hooks/useMenu";
import useGet from "../../../assets/components/hooks/useGet";

const UserHome = () => {
    const menu = useMenu()
    const { user } = useContext(authContext)
    const [payments] = useGet('payment')
    const [booking] = useGet('booking')
    const [review] = useGet('reviews')
    return (
        <div className="w-full ml-8 my-14">
            <h2 className="font-cinzel font-semibold text-3xl mb-6">Hi welcome Back</h2>
            <div className="user-wrapper grid grid-cols-3 gap-4">
                <div className=" text-center rounded-lg px-24 py-7 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
                    <div className="flex gap-2 items-center justify-center"><BiWallet className="text-5xl text-white"></BiWallet><span className="font-inter font-extrabold text-4xl text-white">{menu.length}</span></div>
                    <p className="font-inter font-normal text-2xl text-white ml-10">
                        <Link to="/menu">Menu</Link>
                    </p>
                </div>
                <div className=" text-center rounded-lg  px-24 py-7 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                    <div className="flex gap-2 items-center justify-center">< BiHomeAlt className="text-5xl text-white"></BiHomeAlt><span className="font-inter font-extrabold text-4xl text-white">{payments[0]?.quantity}</span></div>
                    <p className="font-inter font-normal text-2xl text-white ml-10">
                        <Link to="/shop/salad">Shop</Link>
                    </p>
                </div>
                <div className="rounded-lg text-center  px-24 py-7 bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                    <div className="flex gap-2 items-center justify-center"><BiMobile className="text-5xl text-white"></BiMobile><span className="font-inter font-extrabold text-4xl text-white">03</span></div>
                    <p className="font-inter font-normal text-2xl text-white ml-20">Contact</p>
                </div>

            </div>
            <div className="user-bottom-wrapper flex mt-8">
                <div className="left-item  bg-[#FFEDD5] py-20 px-52 w-1/2">
                    <div className="inner-circle w-40 h-40 rounded-full  mb-12">
                        <img className="w-40 h-40 rounded-full" src={user?.photoURL} alt="" />
                    </div>
                    <h3 className="font-cinzel font-semibold text-3xl">{user?.displayName}</h3>
                </div>
                <div className="right-item  py-20 px-24 border-l-2 w-1/2 bg-[#FEF9C3]">
                    <h2 className="font-cinzel font-semibold text-4xl mb-8">Your Activities</h2>
                    <h4 className="font-cinzel flex font-semibold  text-xl uppercase text-[#0088FE]"><BiCart></BiCart>order: {payments[0]?.quantity}</h4>
                    <h4 className="font-cinzel flex font-semibold text-xl uppercase text-[#00C4A1]"> <BiStar></BiStar>review: {review?.length}</h4>
                    <h4 className="font-cinzel flex font-semibold text-xl uppercase text-[#FFBB28]"><BiBookmarkMinus></BiBookmarkMinus> booking: {booking?.length}</h4>
                    <h4 className="font-cinzel flex font-semibold text-xl uppercase text-[#FF8042]"><BiWalletAlt></BiWalletAlt>payment: {payments[0]?.Amount}</h4>

                </div>
            </div>
        </div>
    );
};

export default UserHome;