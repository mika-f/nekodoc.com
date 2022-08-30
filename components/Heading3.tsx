import React from "react";

type Props = {
  children: string;
};

const Heading3: React.FC<Props> = ({ children }) => (
  <h1 className="mt-4 mb-1 text-xl">{children}</h1>
);

export default Heading3;
