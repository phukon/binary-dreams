"use client";
import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const createAudioElement = () => {
      if (typeof document === "undefined") return null;

      const audioElement = document.createElement("audio");
      audioElement.id = "audio_tag";
      audioElement.src = "/music/riki.mp3";
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
    <Draggable bounds="parent" defaultPosition={{ x: 100, y: 100 }}>
      <div className="flex flex-col fixed max-h-[150px] max-w-[150px] z-50 --local-inter tracking-[-2px] md:tracking-[-1px] hover:cursor-move">
        {isPlaying ? (
          <img className="hover:cursor-pointer" onClick={togglePlay} width={50} src="/icons/pause.svg" />
        ) : (
          <img className="hover:cursor-pointer" onClick={togglePlay} width={50} src="/icons/play.svg" />
        )}
        hoool here
      </div>
    </Draggable>
  );
};

export default AudioPlayer;
