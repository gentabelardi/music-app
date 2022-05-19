import { motion } from 'framer-motion'
import React from 'react'

function BottomPlayer() {
    return (
        <div className="w-full flex px-5 border-t border-[#252525] items-center absolute bottom-0 h-28 backdrop-blur-xl bg-[#101010]/80">
            <div className="flex mr-16">
                <img src="/cover/dummy1.jpg" className="w-[70px] h-[70px] object-cover rounded-full" alt="" />
            </div>
            <div className="flex-auto">
                <div className="flex w-full mb-5 justify-between items-center">
                    <div className="flex space-x-3 ">
                        <button className="hover:bg-white/5 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z" /><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" fill="rgba(255,255,255,0.5)" /></svg>
                        </button>
                        <button className="hover:bg-white/5 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M13 10h5l-6 6-6-6h5V3h2v7zm-9 9h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7z" fill="rgba(255,255,255,0.5)" /></svg>                        </button>
                    </div>
                    <div className="flex space-x-2">
                        <motion.button whileTap={{ scale: 1.2 }} className="hover:bg-white/5 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z" /><path d="M7 6a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1zm2.079 6.408a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409l-7.133-5.036z" fill="rgba(255,255,255,1)" /></svg>
                        </motion.button>
                        <motion.button whileTap={{ scale: 1.2 }}
                            className="border-2 hover:bg-white/10 border-white rounded-full p-1">
                            <div className="flex bg-white p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" /></svg>
                            </div>
                        </motion.button>
                        <motion.button whileTap={{ scale: 1.2 }} className="hover:bg-white/5 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z" /><path d="M7.788 17.444A.5.5 0 0 1 7 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036zM16 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V7z" fill="rgba(255,255,255,1)" /></svg>
                        </motion.button>
                    </div>
                    <div className="flex space-x-3 ">
                        <motion.button whileTap={{ scale: 1.2 }} className="hover:bg-white/5 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M18 17.883V16l5 3-5 3v-2.09a9 9 0 0 1-6.997-5.365L11 14.54l-.003.006A9 9 0 0 1 2.725 20H2v-2h.725a7 7 0 0 0 6.434-4.243L9.912 12l-.753-1.757A7 7 0 0 0 2.725 6H2V4h.725a9 9 0 0 1 8.272 5.455L11 9.46l.003-.006A9 9 0 0 1 18 4.09V2l5 3-5 3V6.117a7 7 0 0 0-5.159 4.126L12.088 12l.753 1.757A7 7 0 0 0 18 17.883z" fill="rgba(0,255,108,1)" /></svg>
                        </motion.button>
                        <motion.button whileTap={{ scale: 1.2 }} className="hover:bg-white/5 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z" fill="rgba(255,255,255,1)" /></svg>
                        </motion.button>
                    </div>

                </div>
                <div className="flex items-center space-x-5">
                    <span className="text-white/50 uppercase text-xs">10:00</span>
                    <div className="w-full cursor-pointer group bg-white/10 rounded-full h-1.5 dark:bg-gray-700">
                        <div className="bg-white relative group-hover:bg-red-500 h-1.5 rounded-full" style={{ width: "45%" }}>
                        <span className="bg-red-500 hidden group-hover:block h-[15px] w-[15px] absolute right-0  rounded-full transform top-1/2 -translate-y-1/2"/>
                        </div>
                    </div>
                    <span className="text-white/50 uppercase text-xs">10:00</span>
                </div>
            </div>
        </div>
    )
}

export default BottomPlayer
