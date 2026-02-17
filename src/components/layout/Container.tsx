import React from "react";

type ContainerProps = { children?: React.ReactNode };

export default function Container({ children }: ContainerProps): JSX.Element {
  return <div className="max-w-6xl mx-auto px-6 md:px-8">{children}</div>;
}
