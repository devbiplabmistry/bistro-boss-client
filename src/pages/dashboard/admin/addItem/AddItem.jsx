import { useForm } from "react-hook-form";
import CommonTitle from "../../../shared/commonTitle/CommonTitle";
import { ImSpoonKnife } from "react-icons/im";
import useAxios from "../../../../assets/components/hooks/useAxios";
import { useContext } from "react";
import { authContext } from "../../../../providers/authProvider";
import Swal from "sweetalert2";


const AddItem = () => {
    const { user } = useContext(authContext)
    const [instance] = useAxios()
    const image_token = import.meta.env.VITE_image_token
    const image_url = `https://api.imgbb.com/1/upload?key=${image_token}`
    const { register, handleSubmit, reset } = useForm()


    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append("image", data.image[0]);
        const res = await fetch(image_url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(response => {
                data.images= response.data.display_url
                instance.post(`/addItem?email=${user?.email}`, { name: data?.name, recipe: data?.recipe, image: data?.images, category: data?.category, price: data?.price })
                .then(res=>{
                    reset()
                    if(res.data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${res.data.name} added sucessfully`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                })
            })

    }
    return (
        <div>
            <CommonTitle subTitle="---What's new?---" title="ADD AN ITEM"></CommonTitle>

            <div className="hero min-h-screen  flex justify-center items-center mt-20 ">
                <div className="hero-content  flex-col lg:flex-row-reverse px-32 ">
                    <form onSubmit={handleSubmit(onSubmit)} className="card bg-base-200 overflow-x-hidden">
                        <div className="card-body">
                            <div className="form-control lg:w-[600px]">
                                <label className="label">
                                    <span className="label-text font-inter font-semibold text-xl ">Name*</span>
                                </label>
                                <input type="text" {...register("Name")} placeholder="name" className="input input-bordered " />
                            </div>
                            <div className="form-control lg:w-[600px]">
                                <label className="label">
                                    <span className="label-text font-inter font-semibold text-xl ">Recipe*</span>
                                </label>
                                <input type="text" {...register("recipe")} placeholder="recipe" className="input input-bordered " />
                            </div>

                            <div className="form-control lg:w-[600px] ">
                                <label className="label">
                                    <span className="label-text font-inter font-semibold text-xl ">Category*</span>
                                </label>
                                <select name="category" id="" {...register("category")}>
                                    <option value="pizza">Please select</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="salad">Salad</option>
                                    <option value="drinks">Drinks</option>
                                    <option value="soup">Soup</option>
                                </select>
                            </div>
                            <div className="form-control lg:w-[600px]">
                                <label className="label">
                                    <span className="label-text font-inter font-semibold text-xl ">Price*</span>
                                </label>
                                <input type="text" {...register("price")} placeholder="price" className="input input-bordered " />
                            </div>

                            <div className="form-control lg:w-[600px]">
                                <label className="label">
                                    <span className="label-text font-inter font-semibold text-xl ">image*</span>
                                </label>
                                <input type="file" name="image" id=""  {...register("image")} />
                            </div>
                            <div className=" mt-6">
                                <button className="btn flex gap-2 items-center font-inter font-bold text-xl text-white capitalize bg-gradient-to-r from-[#835D23] to-[#B58130] " type="submit">Add Item <ImSpoonKnife></ImSpoonKnife></button>
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

export default AddItem;