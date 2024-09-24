import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const Prensent = () => {
  const aptitudes = ['𝓓𝓔𝓥𝓔𝓛𝓞𝓟𝓔𝓡', '𝓓𝓔𝓢𝓘𝓖𝓝𝓔𝓡', '¸𝓟𝓔𝓝𝓣𝓔𝓢𝓣𝓔𝓡·'];
  const [currentAptitude, setCurrentAptitude] = useState(0);
  const imgRef = useRef(null); // Créer une référence pour l'image

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      // Démarre la musique automatiquement et la joue en boucle
      audioRef.current.play();
      // Définit le volume à 50% (0.5)
      audioRef.current.volume = 0.5;
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAptitude((prevIndex) => (prevIndex + 1) % aptitudes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [aptitudes.length]);

  useEffect(() => {
    // Activer Draggable sur l'image après le rendu
    Draggable.create(imgRef.current, {
      type: "x", // Permet de faire glisser sur les axes x et y
      bounds: "body", // Restreindre les déplacements dans le body
      inertia: true, // Pour un mouvement fluide après avoir relâché
    });
  }, []);

  return (
    <div className="present">
      <div>
        <a href="#about">
          {/* Ajouter la référence à l'image */}
          <img ref={imgRef} src="src/path/moi-d.png" alt="Moi" />
        </a>
      </div>
      <div className="infos">
        <h2>
          𝓘 𝓐𝓜 𝓐 <strong>𝓦𝓔𝓑</strong>
          <mark> {aptitudes[currentAptitude]}... </mark>
        </h2>
      </div>
      <div className="ui">
        <span>
          <span><p> </p></span>
          <span>
            <a href=""><button>Start</button></a>
            <a href=""><button>More</button></a>
          </span>
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 432 416"><path fill="currentColor" d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M18.43 4.216H5.57A4.57 4.57 0 0 0 1 8.786v6.429a4.57 4.57 0 0 0 4.57 4.569h12.86a4.57 4.57 0 0 0 4.57-4.57V8.786a4.57 4.57 0 0 0-4.57-4.569zm-3.09 8.097l-6.015 2.869a.241.241 0 0 1-.346-.218V9.046c0-.18.19-.297.351-.215l6.016 3.048a.242.242 0 0 1-.005.434z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0" clip-rule="evenodd"/></svg>
        </span>
      </div>
      {/* Élement audio invisible avec lecture automatique en boucle */}
      <audio ref={audioRef} src="src/moi/muse.mp3" autoPlay loop />
    </div>
  );
};

export default Prensent;
