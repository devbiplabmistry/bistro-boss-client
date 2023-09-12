
import { useEffect, useState } from "react";
import useAxios from "../../../../assets/components/hooks/useAxios";
import CommonTitle from "../../../shared/commonTitle/CommonTitle";
import { BsTrash } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../../../assets/components/hooks/useCart";


const AllUsers = () => {
    const [, refetch] = useCart()
    const [users, setUsers] = useState([])
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

    const handleDelete = (item) => {
        Swal.fire({
            title: `Do you want to Delete ${item.name}?`,
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                instance.delete(`/user/${item._id}`)
                    .then(res => {
                        refetch()
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: `${item.name} deleted Sucessfully !!`,
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            }
        })

    }
    return (
        <div className="w-full   ml-8 ">
            <CommonTitle subTitle="---How many??---" title="MANAGE ALL USERS"></CommonTitle>
            <h3 className="font-cinzel font-bold text-3xl mt-16 mb-4">Total users:</h3>
            <table className="table">
                <thead>
                    <tr className="bg-[#D1A054] rounded-[15px 15px 0 0]">
                        <th>#</th>
                        <th className="font-cinzel font-semibold text-lg text-white">Name</th>
                        <th className="font-cinzel font-semibold text-lg text-white">Email</th>
                        <th className="font-cinzel font-semibold text-lg text-white">Roll</th>
                        <th className="font-cinzel font-semibold text-lg text-white">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) => <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <h3 className="font-roboto font-normal text-base">{item?.name}</h3>
                            </td>
                            <td>
                                <h3 className=" font-roboto font-normal text-base">{item?.email}</h3>
                            </td>
                            <td>
                                <h3 className=" font-roboto font-normal rounded-lg flex justify-center items-center text-base w-8 h-8 bg-[#D1A054]">{
                                    item?.roll == "user" && <FaUsers className="text-lg text-white"></FaUsers>
                                }</h3>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(item)} className="btn btn-error"><BsTrash className="text-white "></BsTrash></button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;