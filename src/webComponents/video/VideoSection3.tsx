"use client";
import React from "react";
import BounceAnimatedBtn from "../utils/BounceAnimatedBtn";
import { useAppDispatch } from "@/redux/hooks";
import { toggleVideoModalOpen } from "@/redux/features/videoModalSlice";

const VideoSection3 = () => {
  const dispatch = useAppDispatch();
  const openVideoModal = () => {
    dispatch(toggleVideoModalOpen());
  };
  return (
    <div className="rv-5-video text-center">
      <div className="container">
        <BounceAnimatedBtn>
          <span>
            <a
              className="home-3-video-btn"
              role="button"
              onClick={openVideoModal}
            >
              <i className="fa-solid fa-sharp fa-play"></i>
            </a>
          </span>
        </BounceAnimatedBtn>
      </div>
    </div>
  );
};

export default VideoSection3;
