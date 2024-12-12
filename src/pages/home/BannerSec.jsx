import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OverViewBanner from "./OverViewBanner";

const OverviewContainer = styled.div`
  position: relative;
  width: 100%;
  // height: 400vh; /* Height to allow for content scrolling */
  background-color: #fff;
  overflow: hidden;
`;

const SectionContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  text-align: center;
  color: #fff;
  opacity: ${(props) => props.opacity};
  transform: translateY(${(props) => props.translateY}px);
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

const StickyBanner = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  transition: transform 0.3s ease-out;
`;

const ScrollAnimationSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateOpacity = (index) => {
    const start = index * window.innerHeight;
    const end = start + window.innerHeight;

    if (scrollPosition >= start && scrollPosition <= end) {
      return 1 - (scrollPosition - start) / window.innerHeight;
    }
    return scrollPosition < start ? 1 : 0;
  };

  const calculateTranslateY = (index) => {
    const start = index * window.innerHeight;
    if (scrollPosition >= start) {
      return -(scrollPosition - start) / 10; /* Smooth upward animation */
    }
    return 0;
  };

  const sections = [
    {
      title: "Welcome to The Lana Residences",
      subtitle: "Experience luxury like never before.",
    },
    {
      title: "Waterfront Serenity",
      subtitle: "In the heart of Dubai.",
    },
    {
      title: "Modern Opulence",
      subtitle: "Iconic elegance meets extraordinary legacy.",
    },
    {
      title: "Unmatched Comfort",
      subtitle: "Discover your dream residence.",
    },
  ];

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  return (
    <OverviewContainer>
      {/* Full-width sticky video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100vh",
          position: "sticky", // Keeps the video sticky
          top: 0,
          objectFit: "cover",
          zIndex: 1, // Keeps the video behind all content
        }}
        onEnded={handleVideoEnded}
      >
        <source src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/651dbbdcaec73606a8bc0454_lana-hero-video-d-transcode.mp4" />
        <source src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/651dbbdcaec73606a8bc0454_lana-hero-video-d-transcode.webm" />
      </video>

      {/* Sticky Banner */}
      {/* <StickyBanner>
        <OverViewBanner />
      </StickyBanner> */}

      {/* Sections with scroll animation */}
      {sections.map((section, index) => (
        <SectionContainer
          key={index}
          // opacity={calculateOpacity(index)}
          opacity={1}
          // translateY={calculateTranslateY(index)}
          style={{ top: `${index * 100}vh` }}
        >
          <h1>{section.title}</h1>
          <p>{section.subtitle}</p>
        </SectionContainer>
      ))}
    </OverviewContainer>
  );
};

export default ScrollAnimationSection;
