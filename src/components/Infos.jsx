import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  const paragraphsRef = useRef([]);
  const imgRef = useRef(null);

  useEffect(() => {
    // Animation des paragraphes au scroll
    gsap.fromTo(
      paragraphsRef.current[0],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: paragraphsRef.current[0],
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      paragraphsRef.current[1],
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: paragraphsRef.current[1],
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          delay: 0.3,
        },
      }
    );
  }, []);

  return (
    <div id="about" className="about">
      <div>
        <img ref={imgRef} src="src/path/moi.png" alt="Mon-pp" className="animated-img" />
      </div>
      <div className="card-infos">
        <p className="p" ref={(el) => (paragraphsRef.current[0] = el)}>
          <h2>MODE DE TRAVAIL</h2>
          Je suis un lycéen passionné par la technologie. J'y ai découvert ma
          véritable vocation. J'aime relever des défis, apprendre continuellement
          pour affiner mes compétences. Chaque ligne de code étant une opportinuté pour évoluer.
        </p>
        <p className="p" ref={(el) => (paragraphsRef.current[1] = el)}>
          <h2>POSSIBILITÉ</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos
          suscipit repudiandae animi molestias voluptate harum incidunt rem magnam
          velit eius odio exercitationem, a maiores nam nesciunt aspernatur, dolore
          est!
        </p>
      </div>
      <div className="come">
            
      </div>
    </div>
  );
};

export default Info;
