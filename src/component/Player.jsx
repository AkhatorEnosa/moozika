/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useContext } from "react"
import { FaBackward, FaCircle, FaForward, FaPlay } from "react-icons/fa"
import { AppContext } from "../context/AppContext"

const Player = () => {
    const {active, setActive, color, nextColor, prevColor} = useContext(AppContext)
  return (
    <div className={`${active ? "w-screen h-screen" : `container sm:w-[70vw] md:w-[70vw] lg:w-[28vw] h-[75vh] shadow-lg rounded-2xl p-5 opacity-0 scale-75`} bg-white flex flex-col justify-between items-center transition-all duration-75`}>
        <div className={`header w-full flex justify-between items-start ${active ? "absolute w-screen h-screen text-[#fff] text-xl top-0 p-5 z-50" : "w-full text-gray-500"} delay-0 transition-all duration-200`}>
            <h2 className={`logo font-bold opacity-0`}>Mooziker</h2>
            <div className="double-dot flex gap-1 text-[#e5e5e5f4] opacity-0">
                {/* <FaCircle /> */}
                <FaCircle className={`${active ? "flex hover:text-white hover:scale-125 cursor-pointer transition-all duration-150" : "hidden"}`} onClick={() => setActive(false)}/>
            </div>
        </div>
        <div className="player-body w-full h-full flex flex-col items-center justify-center gap-5 px-2">

            <div 
                className={`${active ? "fixed w-screen h-screen flex justify-center items-center  text-8xl text-[#fff] font-semibold top-0 z-40 " : "music-art w-full h-[55%] flex justify-center items-center text-2xl text-[#fff] font-semibold rounded-lg shadow-inner scale-95 opacity-0"} transition-all duration-200`}
                style={{ background: color }}
            >
                <p className="music-art-text animate-bounce opacity-0">
                    {active ? "Fun Started" : "Press play to start the fun"}
                </p>
            </div>

            <div className="music-details w-full flex flex-col opacity-0">
                <p className="text-sm font-bold text-gray-600">What is playing man?</p>
                <p className="text-sm text-[#999999]">music.5hin3.com</p>
            </div>

            <div className="music-bar relative w-full flex items-center my-5 z-20 opacity-0">
                <div 
                    className={`progress absolute py-1 rounded-full z-10`}
                    style={{ background: color }}
                ></div>
                <div className="py-1 w-full bg-[#e5e5e5] rounded-full"></div>
            </div>
            
            <div className="controls w-[80%] justify-between items-center text-4xl text-[#aaaaaa] scale-0 opacity-0 flex">
                <FaBackward 
                    className="rewind cursor-pointer transition-all duration-150"
                    style={{ '--hover-color': color }}
                    onClick={() => prevColor()}
                    />

                <FaPlay
                    className={`rewind cursor-pointer transition-all duration-150`} 
                    style={{ '--hover-color': color }}
                    onClick={() => setActive(!active)}/>

                {/* <span className={`play flex flex-col justify-center items-center text-white text-sm w-7 h-7 bg-[#aaaaaa] hover:bg-[#ff0000f4] ${active ? "translate-y-20" : "translate-y-0"} transition-all duration-200 opacity-0 cursor-pointer`} onClick={() => setActive(!active)}><p>Enter</p></span> */}
                
                <FaForward 
                    className="rewind cursor-pointer transition-all duration-150"
                    style={{ '--hover-color': color }}
                    onClick={() => nextColor()}
                />
            </div>
        </div>
    </div>
  )
}

export default Player