import gsap from "gsap";
import Player from "./component/Player"
import { useGSAP } from '@gsap/react'
import { AppProvider } from "./context/AppContext";

gsap.registerPlugin(useGSAP);
const tl = gsap.timeline();

function App() {

  useGSAP(() => {
      tl.to(".container", {
        transform: "scale(1)",
        opacity: 1,
        duration: 0.8,
        delay: 1
      }).to(".double-dot", {
        opacity: 1
      }).to(".music-art", {
        opacity: 1,
        scale: 1,
        rotate: "0deg",
        duration: 0.5
      }).to(".logo, .music-details", {
        opacity: 1,
        delay: -0.5
      }).to(".play", {
        opacity: 1,
        delay: -0.8
      }).to(".rewind, .forward", {
        opacity: 1,
        delay: -0.2
      }).to(".music-bar", {
        opacity: 1
      }).fromTo(".progress", {
        width: "0%"
      }, {
        width: "43%"
      }).to(".progress", {
        width: "100%",
        delay: 0.6
      }).to(".play", {
        rotate: "360deg",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.2
      }).to(".play", {
        backgroundColor: "#fa5454",
        width: "30%",
        height: "100%",
        borderRadius: "20px"
      }).fromTo(".play p", {
        opacity: 0
      }, {
        opacity: 1,
        repeat: -1,
        yoyo: true,
      })
  })

  // const expandAll = () => {
  //   tl.to(".container", {
  //     translateX: "100vw",
  //     // opacity: 0,
  //     // duration: 7
  //   }).to(".backdrop", {
  //     left: 0,
  //     duration: 2,
  //     delay: -6
  //   })
  // }

  return (
    <AppProvider>
      <div className="relative w-screen h-screen flex flex-col justify-center items-center bg-[#e5e5e5f4]">
        {/* <p className="absolute text-5xl z-50">{!active && "Active"}</p> */}
        {/* <div className="backdrop absolute flex justify-center items-center w-full h-full -left-[100%] bg-[#fa5454] z-50"><p className="px-5 py-4 bg-white text-[#fa5454] cursor-pointer" onClick={() => window.location.href = "/"}>Reload</p></div> */}
        <Player/>
      </div>
    </AppProvider>
  )
}

export default App
