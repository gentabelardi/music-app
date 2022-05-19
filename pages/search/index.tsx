import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import BottomPlayer from '../../components/molecules/BottomPlayer'
import Navbar from '../../components/molecules/Navbar'
import SideBar from '../../components/molecules/SideBar'
import SideMore from '../../components/molecules/SideMore'
const data = [1, 2, 3, 4, 5]
function index() {
    const [navbar, setNavbar] = useState(false)
    const [search, setSeacrh] = useState(true)

    const scroller = useRef<HTMLInputElement>(null);

    function handleScroll() {
        if (scroller.current != null) {
            if (scroller.current.scrollTop >= 68) {
                setNavbar(true)
            } else if (scroller.current.scrollTop < 68) {
                setNavbar(false)
            }
        }
    }
    useEffect(() => {
        if (scroller && scroller.current) {
            scroller.current.addEventListener("scroll", handleScroll, false);
            return function cleanup() {
                scroller.current?.removeEventListener("scroll", handleScroll, false);
            };
        }
    }, [])

    return (
        <div className=" flex">
            <SideBar />
            <div className=" relative flex-auto  ">
                <div ref={scroller} className="flex flex-col flex flex-col pb-32 h-screen  overflow-y-auto">
                    <Navbar type="search" background={navbar} />
                    <div className="flex flex-col my-5 mt-24">
                        {search ? <div className="grid p-5 py-3 grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
                            <div>
                                <div className="flex mb-5 items-center">
                                    <h1 className=" text-white font-bold text-xl capitalize">top result</h1>
                                </div>
                                <Link href="/artist/12">
                                    <motion.a animate={{ opacity: [0, 1], x: [-100, 0] }}
                                        transition={{ duration: 0.5 }}
                                        className="flex cursor-pointer group flex-col p-3 bg-white/5 hover:bg-white/10 rounded-md">
                                        <div className=" ">
                                            <img src={`/cover/dummy1.jpg`} className=" h-[150px] w-[150px] object-cover rounded-full" alt="" />
                                        </div>
                                        <div className="flex relative flex-col mt-3 pb-5">
                                            <div className="flex flex-col">
                                                <h1 className=" text-white font-bold text-2xl capitalize">Virgoun</h1>
                                                <span className=" text-white/50 font-medium text-sm">artist</span>
                                            </div>
                                            <motion.button whileTap={{ scale: 1.2 }}
                                                className="border-2 rounded-full hidden group-hover:block absolute bottom-3 right-3">
                                                <div className="flex  bg-white p-2 rounded-full">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" /></svg>
                                                </div>
                                            </motion.button>

                                        </div>
                                    </motion.a>
                                </Link>
                            </div>
                            <div>
                                <div className="flex mb-5 items-center">
                                    <h1 className=" text-white font-bold text-xl capitalize">Songs</h1>
                                </div>
                                <motion.div animate={{ opacity: [0, 1], x: [-100, 0] }}
                                    transition={{ duration: 0.5 }}
                                    className="flex cursor-pointer h-[260px] overflow-y-auto flex-col p-3 px-1 bg-white/5 hover:bg-white/10 rounded-md">
                                    {data.map(i => {
                                        return <div key={Math.random()} className="flex group px-3 space-x-2 items-center w-full">
                                            <h1 className="text-white/40 block group-hover:hidden font-semibold text-sm">#{i}</h1>
                                            <motion.button whileTap={{ scale: 1.2 }} className="hover:bg-white/5 p-2 rounded-full hidden group-hover:block flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" fill="rgba(255,255,255,1)" /></svg>
                                            </motion.button>

                                            <div className="group flex p-2 grid grid-flow-col-dense  border-b w-full items-center hover:bg-gradient-to-l from-white/5 border-white/10 mr-16">
                                                <div className="">
                                                    <div className="flex items-center">
                                                        <img src={`/cover/dummy${i}.jpg`} className="w-10 h-10 mr-2 object-cover rounded-lg" alt="" />
                                                        <h1 className="text-white font-bold text-sm">Marshmellow</h1>
                                                    </div>
                                                </div>

                                                <div className="  h-full">
                                                    <div className="flex h-full justify-between items-center">
                                                        <div className="flex items-center space-x-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" fill="rgba(255,255,255,1)" /></svg>
                                                            <h1 className="text-white font-medium text-xs">10.00</h1>
                                                        </div>
                                                        <motion.button whileTap={{ scale: 1.2 }} className="flex hover:bg-white/5 p-2 hidden group-hover:block rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0H24V24H0z" /><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" fill="rgba(255,255,255,0.5)" /></svg>
                                                        </motion.button>
                                                        <motion.button whileTap={{ scale: 1.2 }} className="flex hover:bg-white/5 p-2  rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="rgba(255,255,255,1)" /></svg>
                                                        </motion.button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </motion.div>

                            </div>
                        </div>
                            : null}
                        <div className="flex px-5  items-center">
                            <h1 className=" text-white font-bold text-xl capitalize">recent searches</h1>
                        </div>
                        <div className="grid p-5 py-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                            {data.map(i => {
                                return <Link href="/artist/12">
                                    <motion.a animate={{ opacity: [0, 1], x: [-100, 0] }}
                                        transition={{ duration: 0.5 }}
                                        className="flex cursor-pointer group flex-col p-3 bg-white/5 hover:bg-white/10 rounded-md">
                                        <div className="relative h-[160px]">
                                            <img src={`/cover/dummy${i}.jpg`} className=" h-full w-full object-cover rounded-md" alt="" />
                                            <motion.button whileTap={{ scale: 1.2 }}
                                                className="border-2 rounded-full hidden group-hover:block absolute bottom-3 right-3">
                                                <div className="flex  bg-white p-2 rounded-full">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" /></svg>
                                                </div>
                                            </motion.button>
                                            <motion.button whileTap={{ scale: 1.2 }} className="flex absolute top-0 right-0 hover:bg-white/5 p-2 hidden group-hover:block rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(255,255,255,1)" /></svg>
                                            </motion.button>
                                        </div>
                                        <div className="flex flex-col mt-3 pb-5">
                                            <h1 className=" text-white font-bold text-sm">Nightmare</h1>
                                            <span className=" text-white/50 font-medium text-sm">Avenged savenfold</span>

                                        </div>
                                    </motion.a>
                                </Link>
                            })}
                        </div>
                    </div>

                </div>
                <BottomPlayer />
            </div>
            <SideMore />
        </div>
    )
}

export default index
