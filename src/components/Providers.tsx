"use client";

import React, { FC } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";

interface ProviderProps {
  children : React.ReactNode;
}

const Providers : FC<ProviderProps> = ({ children}) => {
  return (
      <Provider store={store}>
        {children}
      </Provider>
    );
};

export default Providers;
