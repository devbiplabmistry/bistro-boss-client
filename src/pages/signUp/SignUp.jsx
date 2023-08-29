
import { Helmet } from 'react-helmet';
import image from "../../assets/others/authentication2.png"
import { BiLogoGoogle } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { authContext } from '../../providers/authProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
const SignUp = () => {
  const navigate = useNavigate()
  const { signUp } = useContext(authContext);
  const { register, handleSubmit, formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signUp(data.email, data.password)
      .then((result) => {
        const user = result.user;

        updateProfile(user, {
          displayName: `${data.name}`,
        })
          .then(() => {

          })
          .catch((error) => {
            console.log(error);
          });
console.log(user);
        if (user) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Thanks you for register !!',
            showConfirmButton: false,
            timer: 1500
          })
        }
        navigate("/")
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage) {
          Swal.fire({
            title: `${errorMessage}`,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        }
      });
  }
  return (
    <>
      <div>
        <Helmet>
          <title>Bistro Boss || SignUp</title>
        </Helmet>
        <div className="hero min-h-screen" >
          <div className="hero-content flex flex-row-reverse">
            <div className="text-center lg:text-left">
              <img src={image} alt="" className='w-[500px]' />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-inter font-semibold text-xl">Name*</span>
                  </label>
                  <input type="text" {...register("name", { required: true })}
                    name='name' placeholder="type here" className="input input-bordered" />
                  {errors.name && <span className='font-inter font-medium text-xl text-red-600'>Name is required</span>}

                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-inter font-semibold text-xl">Email*</span>
                  </label>
                  <input type="email" name='email' {...register("email", { required: true })} placeholder="type here" className="input input-bordered" />
                  {errors.name && <span className='font-inter font-medium text-xl text-red-600'>Email is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-inter font-semibold text-xl">Password*</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,
                        message: "Must have an uppercase and lowercase combination",
                      },
                      minLength: {
                        value: 6,
                        message: "Password length must be at least 6 characters",
                      },
                      maxLength: {
                        value: 12,
                        message: "Password length must not exceed 12 characters",
                      },
                    })}
                    placeholder="Enter your password"
                    className="input input-bordered"
                  />

                  {errors.password && (
                    <span className='font-inter font-medium text-xl text-red-600'>
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <div className="form-control mt-6">
                  <button type='submit' className="btn font-inter font-bold text-xl bg-[rgba(209,159,84,0.7)] text-white ">signup</button>
                </div>
              </form>
              <p className='mx-auto pb-6 capitalize'><small className='font-inter font-normal text-xl text-[#D1A054]'>Already registered ?<Link to="/login"> go to login</Link> </small></p>
              <p className='mx-auto pb-4'><small className='font-inter font-normal text-xl'>or Sign In With</small></p>
              <small className='mx-auto mb-11'>
                <BiLogoGoogle className='text-5xl'></BiLogoGoogle>
              </small>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default SignUp;