import Link from 'next/link'
import React from 'react'

function register() {
    return (
        <div className="flex  justify-center">
            <div className="flex flex-col w-full lg:w-2/5 items-center py-10 h-full">
                <div className="flex flex-col mb-10">
                    <h1 className="text-white text-center text-4xl font-bold">Coocktail</h1>
                    <span className="text-white text-center text-sm mt-2 uppercase">Sign-up to listen</span>
                </div>
                <div className="flex flex-col space-y-5  w-full px-5 lg:w-[400px]">
                    <div className="lex">
                        <h1 className="text-white/50 mb-2 text-md">Email address</h1>
                        <input type="email" id="default-email" className=" p-2.5 w-full text-sm text-white bg-black rounded-lg border-2 border-white/20 focus:outline-none focus:border-green-500" placeholder="Email address" required />
                    </div>
                    <div className="lex">
                        <h1 className="text-white/50 mb-2 text-md">Create your username</h1>
                        <input type="text" id="default-username" className=" p-2.5 w-full text-sm text-white bg-black rounded-lg border-2 border-white/20 focus:outline-none focus:border-green-500" placeholder="Username" required />
                    </div>
                    <div className="lex">
                        <h1 className="text-white/50 mb-2 text-md">Create your Password</h1>
                        <input type="password" id="default-password" className=" p-2.5 w-full text-sm text-white bg-black rounded-lg border-2 border-white/20 focus:outline-none focus:border-green-500" placeholder="Create your Password" required />
                    </div>
                    <div className="lex">
                        <h1 className="text-white/50 mb-2 text-md">Confirm your Password</h1>
                        <input type="password" id="default-confirm-password" className=" p-2.5 w-full text-sm text-white bg-black rounded-lg border-2 border-white/20 focus:outline-none focus:border-green-500" placeholder="Confirm your Password" required />
                    </div>
                    <div className="lex">
                        <h1 className="text-white/50 mb-2 text-md">Bridth day</h1>
                        <div className="flex space-x-2">
                            <input type="text" id="default-date" className=" p-2.5 w-full text-sm text-white bg-black rounded-lg border-2 border-white/20 focus:outline-none focus:border-green-500" placeholder="DD" required />
                            <input type="text" id="default-month" className=" p-2.5 w-full text-sm text-white bg-black rounded-lg border-2 border-white/20 focus:outline-none focus:border-green-500" placeholder="Month" required />
                            <input type="text" id="default-year" className=" p-2.5 w-full text-sm text-white bg-black rounded-lg border-2 border-white/20 focus:outline-none focus:border-green-500" placeholder="YYY" required />
                        </div>
                    </div>
                    <button type="button" className="text-black bg-green-500 hover:bg-green-600 focus:outline-none rounded-full text-md uppercase font-bold px-5 py-3 text-center ">Register</button>
                    <Link href="/login">
                        <a className="text-center text-white font-bold text-lg">
                            have account?
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default register
