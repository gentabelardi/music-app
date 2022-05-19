import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import BottomPlayer from '../../components/molecules/BottomPlayer'
import Navbar from '../../components/molecules/Navbar'
import SideBar from '../../components/molecules/SideBar'
import SideMore from '../../components/molecules/SideMore'
const data = [1, 2, 3, 4, 5]

function tracks() {
  const [navbar, setNavbar] = useState(false)
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
      <div  className="relative flex-auto  bg-gradient-to-b from-green-700">
        <div ref={scroller} className="flex flex-col  h-screen  overflow-y-auto">
          <div className=" w-full">
            <Navbar type="none" background={navbar} />
            <div className="flex p-5  pt-32 pb-12 space-x-5 ">
              <img src="/cover/dummy2.jpg" className="shadow-2xl rounded-xl h-[200px] h-[200px]  object-cover " alt="" />
              <div className="flex  w-full flex-col ">
                <span className="text-white mb-2 uppercase text-xs">Playlist</span>
                <h1 className="text-white font-bold text-7xl">Like Songs</h1>
                <div className="flex  w-full items-center ">
                  <h1 className="text-white font-bold text-sm mr-0.5">Michel -</h1>
                  <span className="text-white  text-sm">1 song</span>
                </div>
                <div className="flex mt-5">
                  <motion.button whileTap={{ scale: 1.2 }}
                    className="border-2 rounded-full ">
                    <div className="flex bg-white p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" /></svg>
                    </div>
                  </motion.button>
                </div>
              </div>

            </div>
          </div>
          <div className="flex my-2 pb-32 flex-col   backdrop-blur-sm bg-gradient-to-t from-[#151515]/90">
            <div className="flex p-3 px-5 items-center ">
              <h1 className="text-white font-bold mr-2 text-xl">Songs</h1>
            </div>

            {data.map(i => {
              return <div key={Math.random()} className="flex group px-5 space-x-2 items-center w-full">
                <h1 className="text-white/40 block group-hover:hidden font-semibold text-sm">#{i}</h1>
                <motion.button whileTap={{ scale: 1.2 }} className="hover:bg-white/5 p-2 rounded-full hidden group-hover:block flex">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" fill="rgba(255,255,255,1)" /></svg>
                </motion.button>
                <div className="group flex p-2 grid grid-flow-col-dense  border-b w-full items-center hover:bg-gradient-to-l from-white/5 border-white/10 mr-16">
                  <div className="">
                    <div className="flex items-center">
                      <img src={`/cover/dummy${i}.jpg`} className="w-12 h-12 mr-2 object-cover rounded-lg" alt="" />
                      <h1 className="text-white font-bold text-sm">Marshmellow</h1>
                    </div>
                  </div>
                  <div className="col-span-2  h-full">
                    <div className="flex h-full items-center">
                      <h1 className="text-white/50 font-bold text-xs">HuntingHigh and low</h1>
                    </div>
                  </div>
                  <div className="  h-full">
                    <div className="flex h-full justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 12h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7C2 6.477 6.477 2 12 2s10 4.477 10 10v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3a8 8 0 1 0-16 0z" fill="rgba(255,255,255,1)" /></svg>
                        <h1 className="text-white font-medium text-xs">10.00</h1>
                      </div>
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
          </div>
        </div>

        <BottomPlayer />
      </div>
      <SideMore />
    </div>
  )
}

export default tracks
