import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./header.css"
import { useContext, useState } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
    const {user, logOut} =useContext(AuthContext);
    const [navbers, setNavbers] = useState(false);

    const changebackground=()=>{
        if(window.scrollY >= 80){
            setNavbers(true);
        }else{
            setNavbers(false)
        }
    };
    window.addEventListener('scroll', changebackground);
    const menu = <>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/classes"><li>Classes</li></NavLink>
        <NavLink to="/trainer"><li>Trainer</li></NavLink>
        <NavLink to="/gallery"><li>Gallery</li></NavLink>
        <NavLink to="/forum"><li>Forum</li></NavLink>
        <NavLink to="/about"><li>About Us</li></NavLink>
    </>

const handelLogOut=()=>{
    logOut()
    .then(()=>{
        toast.success('Log out success');
    })
    .catch(error=>{
        console.log(error);
    })
}
    return (
        <section className={navbers ? "fixed z-10 w-full pt-2 bg-black" : "fixed z-10 w-full pt-2 bg-transparent" }>
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn text-white btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#141B22] rounded-box w-52">
                            {
                                menu
                            }
                        </ul>
                    </div>
                    <Link><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-x-8 text-lg">
                        {
                            menu
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                        <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#141B22] rounded-box w-52">
                            <li>
                                <a className="uppercase">{user.displayName}</a>
                            </li>
                            <li><Link to="/dashboard">Dashboard</Link> </li>
                            <li><a onClick={handelLogOut}>Logout</a></li>
                        </ul>
                    </div>
                    :
                    <Link to="/login"><button id="path" className="text-white bg-[#FF000A] hover:bg-[#FF000A] px-8 py-3">Login</button></Link>

                    }
                    
                  

                </div>
            </div>
        </section>
    );
};

export default Header;