import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

function SideMore() {
    const [openLyrics, setOpenLyrics] = useState(false)
    const subMenuAnimate = {
        enter: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.2
            },
            display: "block"
        },
        exit: {
            opacity: 0,
            x: 20,
            transition: {
                duration: 0.5,
                delay: 0.3
            },
            transitionEnd: {
                display: "none"
            }
        }
    };
    return (
        <div className="h-screen  flex py-5 justify-between flex-col w-16 bg-[#151515] border-l border-[#252525]">
            <div className="flex  space-y-2 flex-col items-center">
                <a href="#" className="p-2 hover:bg-white/5 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z" fill="rgba(255,255,255,1)" /></svg>
                </a>
                <div className="flex relative ">
                    <motion.button onClick={() => setOpenLyrics(!openLyrics)} whileTap={{ scale: 1.2 }} className="hover:bg-white/5 p-2 rounded-full  flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12.684 4.029a8 8 0 1 0 7.287 7.287 7.936 7.936 0 0 0-.603-2.44l1.5-1.502A9.933 9.933 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a9.982 9.982 0 0 1 4.626 1.132l-1.501 1.5a7.941 7.941 0 0 0-2.44-.603zM20.485 2.1L21.9 3.515l-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z" fill="rgba(255,255,255,1)" /></svg>
                    </motion.button>
                    {openLyrics ? <motion.div
                        initial="exit"
                        animate={openLyrics ? "enter" : "exit"}
                        variants={subMenuAnimate}
                        className={`flex transition ease-in-out delay-150 flex-col  pb-5 right-[70px] top-[55px] absolute bg-green-500  w-[300px] max:h-[350px] rounded-lg`}>
                        <div className="flex items-center justify-between w-full p-3 py-2 ">
                            <h1 className="text-white font-bold text-lg">Lyrics</h1>
                            <motion.button whileTap={{ scale: 1.2 }} className="hover:bg-white/5 p-2 rounded-full  flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M12.684 4.029a8 8 0 1 0 7.287 7.287 7.936 7.936 0 0 0-.603-2.44l1.5-1.502A9.933 9.933 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a9.982 9.982 0 0 1 4.626 1.132l-1.501 1.5a7.941 7.941 0 0 0-2.44-.603zM20.485 2.1L21.9 3.515l-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z" fill="rgba(255,255,255,1)" /></svg>
                            </motion.button>
                        </div>
                        <div className="flex flex-col p-3   w-full h-full">
                            <h1 className="text-black mb-2 font-bold text-lg">
                                Seharian aku tak tenang
                                Seperti orang kebingungan
                                Pikiranku tak karuan
                                Khawatirkan kamu di sana</h1>

                            <h1 className="text-black/50 font-bold text-lg">
                                Seharian aku tak tenang
                                Seperti orang kebingungan
                                Pikiranku tak karuan
                                Khawatirkan kamu di sana</h1>
                        </div>
                    </motion.div> : null}
                </div>
                <Link href="/collection/tracks">
                    <a href="#" className="p-2 hover:bg-white/5 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z" /><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" fill="rgba(255,255,255,0.5)" /></svg>
                    </a>
                </Link>
            </div>
            <div className="flex space-y-2 flex-col items-center">
                <button className="p-2 hover:bg-white/5 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="rgba(255,255,255,1)" /></svg>                </button>
                <button className="p-2 hover:bg-white/5 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" fill="rgba(255,255,255,1)" /></svg>
                </button>
                <a href="#" className="p-2 hover:bg-white/5 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="rgba(255,255,255,1)" /></svg>          </a>
                <Link href="/user/12">
                    <a className="p-2 hover:bg-white/5 rounded-full">
                        <img className="w-10 h-10 rounded-full" src="/cover/dummy1.jpg" alt="Rounded avatar" />
                    </a>
                </Link>
            </div>
        </div>

    )
}

export default SideMore
