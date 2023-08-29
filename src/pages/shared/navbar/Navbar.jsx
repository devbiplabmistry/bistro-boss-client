
import { useContext } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { authContext } from '../../../providers/authProvider';
import Swal from 'sweetalert2';
const Navbar = () => {
    const { user, loading, logout } = useContext(authContext)

    if (loading) {
        return <span className="loading loading-spinner text-error"></span>
    }
    const handleLogOut = () => {
        logout()
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You Log out successfully !!',
            showConfirmButton: false,
            timer: 1500
          })
    }
    

    return (
        <>
            <div className='absolute w-full z-40'>
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li className="uppercase font-inter text-lg font-extrabold hover:text-red-500"><a>home</a></li>
                                <li className="uppercase font-inter text-lg font-extrabold"><a className="hover:text-[#EEFF25] text-white">contact us</a></li>
                                <li className="uppercase font-inter text-lg font-extrabold"><a className="hover:text-[#EEFF25] text-white">contact us</a></li>
                                <li className="uppercase font-inter text-lg font-extrabold"><a className="hover:text-[#EEFF25] text-white">dashboard</a></li>
                                <li className="uppercase font-inter text-lg font-extrabold"><Link to="/menu" className="hover:text-[#EEFF25] text-white">our menu</Link></li>
                                <li className="uppercase font-inter text-lg font-extrabold"><Link to="/shop" className="hover:text-[#EEFF25] text-white">our shop</Link></li>
                                <li className='text-white'>
                                    <BsFillCartFill className='text-xl'></BsFillCartFill>
                                    <div className="badge badge-secondary">+0</div>
                                </li>

                                {user ? <li className="uppercase font-inter text-lg font-extrabold"><Link onClick={handleLogOut} className="hover:text-[#EEFF25] text-white">logout</Link></li> :
                                    <li className="uppercase font-inter text-lg font-extrabold"><Link to="/login" className="hover:text-[#EEFF25] text-white">signin</Link></li>
                                }
                            </ul>
                        </div>
                        <a className="btn btn-ghost font-cinzel font-black text-3xl text-white">BISTRO BOSS</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li className="uppercase font-inter text-lg font-extrabold"><Link to="/" className="hover:text-[#EEFF25] text-white">home</Link></li>
                            <li className="uppercase font-inter text-lg font-extrabold"><Link to="/contact" className="hover:text-[#EEFF25] text-white">contact us</Link></li>
                            <li className="uppercase font-inter text-lg font-extrabold"><Link to="/secret" className="hover:text-[#EEFF25] text-white">dashboard</Link></li>
                            <li className="uppercase font-inter text-lg font-extrabold"><Link to="/menu" className="hover:text-[#EEFF25] text-white">our menu</Link></li>
                            <li className="uppercase font-inter text-lg font-extrabold"><Link to="/shop/salad" className="hover:text-[#EEFF25] text-white">our shop</Link></li>
                            <button >
                                <BsFillCartFill className='text-4xl text-white'></BsFillCartFill>
                                <div className="badge badge-secondary text-white">+0</div>
                            </button>

                            {user ? <li  className="uppercase font-inter text-lg font-extrabold"><Link onClick={handleLogOut} className="hover:text-[#EEFF25] text-white mr-12">logout</Link></li> :

                                <li className="uppercase font-inter text-lg font-extrabold ">
                                    <Link to="/login" className="hover:text-[#EEFF25] text-white"><BsPersonCircle className='text-white mr-12 text-4xl'></BsPersonCircle></Link>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Navbar;