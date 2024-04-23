import React from "react";
import CoursesFilters from "../components/Courses/CoursesFilters";

export default function Courses() {
  return (
    <div className="courses__container">
      <img
        src="https://developers.google.com/learn/images/learn-header.svg"
        alt=""
        className="w-[100vw]"
      />

      <div className="mx-[5vw] my-3 mt-8">
        <h1 className="mt-2 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
          A better workflow
        </h1>
        <p className="mt-2 text-lg leading-8 text-gray-700">
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
          arcu, sit dui mi.
        </p>
      </div>

      <div>
        <CoursesFilters />
      </div>
    </div>
  );
}
