import { useContext } from "react";
import { authContext } from "../../../providers/authProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";


const ChefRecomanded = ({ menu }) => {
    const { user } = useContext(authContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = useCart()
    // console.log(refetch);

    const handleAddToCart = (item) => {
        if (user && user?.email) {
            const { _id, name, image, category, price } = item;
            const data = { itemId: _id, name, email: user.email, price, image, category };

            fetch(`http://localhost:5000/carts?email=${user.email}`, { // Make sure the URL is correctly formatted
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then(response => {
                    if (response.ok) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${name} added to cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                    else {
                        console.error('Failed to add item to cart');
                    }
                })
                .catch(error => {
                    console.error('Fetch error:', error);
                });
        }

        else {

            navigate("/login", { state: { from: location }, replace: true });
        }

    }
    return (
        <div className="grid grid-cols-3 gap-8 mt-12 mb-32">
            {
                menu.map(item => (
                    <div key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-inter font-semibold text-2xl">{item.name}</h2>
                            <p className="font-inter text-base font-normal">{item.recipe}</p>
                            <p className="font-inter text-base font-normal p-1 text-white bg-black absolute right-4 rounded-md top-3">{item.price}</p>
                            <div className="card-actions justify-center">
                                <button onClick={() => handleAddToCart(item)} className="btn btn-outline font-inter font text-xl text-[#BB8506] border-0 border-b-2">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ChefRecomanded;
