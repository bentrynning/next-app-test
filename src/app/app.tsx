"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext({} as { store: string; setStore: (value: string) => void });

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store, setStore] = useState('');

  return (
    <AppContext.Provider value={{ store, setStore }}>
      {children}
    </AppContext.Provider>
  );
}
