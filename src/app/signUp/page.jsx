import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import SignUpForm from "./components/SignUpForm";


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
                <div className="flex justify-center items-center gap-3">
                    <button className="btn btn-circle btn-lg"><svg className="rounded-full" aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg></button>
                    <button className="btn btn-circle btn-lg">
                        <FaFacebookF className="text-blue-700" />
                    </button>
                    <button className="btn btn-circle btn-lg">
                        <TiSocialLinkedin className="text-blue-700"/>
                    </button>
                </div>
                <p className="text-center text-sm font-semibold mt-7 text-gray-600">Already have an account? <Link className="text-red-500" href="/signIn">SignIn</Link></p>
            </div>
        </div>
    );
};

export default SignUp;