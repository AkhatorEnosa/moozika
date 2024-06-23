import { FaBackward, FaCircle, FaForward } from "react-icons/fa"

const Player = ({enterSite}) => {
  return (
    <div className="container sm:w-[70vw] md:w-[70vw] lg:w-[28vw] h-[75vh] bg-white flex flex-col justify-between items-center overflow-hidden rounded-2xl p-5 shadow-sm opacity-0 scale-75">
        <div className="header w-full flex justify-between items-center">
            <h2 className="logo font-bold opacity-0">Moozika</h2>
            <div className="double-dot flex gap-1 text-[#e5e5e5f4] opacity-0">
                <FaCircle />
                <FaCircle />
            </div>
        </div>
        <div className="player-body w-full h-full flex flex-col items-center justify-center gap-5 px-2">

            <div className="music-art w-full h-[55%] bg-[#fa5454] rounded-lg rotate-6 scale-95 opacity-0"></div>

            <div className="music-details w-full flex flex-col opacity-0">
                <p className="text-sm font-bold">What is playing man?</p>
                <p className="text-sm text-[#999999]">music.5hin3.com</p>
            </div>

            <div className="music-bar w-full flex items-center my-5 z-20 opacity-0 overflow-hidden">
                <div className="progress absolute py-1 bg-[#fa5454] rounded-full z-10"></div>
                <div className="py-1 w-full bg-[#e5e5e5] rounded-full"></div>
            </div>
            
            <div className="w-full flex justify-between items-center text-4xl text-[#aaaaaa]">
                <FaBackward className="rewind opacity-0"/>
                <span className="play flex flex-col justify-center items-center text-white text-sm w-7 h-7 bg-[#aaaaaa] hover:bg-[#ff0000f4] opacity-0 cursor-pointer" onClick={enterSite}><p>Enter</p></span>
                <FaForward className="forward opacity-0"/>
            </div>
        </div>
    </div>
  )
}

export default Player