"use client";

import React, { useState, useRef, useEffect } from 'react'; // 1. Import useEffect
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const BGMPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 2. Tambahkan useEffect untuk auto-play saat komponen dimuat
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Mencoba memutar audio
      audio.play()
        .then(() => {
          // Jika berhasil, perbarui state
          setIsPlaying(true);
        })
        .catch(error => {
          // Jika gagal (karena kebijakan browser), biarkan state isPlaying tetap false
          console.error("Autoplay dicegah oleh browser:", error);
          setIsPlaying(false);
        });
    }
  }, []); // Array dependensi kosong berarti efek ini hanya berjalan sekali saat komponen dimuat

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => console.error("Error saat memutar audio:", error));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="/Sound/bgm-burden.mp3" loop />
      
      <button
        onClick={togglePlayPause}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        aria-label={isPlaying ? 'Hentikan musik' : 'Putar musik'}
      >
        {isPlaying ? <FaVolumeUp size={24} /> : <FaVolumeMute size={24} />}
      </button>
    </>
  );
};

export default BGMPlayer;