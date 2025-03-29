"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const { data: session, status } = useSession()

    const links = <>
        <li><Link href={'/'}>Home</Link ></li>
        <li><Link href={'/about'}>About</Link ></li>
        <li><Link href={'/services'}>Services</Link ></li>
        <li><Link href={'/blog'}>Blog</Link ></li>
        <li><Link href={'/contacts'}>Contacts</Link ></li>
    </>

    return (
        <div className="navbar py-12 lg:max-w-[1300px] md:w-[90%] mx-auto px-6 md:px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link href={'/'} className="">
                    <img src="/assets/logo.svg" className='w-[100px] h-[87px]' alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <ul className='menu menu-horizontal px-1'>
                    {status === 'authenticated' ?
                        <><li className='mr-2.5 px-3 py-[6px] transition-colors delay-75 rounded hover:bg-gray-200 cursor-pointer ' onClick={() => signOut()}>SignOut</li></> :
                        <>
                            <li><Link href={'/signIn'}>SignIn</Link ></li>
                            <li><Link href={'/signUp'}>SignUp</Link ></li>
                        </>
                    }

                </ul>
                <a className="btn hover:bg-[#FF3811] hover:text-white border-[#FF3811] border-2">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;