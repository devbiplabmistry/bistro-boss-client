import {  BiWallet } from "react-icons/bi";
import useGet from "../../../../assets/components/hooks/useGet";
import { FaUsers } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { useEffect,  useState } from "react";
import useAxios from "../../../../assets/components/hooks/useAxios";
import useMenu from "../../../../assets/components/hooks/useMenu";


const AdminHome = () => {
    const [payments] = useGet("payments")
    const [users, setUsers] = useState([])
    const menu=useMenu()
    const total = payments.reduce((sum, item) => sum + item.Amount, 0)
    const quantity2 = payments.reduce((sum, item) => sum + item.quantity, 0)
    const quantity=parseFloat(quantity2)

    const prices = parseFloat(total)
    const price2 = prices.toFixed(2)
    const price = parseFloat(price2)
    const [instance] = useAxios()
    useEffect(() => {
        instance.get('/user')
            .then((res) => {
                setUsers(res.data);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, [instance]);


    return (
        <div className="m-8">
            <h2 className="font-cinzel font-semibold text-3xl mb-6">Hi welcome Back</h2>
            <div className="user-wrapper grid grid-cols-4 gap-4">
                <div className=" text-center flex items-center justify-center rounded-lg px-24 py-7 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
                    <h4 className="text-3xl mr-2  text-white">  <BiWallet></BiWallet></h4>
                    <h4 className="font-inter font-extrabold text-lg text-white">
                        {price}
                        <br />
                        Revenue
                    </h4>
                </div>
                <div className=" text-center flex justify-center items-center rounded-lg  px-24 py-7 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                    <h4 className="text-3xl mr-2  text-white">  <FaUsers></FaUsers></h4>
                    <h4 className="font-inter font-extrabold text-lg text-white">
                        {users?.length}
                        <br />
                      Customers
                    </h4>
                </div>
                <div className="rounded-lg text-center flex justify-center items-center  px-24 py-7 bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                <h4 className="text-3xl mr-2  text-white">  <MdProductionQuantityLimits></MdProductionQuantityLimits></h4>
                    <h4 className="font-inter font-extrabold text-lg text-white">
                        {menu?.length}
                        <br />
                      Products
                    </h4>
                </div>
                <div className="rounded-lg text-center flex justify-center items-center  px-24 py-7 bg-gradient-to-r from-[#6AAEFF] to-[#6AAEFF]">
                <h4 className="text-3xl mr-2  text-white">  <BsFillCartFill></BsFillCartFill></h4>
                    <h4 className="font-inter font-extrabold text-lg text-white">
                        {quantity}
                        <br />
                      Orders
                    </h4>
                </div>

            </div>

        </div>
    );
};

export default AdminHome;