import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled-components for the section and images
const ScrollAnimationSectionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 150vh;
  overflow: hidden;
`;

const MainBuilding = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const OverlayImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.6s ease-in-out;

  &.active {
    opacity: 0.7;
  }
`;

const ScrollAnimationSection = () => {
  const [activeOverlay, setActiveOverlay] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("scroll-section");
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition <= sectionTop + sectionHeight
      ) {
        // Calculate overlay changes based on scroll position
        const scrollPercentage = (scrollPosition - sectionTop) / sectionHeight;

        if (scrollPercentage < 0.4) {
          setActiveOverlay(1); // First image
        } else if (scrollPercentage < 0.7) {
          setActiveOverlay(2); // Second image
        } else if (scrollPercentage < 0.9) {
          setActiveOverlay(3); // Third image
        } else {
          setActiveOverlay(4); // Fourth image
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollAnimationSectionWrapper id="scroll-section">
      {/* Main Building Image (always visible) */}
      <MainBuilding
        src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6571af2b6e694652412ee3c8_lana-residence-2x.webp"
        alt="Main Residence"
      />

      {/* Overlay Images */}
      <OverlayImage
        src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6571c968719ea123f97ef3c2_lana-residence-overlay-01.webp"
        alt="Overlay 1"
        className={activeOverlay === 1 ? "active" : ""}
      />
      <OverlayImage
        src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6571c9689252c6777eab54c0_lana-residence-overlay-02.webp"
        alt="Overlay 2"
        className={activeOverlay === 2 ? "active" : ""}
      />
      <OverlayImage
        src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6571c9686f881d664706c4bb_lana-residence-overlay-03.webp"
        alt="Overlay 3"
        className={activeOverlay === 3 ? "active" : ""}
      />
      <OverlayImage
        src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6571c9687be545b17f98e0c9_lana-residence-overlay-04.webp"
        alt="Overlay 4"
        className={activeOverlay === 4 ? "active" : ""}
      />
    </ScrollAnimationSectionWrapper>
  );
};

export default ScrollAnimationSection;
