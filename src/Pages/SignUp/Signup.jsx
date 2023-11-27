import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { AuthContext } from "../../Authprovider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FaRegEyeSlash, FaRegEye, FaGoogle } from "react-icons/fa6";
import Title from "../../Component/Header/sheard/Title";


const Signup = () => {
    const { createUser, googleSignUp } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
    const heandelSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        const signUpUser = { name, email, photo, password };
        console.log(signUpUser);

        createUser(email, password)
            .then(result => {
                const signInuser = result.user;
                console.log(signInuser);

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo

                })
                    .then(() => {
                        console.log('profile update');
                    })
                    .catch(error => {
                        console.log(error);
                    })
                toast.success('sign Up success');
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            })
    }
    const googlelogin = () => {
        googleSignUp()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <section>
            <Helmet>
                <title>Job Box | create a account for job</title>
            </Helmet>
            <Title title="Create Your Account"></Title>
            <div className="bg-[#F5F7FC] py-10 relative">
                <div className="flex justify-center items-center gap-5 flex-col lg:flex-row">

                    <div className="shadow-2xl bg-base-100 rounded-lg pt-5 border-t-4 border-b-4 border-[#FF000A]">
                        <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                        <form onSubmit={heandelSignUp} className="card-body">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="your name" className="input input-bordered focus:border-[#FF000A] focus:outline-none" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered focus:border-[#FF000A] focus:outline-none" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="photo url" className="input input-bordered focus:border-[#FF000A] focus:outline-none" required />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>

                                    <input type={showPass ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered focus:border-[#FF000A] focus:outline-none" required />
                                    <span onClick={() => setShowPass(!showPass)} className="cursor-pointer absolute bottom-12 right-2">{
                                        showPass ?
                                            <FaRegEye></FaRegEye>
                                            :
                                            <FaRegEyeSlash></FaRegEyeSlash>

                                    }</span>

                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-[#FF000A] hover:bg-[#2D394B]">Sign Up</button>
                            </div>
                        </form>

                        <div className="text-center space-y-3">
                            <p className="text-lg">Or Continue with</p>
                            <i className="flex justify-center"><FaGoogle onClick={googlelogin} className="bg-[#FF000A] text-white rounded-full p-4 w-16 h-16 hover:bg-[#EA4335] cursor-pointer"></FaGoogle></i>
                        </div>
                        <p className="text-center pb-8 mt-3">Already have an account? <Link className="text-[#FF000A]" to="/login">Login</Link></p>
                    </div>
                </div>
                <img className="absolute right-0 bottom-0 w-[400px] hidden sm:hidden lg:block" src="https://i.ibb.co/qxPDp0H/login-image.png" alt="" />
            </div>
        
        </section>
    );
};

export default Signup;