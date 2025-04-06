import React from "react";
interface DrinkItemProps {
  name: string;
  href: string;
  text: string;
  scale?: string;
}

function DrinkItem({ name, href, text, scale }: DrinkItemProps) {
  return (
    <div className="relative lg:row-span-2">
      <div className="absolute inset-px  bg-white rounded-lg"></div>
      {/* rounded-lg   lg:rounded-l-[2rem]*/}
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] ">
        {/* rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] */}
        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
            {name}
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {text}
          </p>
        </div>
        <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
          {/* <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl"> */}
          <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw]  border-gray-700 bg-gray-300 shadow-2xl">
            <img
              className="size-full object-cover object-top"
              src={href}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
    </div>
  );
}

export default DrinkItem;
