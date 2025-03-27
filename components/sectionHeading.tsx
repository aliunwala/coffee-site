import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  id: string;
}
export default function SectionHeading({ children, title, id }: Props) {
  return (
    <>
      <div className="pb-5 border-b border-gray-200" id={id}>
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">
          {/* Workcation is a property rental website. Etiam ullamcorper massa
          viverra consequat, consectetur id nulla tempus. Fringilla egestas
          justo massa purus sagittis malesuada. */}
          {children}
        </p>
      </div>
    </>
  );
}
