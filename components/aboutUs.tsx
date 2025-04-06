import React from "react";

function AboutUs() {
  return (
    <>
      <div
        id="about"
        className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3 pl-8 pr-8 pb-16"
      >
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Who are we?
          </h2>
          <p className="mt-4 leading-7 text-gray-600">
            Curata Coffee a husband-and-wife duo serving up coffee that’s as
            intentional as it is delicious. Our nitro cold brew and matchas
            lattes are brewed with clean, organic ingredients. Topped with
            house-made cold foams like matcha, dairy-free vanilla, and
            strawberry shortcake, it’s coffee that tastes good and feels good
            too.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:col-span-2 lg:gap-8 place-content-center">
          <img
            className="size-full object-cover object-top"
            src="us.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
