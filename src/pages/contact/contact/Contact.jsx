import Cover from "../../../assets/components/cover/Cover";
import banner from "../../../assets/contact/banner.jpg"
import CommonTitle from "../../shared/commonTitle/CommonTitle";
import { AiFillPhone } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { AiFillClockCircle } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <Cover featuredImg={banner} title="CONTACT US" subTitle="WOULD YOU LIKE TO TRY A DISH ?"></Cover>
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
            <CommonTitle subTitle="---Send Us a Message---" title="CONTACT FORM"></CommonTitle>
            <div className="mt-12">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content">
                        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="flex gap-8">
                                    <div>
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text font-inter font-semibold text-xl">Name*</span>
                                            </label>
                                            <input type="text" placeholder="Enter Your Name" className="input input-bordered" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text font-inter font-semibold text-xl">Email*</span>
                                            </label>
                                            <input type="text" placeholder="Enter Your Email" className="input input-bordered" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-inter font-semibold text-xl">Phone*</span>
                                    </label>
                                    <input type="text" placeholder="Enter Your Phone Number" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-inter font-semibold text-xl">Message*</span>
                                    </label>
                                    <textarea className="p-4" name="message" id="" cols="5" rows="5" placeholder="Write your message here"></textarea>
                                </div>
                                <div className="form-control mt-6 mx-auto">
                                    <button className="btn font-inter font-semibold text-xl  px-5 bg-gradient-to-r from-cyan-500 to-blue-500">Send Message
                                    <FaTelegramPlane></FaTelegramPlane>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;