
import { Helmet } from 'react-helmet';
import image from '../../assets/others/authentication1.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiLogoGoogle } from 'react-icons/bi';
import { useContext } from 'react';
import { authContext } from '../../providers/authProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxios from '../../assets/components/hooks/useAxios';


const Login = () => {
    // const { login, googleSignIn } = useContext(authContext)
    const { login, googleSignIn, user } = useContext(authContext)
    console.log(user);
    const navigate = useNavigate();
    const location = useLocation()
    const [instance] = useAxios()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const from = location.state?.from?.pathname || "/";
    // console.log(from);
    const onSubmit = (data) => {
        // console.log(data);
        login(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Welcome ${user?.displayName} `,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

                navigate(from, { replace: true });

            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
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

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
            })
            .catch((error) => {
                console.log(error);

            });
        navigate("/")

    }
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <div className="hero min-h-screen" >
                <div className="hero-content flex ">
                    <div className="text-center lg:text-left">
                        <img src={image} alt="" className='w-[500px]' />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-inter font-semibold text-xl">Email</span>
                                </label>
                                <input type="email" name='name' {...register("email", { required: true })} placeholder="type here" className="input input-bordered w-full" />
                                {errors.name && <span className='font-inter font-medium text-xl text-red-600'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-inter font-semibold text-xl">Password</span>
                                </label>
                                <input type="password" name='password' {...register("password", { required: true })} placeholder="Enter your password" className="input input-bordered w-full" />
                                {errors.password && <span className='font-inter font-medium text-xl text-red-600'>password is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn font-inter font-bold text-xl bg-[rgba(209,159,84,0.7)] text-white ">Login</button>
                            </div>
                        </form>
                        <p className='mx-auto pb-6 capitalize'><small className='font-inter font-normal text-xl text-[#D1A054]'>new here ? <Link to="/signUp">create new account</Link> </small></p>
                        <p className='mx-auto pb-4'><small className='font-inter font-normal text-xl'>or Sign In With</small></p>
                        <small onClick={handleGoogleSignIn} className='mx-auto mb-11'>
                            <BiLogoGoogle className='text-5xl'></BiLogoGoogle>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
