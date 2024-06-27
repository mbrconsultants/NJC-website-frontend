"use client";
import React from "react";
import BounceAnimatedBtn from "../utils/BounceAnimatedBtn";
import { useAppDispatch } from "@/redux/hooks";
import { toggleVideoModalOpen } from "@/redux/features/videoModalSlice";

const VideoSection2 = () => {
  const dispatch = useAppDispatch();
  const openVideoModal = () => {
    dispatch(toggleVideoModalOpen());
  };
  return (
    <div className="rv-2-video" id="playing">
      <div className="container">
        <BounceAnimatedBtn>
          <a className="rv-2-video__btn" role="button" onClick={openVideoModal}>
            <i className="fa-solid fa-sharp fa-play"></i>
          </a>
        </BounceAnimatedBtn>
      </div>
    </div>
  );
};

export default VideoSection2;
