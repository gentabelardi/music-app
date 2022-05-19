import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function SideBar() {
    const router = useRouter()

    return (
        <div className="w-64 relative h-screen bg-gradient-to-b from-red-700/20 ">
            <div className="flex flex-col backdrop-blur-lg bg-black/10 h-full">
                <div className="flex p-3 py-5 justify-between">
                    <Link href="/">
                        <a className="text-white font-bold text-2xl">
                            Music
                        </a>
                    </Link>
                    <motion.button whileTap={{ scale: 1.2 }} className="flex hover:bg-white/5 p-2  rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="rgba(255,255,255,1)" /></svg>
                    </motion.button>
                </div>

                <div className="flex flex-col mb-3">
                    <span className="uppercase p-3 text-white/50 text-xs">menu</span>
                    <div className="flex flex-col h-[180px] overflow-y-auto ">
                        <Link href="/">

                            <a className={`flex space-x-2 items-center p-3 px-4 hover:bg-gradient-to-l from-white/5 ${router.pathname == "/" ? "bg-gradient-to-l" : null} from-white/5`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z" fill="rgba(255,255,255,1)" /></svg>
                                <h1 className=" text-white font-bold text-sm">Home</h1>
                            </a>
                        </Link>
                        <Link href="/search">
                            <a className={`flex space-x-2 items-center p-3 px-4 hover:bg-gradient-to-l from-white/5 ${router.pathname == "/search" ? "bg-gradient-to-l" : null} from-white/5`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617z" fill="rgba(255,255,255,1)" /></svg>
                                <h1 className=" text-white font-bold text-sm">Search</h1>
                            </a>
                        </Link>
                        <Link href="/collection">
                            <a className={`flex space-x-2 items-center p-3 px-4 hover:bg-gradient-to-l from-white/5 ${router.pathname == "/collection" ? "bg-gradient-to-l" : null} from-white/5`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6zm3 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5-6v2h4V9h-4zm0 4v2h4v-2h-4z" fill="rgba(255,255,255,1)" /></svg>
                                <h1 className=" text-white font-bold text-sm">Albums</h1>
                            </a>
                        </Link>
                        <Link href="/podcast">
                            <a className={`flex space-x-2 items-center p-3 px-4 hover:bg-gradient-to-l from-white/5 ${router.pathname == "/podcast" ? "bg-gradient-to-l" : null} from-white/5`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 1a5 5 0 0 1 5 5v6a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM2.192 13.962l1.962-.393a8.003 8.003 0 0 0 15.692 0l1.962.393C20.896 18.545 16.85 22 12 22s-8.896-3.455-9.808-8.038z" fill="rgba(255,255,255,1)" /></svg>
                                <h1 className=" text-white font-bold text-sm">Podcast</h1>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <span className="uppercase p-3 text-white/50 text-xs">Playlist</span>
                    <div className="flex flex-col h-[150px] overflow-y-auto ">
                        <a href="#" className=" flex space-x-2 items-center p-3 px-4 hover:bg-gradient-to-l from-white/5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M2 18h10v2H2v-2zm0-7h14v2H2v-2zm0-7h20v2H2V4zm17 11.17V9h5v2h-3v7a3 3 0 1 1-2-2.83z" fill="rgba(255,255,255,0.5)" /></svg>
                            <h1 className=" text-white/50 font-medium text-sm">Song</h1>
                        </a>
                        <a href="#" className=" flex space-x-2 items-center p-3 px-4 hover:bg-gradient-to-l from-white/5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M2 18h10v2H2v-2zm0-7h14v2H2v-2zm0-7h20v2H2V4zm17 11.17V9h5v2h-3v7a3 3 0 1 1-2-2.83z" fill="rgba(255,255,255,0.5)" /></svg>
                            <h1 className=" text-white/50 font-medium text-sm">Holiday</h1>
                        </a>
                        <a href="#" className=" flex space-x-2 items-center p-3 px-4 hover:bg-gradient-to-l from-white/5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M2 18h10v2H2v-2zm0-7h14v2H2v-2zm0-7h20v2H2V4zm17 11.17V9h5v2h-3v7a3 3 0 1 1-2-2.83z" fill="rgba(255,255,255,0.5)" /></svg>
                            <h1 className=" text-white/50 font-medium text-sm">News</h1>
                        </a>
                    </div>
                </div>
                <div className="flex absolute bottom-0 w-full  flex-col p-3 py-2">
                    <span className=" bg-white/10  h-[1px] w-full"></span>
                    <div className="flex py-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="52" height="52"><path fill="none" d="M0 0h24v24H0z" /><path d="M13 9.17A3 3 0 1 0 15 12V2.458c4.057 1.274 7 5.064 7 9.542 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c.337 0 .671.017 1 .05v7.12z" fill="rgba(255,255,255,1)" /></svg>
                        <div className="flex ml-2 flex-col">
                            <h1 className=" text-white font-bold text-sm">Nightmare</h1>
                            <span className=" text-white/50 font-medium text-sm">Avenged savenfold</span>

                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <motion.button whileTap={{ scale: 1.2 }} className="hover:bg-white/5 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm13.517 4.134l-1.416-1.416A8.978 8.978 0 0 0 21 12a8.982 8.982 0 0 0-3.304-6.968l1.42-1.42A10.976 10.976 0 0 1 23 12c0 3.223-1.386 6.122-3.594 8.134zm-3.543-3.543l-1.422-1.422A3.993 3.993 0 0 0 16 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.991 5.991 0 0 1 18 12c0 1.842-.83 3.49-2.137 4.591z" fill="rgba(255,255,255,1)" /></svg>
                        </motion.button>
                        <div className="w-full cursor-pointer  bg-white/10 rounded-full h-1.5 dark:bg-gray-700">
                            <div className=" relative bg-red-500 h-1.5 rounded-full" style={{ width: "45%" }}>
                                <span className="bg-white h-[15px] w-[15px] absolute right-0  rounded-full transform top-1/2 -translate-y-1/2" />
                            </div>

                        </div>
                        <div className="flex">
                            <motion.button whileTap={{ scale: 1.1 }} className="hover:bg-white/5 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M2 18h10v2H2v-2zm0-7h14v2H2v-2zm0-7h20v2H2V4zm17 11.17V9h5v2h-3v7a3 3 0 1 1-2-2.83z" fill="rgba(255,255,255,1)" /></svg>
                            </motion.button>
                            <motion.button whileTap={{ scale: 1.1 }} className="hover:bg-white/5 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M13 18v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z" fill="rgba(255,255,255,1)" /></svg>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
