import { BsTrash } from "react-icons/bs";
import useCart from "../../../assets/components/hooks/useCart";
import CommonTitle from "../../shared/commonTitle/CommonTitle";
import Swal from "sweetalert2";

const Cart = () => {
    const [cart, refetch] = useCart()
    const token = localStorage.getItem('access-token')
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    const handleDelete = (item) => {
        Swal.fire({
            title: `Do you want Delete ${item?.name}?`,
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${item._id}?email=${item?.email}`, {
                    method: "delete",
                    headers: {
                        authorization: `bearer ${token}`
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
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
        <div className="ml-8 w-full">
            <CommonTitle subTitle="---My Cart---" title="WANNA ADD MORE?"></CommonTitle>
            <div className="flex gap-8 mb-10 mt-28 justify-center justify-between">
                <h3 className="font-cinzel font-bold text-3xl">Total order: {cart.length}</h3>
                <h3 className="font-cinzel font-bold text-3xl">Total price: ${price}</h3>
                <h3 className="font-cinzel text-white font-bold py-3 px-4 rounded bg-[#D1A054] flex items-center">Pay</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="bg-[#D1A054] rounded-[15px 15px 0 0]">
                            <th>#</th>
                            <th className="font-cinzel font-semibold text-lg text-white">Item Image</th>
                            <th className="font-cinzel font-semibold text-lg text-white">Item Name</th>
                            <th className="font-cinzel font-semibold text-lg text-white">Price</th>
                            <th className="font-cinzel font-semibold text-lg text-white">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h3 className="font-roboto font-normal text-base">{item.name}</h3>
                                </td>
                                <td>
                                    <h3 className=" font-roboto font-normal text-base">{item.price}</h3>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-error"><BsTrash className="text-white "></BsTrash></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;