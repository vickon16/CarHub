"use client";

import React, { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <section className="max-w-[1520px] mx-auto xl:px-10 md:px-5 sm:px-2 px-4">{children}</section>;
};

export default Container;
