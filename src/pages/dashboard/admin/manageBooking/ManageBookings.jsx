
import CommonTitle from "../../../shared/commonTitle/CommonTitle";
import useGet from "../../../../assets/components/hooks/useGet";
import { MdDone } from "react-icons/md";
import useAxios from "../../../../assets/components/hooks/useAxios";
import Swal from "sweetalert2";
import useCart from "../../../../assets/components/hooks/useCart";


const ManageBookings = () => {
  const [payments] =useGet("payments")
  const [instance]=useAxios()
  const [,refetch]=useCart()
  const handlePayment =(item)=>{
    instance.put('/updatePayment',{item})
    .then(res=>{
        refetch()
        if(res.data.modifiedCount >0){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Payment status Updated !!`,
                showConfirmButton: false,
                timer: 1500
            })
        }
    })

  }
    return (
        <div className="m-8">
            <CommonTitle subTitle="---At a Glance!---" title="MANAGE ALL BOOKINGS"></CommonTitle>
            <h3 className="font-cinzel font-bold text-3xl mt-16 mb-4">Total items: {payments?.length}</h3>
            <table className="table">
                <thead>
                    <tr className="bg-[#D1A054] rounded-[15px 15px 0 0]">
                        <th>#</th>
                        <th className="font-cinzel font-semibold text-lg text-white">User Email</th>
                        <th className="font-cinzel font-semibold text-lg text-white">Booking Amount</th>
                        <th className="font-cinzel font-semibold text-lg text-white">Booking Date & Time</th>
                        <th className="font-cinzel font-semibold text-lg text-white">Activity</th>
                        <th className="font-cinzel font-semibold text-lg text-white">Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payments.map((item, index) => <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <h3 className="font-roboto font-normal text-base">{item?.email}</h3>
                            </td>
                            <td>
                                <h3 className=" font-roboto font-normal text-base">{item?.Amount}</h3>
                            </td>
                            <td>
                                <h3 className=" font-roboto font-normal text-base">{item?.date}</h3>
                            </td>
                            <td>
                                <h3 onClick={()=>handlePayment(item)} className=" font-roboto font-normal text-base">{item?.status}</h3>
                            </td>
                            <td>
                              {item.status==='pending' ?   <h3 className=" font-roboto font-normal text-base w-8 h-8 flex justify-center items-center rounded-full bg-[#80E2B7]"> 
                                    <MdDone className="text-white"></MdDone>
                                </h3> : <h3 className=" font-roboto font-normal text-base w-8 h-8 flex justify-center items-center rounded-full bg-[#287855]">
                                    <MdDone className="text-white"></MdDone>
                                </h3> 
}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageBookings;