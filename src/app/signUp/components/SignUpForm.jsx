"use client"

import RegisterUser from "@/app/actions/auth/RegisterUser";

const SignUpForm = () => {
    const handleSignUp =async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const payload = {name, email, password};
        const result=  await RegisterUser(payload)
        console.log(result)
    }
    return (
        <form onSubmit={handleSignUp}>
            <div className='mb-5'>
                <label className='block text-gray-700 text-sm font-bold mb-4' >
                    Name
                </label>
                <input
                    className='border-2 border-gray-100  placeholder:text-gray-400 rounded-md w-full py-2 px-4 placeholder:text-sm'
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Your Name'
                    required
                />
            </div>
            <div className='mb-5'>
                <label className='block text-gray-700 text-sm font-bold mb-4' >
                    Email
                </label>
                <input
                    className='border-2 border-gray-100 placeholder:text-gray-400  rounded-md w-full py-2 px-4 placeholder:text-sm'
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Your Email'
                    required
                />
            </div>
            <div className='mb-5'>
                <label className='block text-gray-700 text-sm font-bold mb-4' >
                    Confirm Password
                </label>
                <input
                    className='border-2 border-gray-100 placeholder:text-gray-400  rounded-md w-full py-2 px-4 placeholder:text-sm'
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Your password'
                    required
                />
            </div>
            <button className='w-full cursor-pointer active:bg-[#ff1111] bg-[#FF3811] text-white rounded-lg py-4'>SignUp</button>
        </form>
    );
};

export default SignUpForm;