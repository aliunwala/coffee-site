import React from "react";

function DrinkItem() {
  return (
    <div className="relative lg:row-span-2">
      <div className="absolute inset-px  bg-white rounded-lg   lg:rounded-l-[2rem]"></div>
      {/* rounded-lg   lg:rounded-l-[2rem]*/}
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] ">
        {/* rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] */}
        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
            Matcha Strawberry
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            Subtly sweet strawberry combines with the luscious flavors of a cafe
            mocha to create a seasonal cold-textured latte you won&apos;t want
            to put down. Made with natural flavors, real farm-fresh milk, real
            cold brew made from coffee beans roasted by us, and the texture of a
            real cafe latte. Best enjoyed chilled!
          </p>
        </div>
        <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
          {/* <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl"> */}
          <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw]  border-gray-700 bg-gray-900 shadow-2xl">
            <img
              className="size-full object-cover object-top"
              src="/matchaLarge.avif"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
    </div>
  );
}

export default DrinkItem;
