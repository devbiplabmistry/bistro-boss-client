
import { AiFillClockCircle, AiFillPhone } from "react-icons/ai";
import CommonTitle from "../../shared/commonTitle/CommonTitle";
import { TbBrandBooking } from 'react-icons/tb';
import { BiMap } from "react-icons/bi";
import { useForm } from "react-hook-form";
import useAxios from "../../../assets/components/hooks/useAxios";
import Swal from "sweetalert2";
import { useContext } from "react";
import { authContext } from "../../../providers/authProvider";

const BookTable = () => {
    const { register, handleSubmit, reset } = useForm()
    const [instance]=useAxios()
    const {user}=useContext(authContext)
    const onSubmit = (data) => {
        // console.log(data);
        instance.post('/booking',{data})
        .then(Res=>{
            console.log(Res.data);
            if(Res.data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thanks for Booking !!',
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            }
        })

    }
    return (
        <div>
            <CommonTitle subTitle="---Reservation---" title="BOOK A TABLE"></CommonTitle>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body grid grid-cols-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-inter font-semibold text-xl">Date*</span>
                                    </label>
                                    <input required type="date" {...register("date")} placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-inter font-semibold text-xl">Time*</span>
                                    </label>
                                    <input required type="time" {...register("time")} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-inter font-semibold text-xl">Guest*</span>
                                    </label>
                                    <select name="" id="" {...register("guest")}>
                                        <option value="">select</option>
                                        <option value="1">1 person</option>
                                        <option value="2">2 person</option>
                                        <option value="3">3 person</option>
                                        <option value="4">4 person</option>
                                        <option value="5">5 person</option>
                                        <option value="6">6 person</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-inter font-semibold text-xl">Name*</span>
                                    </label>
                                    <input defaultValue={user?.displayName} required type="text" {...register("name")} placeholder={user?.displayName} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-inter font-semibold text-xl">Phone*</span>
                                    </label>
                                    <input type="tel" {...register("phone")} placeholder="Your phone" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-inter font-semibold text-xl">Email*</span>
                                    </label>
                                    <input defaultValue={user?.email} required type="text" {...register("email")} placeholder={user?.email} className="input input-bordered" />
                                </div>
                            </div>

                            <button className="btn mx-auto flex gap-2 items-center font-inter font-bold text-xl text-white capitalize bg-gradient-to-r from-[#835D23] to-[#B58130] inline-block mb-20 " type="submit">Book a Table
                                <TbBrandBooking></TbBrandBooking>
                            </button>

                        </form>
                        <CommonTitle subTitle="---Visit Us---" title="OUR LOCATION"></CommonTitle>
                        <div className="wrapper flex justify-center items-center gap-4  mt-12 mb-32">
                            <div className="item border-2 relative  w-[360px] h-[240px] flex justify-center items-center">
                                <div className="iner-item py-[64px] px-[80px]  bg-slate-100 text-center">
                                    <h2 className="font-inter font-medium text-2xl">PHONE</h2>
                                    <h4 className="font-inter font-normal text-base">+38 (012) 34 56 789</h4>
                                </div>
                                <div className="icon absolute top-0 left-0  py-4 px-[163px] bg-[#D1A054]">
                                    <AiFillPhone className="text-3xl text-white"></AiFillPhone>
                                </div>
                            </div>
                            <div className="item border-2 relative  w-[360px] h-[240px] flex justify-center items-center">
                                <div className="iner-item py-[64px] px-[80px]  bg-slate-100 text-center">
                                    <h2 className="font-inter font-medium text-2xl">ADDRESS</h2>
                                    <h4 className="font-inter font-normal text-base">+38 (012) 34 56 789</h4>
                                </div>
                                <div className="icon absolute top-0 left-0  py-4 px-[163px] bg-[#D1A054]">
                                    <BiMap className="text-3xl text-white"></BiMap>
                                </div>
                            </div>
                            <div className="item border-2 relative  w-[360px] h-[240px] flex justify-center items-center">
                                <div className="iner-item py-[64px] px-[80px]  bg-slate-100 text-center">
                                    <h2 className="font-inter font-medium text-xl">WORKING HOURS</h2>
                                    <h4 className="font-inter font-normal text-base">Mon - Fri: 08:00 - 22:00</h4>
                                    <h4 className="font-inter font-normal text-base">sat - sun: 08:00 - 22:00</h4>
                                </div>
                                <div className="icon absolute top-0 left-0  py-4 px-[163px] bg-[#D1A054]">
                                    <AiFillClockCircle className="text-3xl text-white"></AiFillClockCircle>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookTable;