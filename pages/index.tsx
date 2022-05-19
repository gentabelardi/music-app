import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import BottomPlayer from '../components/molecules/BottomPlayer'
import Navbar from '../components/molecules/Navbar'
import SideBar from '../components/molecules/SideBar'
import SideMore from '../components/molecules/SideMore'
const data = [1, 2, 3, 4, 5]

const Home: NextPage = () => {
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
      <div className=" relative flex-auto  ">
        <div ref={scroller} className="flex flex-col flex flex-col pb-32 h-screen  overflow-y-auto">
          <Navbar type="none" background={navbar} />
          <div className="flex flex-col my-5 mt-24">
            <div className="flex px-5 justify-between items-center">
              <h1 className=" text-white font-bold text-xl">Your top mixer</h1>
              <Link href="/genre/section12sad213">
                <a className=" text-white font-regular text-xs uppercase">see all</a>
              </Link>
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
          <div className="flex flex-col my-5">
            <div className="flex px-5 justify-between items-center">
              <h1 className=" text-white font-bold text-xl">Your top mixer</h1>
              <Link href="/genre/section12sad213">
                <a className=" text-white font-regular text-xs uppercase">see all</a>
              </Link>
            </div>
            <div className="grid p-5 py-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
              {data.map(i => {
                return <Link href="/artist/12">
                  <motion.a animate={{ opacity: [0, 1], x: [-100, 0] }}
                    transition={{ duration: 0.5 }} className="flex group cursor-pointer flex-col p-3 bg-white/5 hover:bg-white/10 rounded-md">
                    <div className="relative h-[160px]">
                      <img src={`/cover/dummy${i}.jpg`} className=" h-full w-full object-cover rounded-md" alt="" />
                      <motion.button whileTap={{ scale: 1.2 }}
                        className="border-2  rounded-full hidden group-hover:block absolute bottom-3 right-3">
                        <div className="flex  bg-white p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" /></svg>
                        </div>
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
            <div className="flex flex-col my-5 mt-16">
              <div className="flex px-5  items-center">
                <h1 className=" text-white font-bold text-xl">Favorite Artist</h1>
              </div>
              <div className="grid p-5 py-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                {data.map(i => {
                  return <Link href="/artist/12">
                    <motion.a animate={{ opacity: [0, 1], x: [-100, 0] }}
                      transition={{ duration: 0.5 }}
                      className="flex cursor-pointer group flex-col p-3 bg-white/5 hover:bg-white/10 rounded-md">
                      <div className="relative h-[160px]">
                        <img src={`/cover/dummy${i}.jpg`} className=" h-full w-full object-cover rounded-full" alt="" />
                        <motion.button whileTap={{ scale: 1.2 }}
                          className="border-2 rounded-full hidden group-hover:block absolute bottom-3 right-3">
                          <div className="flex  bg-white p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" /></svg>
                          </div>
                        </motion.button>
                      </div>
                      <div className="flex flex-col mt-3 pb-5">
                        <h1 className=" text-white font-bold text-sm">DJ Soda</h1>
                        <span className=" text-white/50 font-medium text-sm">Artist</span>
                      </div>
                    </motion.a>
                  </Link>
                })}
              </div>
            </div>
          </div>
        </div>
        <BottomPlayer />
      </div>
      <SideMore />
    </div>
  )
}

export default Home
