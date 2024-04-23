import React from "react";
import { Landing } from "../components/Home/Landing";
import Specifications from "../components/Home/Specifications";
import ContentSection from "../components/Home/ContentSection";
import Partners from "../components/Home/Partners";

export default function Home() {
  return (
    <div>
      {window.innerWidth > 576 && <Landing />}
      <ContentSection />
      <Specifications />
      <Partners />
    </div>
  );
}
