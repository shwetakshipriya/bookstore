import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl ">
            We are delighted to have you{" "}
            <span className="text-pink-500">here </span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            maxime illum delectus nam velit qui repellendus animi deserunt
            beatae ex. Esse repudiandae saepe tempora consequatur impedit, earum
            voluptatem enim qui? Sunt culpa nihil sint dolore placeat laborum
            eos nesciunt incidunt, quas laudantium qui adipisci, officia
          </p>
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </div>
        <div>
          {list.map((item) => {
            <Cards item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Course;
