import React, { useRef } from "react";
import images from "../../constants/images";
import "./Hero.css";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
  useParallax,
  useParallaxController,
} from "react-scroll-parallax";

const Hero = () => {
  //   const Image = () => {
  //     const parallaxController = useParallaxController();
  //     return (
  //       <img
  //         src={images.banner_img}
  //         alt="banner image"
  //         className="banner-img"
  //         onLoad={() => parallaxController.update()}
  //       />
  //     );
  //   };
  const ref = useRef();
  const parallax =
    useParallax <
    HTMLDivElement >
    {
      easing: "easeOutQuad",
      translateX: [0, 100],
    };

  return (
    <div className="container hero-main-wrapp">
      <div className="banner-text-wrapp" ref={parallax.ref}>
        {/* <div className="banner-inner-wrapp"></div> */}
        <h1 className="banner-text-1">HELPING TO GROW</h1>
        <h1 className="banner-text-2">GROWING TO HELP</h1>
      </div>

      <img
        src={images.home_hero}
        alt="banner image"
        className="banner-img"
        // loading="lazy"
      />
    </div>
  );
};

export default Hero;
