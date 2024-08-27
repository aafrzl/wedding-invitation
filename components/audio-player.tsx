"use client";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  isOpened: boolean;
}

export default function AudioPlayer({ src, isOpened }: Props) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        // Check if the user agent is not a mobile browser
        const isMobile =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        if (!isMobile) {
          audioRef.current.play();
        } else {
          // For mobile browsers, use muted audio to enable autoplay
          audioRef.current.muted = true;
          audioRef.current.play();
          audioRef.current.muted = false;
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {isOpened && (
        <div className="fixed bottom-4 left-4 z-50">
          <audio
            ref={audioRef}
            src={src}
            autoPlay
            loop
            controls
            style={{ display: "none" }}
          />
          <button
            onClick={togglePlay}
            className="rounded-full bg-primary p-2 font-bold text-white shadow-md hover:bg-secondary"
          >
            {isPlaying ? (
              <Volume2 className="size-5 sm:size-8" />
            ) : (
              <VolumeX className="size-5 sm:size-8" />
            )}
          </button>
        </div>
      )}
    </>
  );
}
