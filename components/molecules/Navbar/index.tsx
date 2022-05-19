import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React from 'react'
interface IProps {
    type: string
    background: boolean
}
function Navbar(props: IProps) {
    const router = useRouter()
    function action() {
        if (props.type === "song") {
            return <ul className="inline-flex items-center space-x-2 ">
                <li className="inline-flex items-center">
                    <a href="#" className="inline-flex items-center text-sm font-bold text-white hover:text-white/50 ">
                        Home
                    </a>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        <a href="#" className=" text-sm font-bold text-white/50 hover:text-white/100">Populer Artist</a>
                    </div>
                </li>
            </ul>
        }
        if (props.type === "collection") {
            return <div className="flex space-x-3">
                <motion.button whileTap={{ scale: 1.2 }} className="bg-white/5 hover:bg-white/10 font-bold p-1 text-sm px-5 text-white  rounded-lg">
                    Playlist
                </motion.button>
                <motion.button whileTap={{ scale: 1.2 }} className="bg-white/5 hover:bg-white/10 font-bold p-1 text-sm px-5 text-white  rounded-lg">
                    Podcast
                </motion.button>
                <motion.button whileTap={{ scale: 1.2 }} className="bg-white/5 hover:bg-white/10 font-bold p-1 text-sm px-5 text-white  rounded-lg">
                    Artist
                </motion.button>
                <motion.button whileTap={{ scale: 1.2 }} className="bg-white/5 hover:bg-white/10 font-bold p-1 text-sm px-5 text-white  rounded-lg">
                    Album
                </motion.button>
            </div>
        } if (props.type === "search") {
            return <div className="relative ">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="block p-2.5 w-full pl-10 pr-10 lg:w-[400px] text-sm text-white bg-black rounded-lg border border-white/20 focus:outline-none focus:border-red-500" placeholder="Search" required />
                    <button className="flex absolute inset-y-0 right-0 items-center pr-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17z" fill="rgba(255,255,255,1)" /></svg>
                    </button>
            </div>
        } else {
            return null
        }
    }
    return (
        <div className={`${props.background ? "bg-[#202020]" : null} ease-in duration-300 navbar flex z-50 absolute top-0 w-full px-5 py-3 justify-between`}>
            <div className="flex space-x-5 ">
                <motion.button onClick={() => router.back()} whileTap={{ scale: 1.2 }} className="flex items-center bg-white/5 hover:bg-white/10 border border-white/20 p-2  rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(255,255,255,1)" /></svg>
                </motion.button>
                <motion.button onClick={() => history.forward()} whileTap={{ scale: 1.2 }} className="flex items-center bg-white/5 hover:bg-white/10 border border-white/20 p-2  rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" fill="rgba(255,255,255,1)" /></svg>
                </motion.button>
                {action()}
            </div>
            <div className="flex items-center space-x-5">
                {props.background ? <h1 className=" text-white ease-in duration-300 font-bold text-xl capitalized">Marshmellow</h1>: null}
                <button  className="bg-white/5 hover:bg-white/10 border border-white/20 p-1 px-5 text-white  rounded-full">
                    Upgrade
                </button>
            </div>
        </div>


    )
}

export default Navbar
