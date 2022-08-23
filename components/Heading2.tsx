import React from "react";

type Props = {
  children: string;
};

const Heading2: React.FC<Props> = ({ children }) => (
  <h1 className="pb-2 mt-8 mb-2 text-2xl border-b border-sky-500">
    {children}
  </h1>
);

export default Heading2;
