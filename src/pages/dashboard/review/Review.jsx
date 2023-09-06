import { FaRegPaperPlane } from "react-icons/fa";
import CommonTitle from "../../shared/commonTitle/CommonTitle";
import { Rating } from "@smastrom/react-rating";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { authContext } from "../../../providers/authProvider";
import useAxios from "../../../assets/components/hooks/useAxios";


const Review = () => {
    const [rating, setRating] = useState(3);
    const { user } = useContext(authContext)
    const { email } = user;
    const { register, handleSubmit, reset } = useForm()
    const [instance] = useAxios()
    console.log(instance);
    const onSubmit = (data) => {
        const { name, details } = data;
        const reviews = { name, details, rating, email };
        
        instance.post('/reviews', { reviews }) 
            .then(response => {
                if (response.data && response.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Thanks for feedback !!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset();
                } else {
                    // Handle the case where 'insertedId' is not present in the response
                    console.error("Unexpected response:", response);
                }
            })
            .catch(error => {
                // Handle any errors that occur during the POST request
                console.error("Error submitting review:", error);
            });
    };
    
    return (
        <div >
            <CommonTitle subTitle="---Sharing is Caring!!!---" title="GIVE A REVIEW..."></CommonTitle>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content  flex-col lg:flex-row-reverse px-32">
                    <form onSubmit={handleSubmit(onSubmit)} className="card ">
                        <div className="text-center">
                            <h3 className="font-cinzel font-medium text-3xl">Rate Us</h3>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rating}
                                onChange={setRating}
                                className="mx-auto my-10"
                            />
                        </div>
                        <div className="card-body">
                            <div className="form-control lg:w-[600px]">
                                <label className="label">
                                    <span className="label-text font-inter font-semibold text-xl ">Your Name *</span>
                                </label>
                                <input type="text" required {...register("name")} placeholder="recipe you like most" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control lg:w-[600px]">
                                <label className="label">
                                    <span className="label-text font-inter font-semibold text-xl ">Which recipe you like most ?</span>
                                </label>
                                <input type="text" {...register("recipe")} placeholder="recipe you like most" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control lg:w-[600px]">
                                <label className="label">
                                    <span className="label-text font-inter font-semibold text-xl ">Do you have any suggestion for us?</span>
                                </label>
                                <input type="text" {...register("suggestion")} placeholder="suggestion" className="input input-bordered" />
                            </div>
                            <div className="form-control lg:w-[600px]">
                                <label className="label">
                                    <span className="label-text font-inter font-semibold text-xl ">Kindly express your care in a short way.*</span>
                                </label>
                                <textarea required {...register("details")} className="p-4" name="details" id="review" cols="5" rows="5" placeholder="Review in details"></textarea>
                            </div>
                            <div className=" mt-6">
                                <button className="btn flex gap-2 items-center font-inter font-bold text-xl text-white capitalize bg-gradient-to-r from-[#835D23] to-[#B58130] inline-block " type="submit">Send Review <FaRegPaperPlane></FaRegPaperPlane></button>
                            </div>
                            <div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;