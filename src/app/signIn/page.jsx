import Link from 'next/link';
import React from 'react';
import SignInForm from './components/SignInForm';
import SocialLogin from './components/SocialLogin';

const SignIn = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 w-full '>
                <img src="/assets/images/login/login.svg" alt="hello" />
            </div>
            <div className='border-2 rounded-lg border-gray-400 p-16 md:w-1/2 w-full '>
                <h2 className='md:text-4xl font-bold text-center mb-4 md:mb-10'>Sign In</h2>
                <SignInForm></SignInForm>
                <p className="text-lg my-5 text-center font-medium">Or Sign Up with</p>
                <SocialLogin></SocialLogin>
                <p className="text-center text-sm font-semibold mt-7 text-gray-600">Already haven't an account? <Link className="text-red-500" href="/signUp">SignUp</Link></p>
            </div>
        </div>
    );
};

export default SignIn;