import React from "react";
import { Landing } from "../components/Home/Landing";
import Specifications from "../components/Home/Specifications";
import ContentSection from "../components/Home/ContentSection";
import Partners from "../components/Home/Partners";
import { useRef } from "react";

export default function Home() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <div>
      {windowSize.current[0] > 576 && <Landing />}
      <ContentSection />
      <Specifications />
      <Partners />
    </div>
  );
}
