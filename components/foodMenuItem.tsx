import React from "react";

function FoodMenuItem() {
  return (
    <div className="grid grid-cols-1 gap-2 pt-1.5 pb-1.5">
      <div className="flex">
        <img
          src="https://dummyimage.com/600x400/000/fff"
          alt="Black Placeholder Image"
          className="h-[80px] w-[80px] shrink-0 object-cover mr-1.5"
        />
        <div className="grow">
          <h3 className="flex justify-between m-0">
            <span className="mr-1.5">Bruschetta</span>
            <span className="">$12.90</span>
          </h3>
          <p className="text-sm/6">
            Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque.
            Fusce orci risus, congue eu mauris nec, pretium tincidunt nulla.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FoodMenuItem;
