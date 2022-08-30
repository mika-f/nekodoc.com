import React from "react";

type Props = {
  children: React.ReactElement;
};

const Paragraph: React.FC<Props> = ({ children }) => (
  <p className="my-1">{children}</p>
);

export default Paragraph;
