"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
const SignInForm = () => {
    const router = useRouter()
    const handleSignIn = async (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        try {
            const response = await signIn("credentials", { email, password, callbackUrl: "/", redirect: false })
            if(response.ok) {
                router.push('/')
                form.reset()
            }
            else{
                alert('authentication failed')
            }
        } catch (error) {
            console.log(error);
            alert("Authentication failed")
        }
    }

    return (
        <form onSubmit={handleSignIn}>

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

export default SignInForm;