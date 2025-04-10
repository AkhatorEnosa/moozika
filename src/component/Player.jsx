/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react"
import { FaBackward, FaCircle, FaForward } from "react-icons/fa"
import { AppContext } from "../context/AppContext"

const Player = () => {
    const {active, setActive, color} = useContext(AppContext)

    useEffect(() => {
        console.log(active)
    }, [active])
  return (
    <div className={`container relative ${active ? "w-screen h-screen" : "sm:w-[70vw] md:w-[70vw] lg:w-[28vw] h-[75vh]"} bg-white flex flex-col justify-between items-center rounded-2xl p-5 shadow-sm opacity-0 scale-75 transition-all duration-200`}>
        <div className={`header w-full h-full flex justify-between items-start ${active ? "absolute w-screen h-screen text-[#fff] text-xl top-0 p-5 z-50" : "w-full h-[10%]"} transition-all duration-200`} onClick={() => setActive(false)}>
            <h2 className="logo font-bold opacity-0">Mooziker</h2>
            <div className="double-dot flex gap-1 text-[#e5e5e5f4] opacity-0">
                <FaCircle />
                <FaCircle />
            </div>
        </div>
        <div className="player-body w-full h-full flex flex-col items-center justify-center gap-5 px-2">

            <div className={`music-art flex justify-center items-center ${active ? "fixed w-screen h-screen top-0 z-40" : "w-full h-[55%]"} bg-[${color}] rounded-lg rotate-6 scale-95 opacity-0 delay transition-all duration-200`} onClick={() => setActive(false)}>
                {/* this is a test text */}
                {/* <button className={`w-fit px-5 py-2 bg-white outline-none rounded-md text-[${color}]`} onClick={() => window.location.href = "/"}>
                    Reload
                </button> */}
            </div>

            <div className="music-details w-full flex flex-col opacity-0">
                <p className="text-sm font-bold">What is playing man?</p>
                <p className="text-sm text-[#999999]">music.5hin3.com</p>
            </div>

            <div className="music-bar relative w-full flex items-center my-5 z-20">
                <div className="progress absolute py-1 bg-[#fa5454] rounded-full z-10"></div>
                {/* <div className="py-1 w-full bg-[#e5e5e5] rounded-full"></div> */}
            </div>
            
            <div className="w-full flex justify-between items-center text-4xl text-[#aaaaaa]">
                <FaBackward className="rewind opacity-0"/>

                <span className={`play flex flex-col justify-center items-center text-white text-sm w-7 h-7 bg-[#aaaaaa] hover:bg-[#ff0000f4] ${active ? "translate-y-20" : "translate-y-0"} transition-all duration-200 opacity-0 cursor-pointer`} onClick={() => setActive(!active)}><p>Enter</p></span>
                
                <FaForward className="forward opacity-0"/>
            </div>
        </div>
    </div>
  )
}

export default Player