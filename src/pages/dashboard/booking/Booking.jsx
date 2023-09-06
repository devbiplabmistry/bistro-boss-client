import { useQuery } from "react-query";
import useAxios from "../../../assets/components/hooks/useAxios";
import CommonTitle from "../../shared/commonTitle/CommonTitle";
import { useContext } from "react";
import { authContext } from "../../../providers/authProvider";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";

const Booking = () => {
    const [instance] = useAxios();
    const { user } = useContext(authContext);

    const { data: bookings, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await instance.get(`/booking?email=${user.email}`);
            return res.data;
        }
    });


    const handleDelete = (item) => {
        Swal.fire({
            title: `Delete your Booking?`,
            showCancelButton: true,
            confirmButtonText: 'Delete',
        })
            .then(result => {
                if (result.isConfirmed) {
                    instance.delete(`/booking/${item._id}`)
                        .then(data => {
                            refetch()
                            if (data?.data?.deletedCount > 0) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'you delete your Bookings',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                }
            })


    };


    return (
        <div>
            <CommonTitle subTitle="---Excellent Ambience---" title="MY BOOKINGS"></CommonTitle>
            <h3 className="mx-auto font-cinzel font-bold text-3xl my-9">Total Bookings: {bookings?.length}</h3>
            <div className="overflow-x-auto">
                <div className="overflow-x-auto">
                    {bookings ? (
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th className="font-cinzel font-semibold text-xl text-orange-600">Name</th>
                                    <th className="font-cinzel font-semibold text-xl text-orange-600">Email</th>
                                    <th className="font-cinzel font-semibold text-xl text-orange-600">Phone</th>
                                    <th className="font-cinzel font-semibold text-xl text-orange-600">Date</th>
                                    <th className="font-cinzel font-semibold text-xl text-orange-600">Time</th>
                                    <th className="font-cinzel font-semibold text-xl text-orange-600">Guest</th>
                                    <th className="font-cinzel font-semibold text-xl text-orange-600">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((item, index) => (
                                    <tr key={item._id}>
                                        <td className="font-inter font-normal text-xl">{index + 1}</td>
                                        <td className="font-inter font-normal text-xl">{item.name}</td>
                                        <td className="font-inter font-normal text-xl">{item?.email}</td>
                                        <td className="font-inter font-normal text-xl">{item.phone}</td>
                                        <td className="font-inter font-normal text-xl">{item.date}</td>
                                        <td className="font-inter font-normal text-xl">{item.time}</td>
                                        <td className="font-inter font-normal text-xl">{item.guest}</td>
                                        <td>
                                            <button onClick={() => handleDelete(item)} className="btn btn-error"><BsTrash className="text-white "></BsTrash></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            {/* foot */}
                        </table>
                    ) : (
                        <div>No Bookings available</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Booking;
