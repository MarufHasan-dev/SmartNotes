import React from "react";
import "./Video.css";
import VideoImg from "../../assets/video.png";
import PlayBtn from "../../assets/play-button.png";
import TLgradient from "../../assets/vid-top-left-gradient.png";
import BRgradient from "../../assets/vid-bottom-right-gradient.png";

function Video() {
  return (
    <section className="relative py-16">
      <div className="relative max-w-[1110px] max-h-[652px] mx-auto box-border">
        <img src={VideoImg} alt="Video" />
        <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all cursor-pointer z-10 shadow-[0px_22px_64px_rgba(22,28,45,0.23)] rounded-full hover:scale-105 hover:shadow-[0px_15px_35px_rgba(22,28,45,0.3)]">
          <img src={PlayBtn} alt="play button" />
        </button>
        <div className="absolute top-0 left-0 bg-secondary-200/60 w-full h-full rounded-[16px]"></div>
      </div>
      <img
        className="absolute top-[-120px] left-[50px] w-[425px] h-[425px] -z-10"
        src={TLgradient}
        alt="top left gredient"
      />
      <img
        className="absolute bottom-[-120px] right-[70px] w-[345px] h-[345px] -rotate-45 -z-10"
        src={BRgradient}
        alt="bottom right gredient"
      />
    </section>
  );
}

export default Video;
