
import useMenu from "../../../../assets/components/hooks/useMenu";
import CommonTitle from "../../../shared/commonTitle/CommonTitle";
import { BsFillTrashFill, } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import useAxios from "../../../../assets/components/hooks/useAxios";
import useCart from "../../../../assets/components/hooks/useCart";
import Swal from "sweetalert2";

const ManageItems = () => {
    const [,refetch] = useCart()
    const menu = useMenu()
    const [instance] = useAxios()
    
    const handleDelete = (item) => {
        Swal.fire({
            title: `is ${item.name} Delete?`,
            showCancelButton: true,
        })
        .then((result) => {
            if (result.isConfirmed) {
                instance.delete(`/menu/${item._id}`)
                    .then(res => {  
                        if (res.data.deletedCount>0) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: `${item.Name} deleted sucessfull !!`,
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                     
                    })
                    refetch()
            }
        })

    }
    return (
        <div>
            <div className="w-full   ml-8 ">
                <CommonTitle subTitle="---How many??---" title="MANAGE ALL USERS"></CommonTitle>
                <h3 className="font-cinzel font-bold text-3xl mt-16 mb-4">Total items: {menu?.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className="bg-[#D1A054]">
                            <tr>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item?.name}</td>
                                    <td>{item?.price}</td>
                                    <td>
                                        <button className="btn btn-ghost btn-xs bg-[#D1A054]">
                                            <Link to={`/dashboard/update/${item._id}`}>
                                                <BiEdit className="text-base" />
                                            </Link>
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-xs bg-[#D1A054]">
                                            <Link><BsFillTrashFill className="text-base text-red-500"></BsFillTrashFill></Link>
                                        </button>
                                    </td>
                                </tr>)

                            }

                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageItems;