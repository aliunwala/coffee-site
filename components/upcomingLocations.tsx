import React from "react";

function UpcomingLocations() {
  return (
    <>
      <div
        id="location"
        className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3 pl-8 pr-8"
      >
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Upcoming Locations
          </h2>
          <p className="mt-4 leading-7 text-gray-600">
            Since we are a small business, we keep mobile and will doing popups
            at these venues: (Hope to see ya there!)
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
          <div className="rounded-2xl bg-gray-50 p-10">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              South Austin - 4/27/2025
            </h3>
            <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
              <p>
                <a
                  className="underline hover:text-black"
                  // className="underline text-gray-500 hover:text-blue-800 visited:text-gray-600"
                  href="https://bartoncreekfarmersmarket.org/"
                >
                  Barton Creek Farmers Market
                </a>
              </p>
              <p>
                2901 S. Capital of Texas Hwy <br></br>Austin, Texas 78746
              </p>
            </address>
          </div>
          <div className="rounded-2xl bg-gray-50 p-10">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              New York
            </h3>
            <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
              <p>886 Walter Street</p>
              <p>New York, NY 12345</p>
            </address>
          </div>
          <div className="rounded-2xl bg-gray-50 p-10">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Toronto
            </h3>
            <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
              <p>7363 Cynthia Pass</p>
              <p>Toronto, ON N3Y 4H8</p>
            </address>
          </div>
          <div className="rounded-2xl bg-gray-50 p-10">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Chicago
            </h3>
            <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
              <p>726 Mavis Island</p>
              <p>Chicago, IL 60601</p>
            </address>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpcomingLocations;
