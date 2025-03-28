import React from "react";

interface Props {
  children: React.ReactNode;
}

function FoodMenuSection({ children }: Props) {
  return (
    <>
      <h2 className="m-0 pb-2 border-b-4 border-gray-700 text-2xl">Entrée</h2>
    </>
  );
}

export default FoodMenuSection;
