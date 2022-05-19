import Link from 'next/link'
import React from 'react'

function login() {
    return (
        <div className="flex  justify-center">
            <div className="flex flex-col w-full lg:w-2/5 items-center py-10 h-full">
                <div className="flex flex-col mb-10">
                    <h1 className="text-white text-center text-4xl font-bold">Coocktail</h1>
                    <span className="text-white text-center text-sm mt-2 uppercase">Sign-in to listen</span>
                </div>
                <div className="flex flex-col space-y-5  w-full px-5 lg:w-[400px]">
                    <input type="email" id="default-email" className=" p-2.5  text-sm text-white bg-black rounded-lg border-2 border-white/20 focus:outline-none focus:border-green-500" placeholder="Email address" required />
                    <input type="password" id="default-password" className=" p-2.5  text-sm text-white bg-black rounded-lg border-2 border-white/20 focus:outline-none focus:border-green-500" placeholder="Your Password" required />
                    <button type="button" className="text-black bg-green-500 hover:bg-green-600 focus:outline-none rounded-full text-md uppercase font-bold px-5 py-3 text-center ">Log in</button>
                    <Link href="register">
                        <a className="text-center text-white font-bold text-lg">
                            Don't have account?
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default login
