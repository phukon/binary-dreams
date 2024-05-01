"use client";
import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  var tap = 0;

  useEffect(() => {
    const createAudioElement = () => {
      if (typeof document === "undefined") return null;

      const audioElement = document.createElement("audio");
      audioElement.id = "audio_tag";
      audioElement.src = "https://d1g2o751bxy91o.cloudfront.net/fx.mp3";
      audioElement.loop = true;
      document.body.appendChild(audioElement);
      return audioElement;
    };

    audioRef.current = createAudioElement();
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <Draggable bounds="parent" defaultPosition={{ x: 100, y: 300 }}>
      <div className=" fixed flex flex-col items-center --local-inter hover:cursor-move z-50 w-fit">
        <img
          className="hover:cursor-pointer"
          onTouchStart={togglePlay}
          onClick={togglePlay}
          width={35}
          src={isPlaying ? "/icons/pause.svg" : "/icons/play.svg"}
        />
        <span>---</span>
        <p>---grab---</p>
        <span>---</span>
      </div>
    </Draggable>
  );
};

export default AudioPlayer;
