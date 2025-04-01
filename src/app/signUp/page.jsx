import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import SignUpForm from "./components/SignUpForm";
import SocialLogin from "../signIn/components/SocialLogin";


const SignUp = () => {
    
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 w-full '>
                <img src="/assets/images/login/login.svg" alt="logo" />
            </div>
            <div className='border-2 rounded-lg border-gray-400 p-16 md:w-1/2 w-full '>
                <h2 className='md:text-4xl font-bold text-center mb-4 md:mb-10'>Sign UP</h2>
                <SignUpForm></SignUpForm>
                <p className="text-lg my-5 text-center font-medium">Or Sign Up with</p>
                <SocialLogin></SocialLogin>
                <p className="text-center text-sm font-semibold mt-7 text-gray-600">Already have an account? <Link className="text-red-500" href="/signIn">SignIn</Link></p>
            </div>
        </div>
    );
};

export default SignUp;