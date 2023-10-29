'use client';

import React, { useState, createContext, useContext } from 'react';
import type { SectionName } from '@/lib/types';

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClicked: number;
  setTimeOfLastClicked: React.Dispatch<React.SetStateAction<number>>;
  active: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

//? The create context hook is called here
//? This creates the context to be consumed by the useContext hook
const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

//? This component wraps the entire section of the app we want the context to be available
//? This components receives a children prop
const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClicked, setTimeOfLastClicked] = useState(0);
  const [active, setIsActive] = useState<boolean>(false);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClicked,
        setTimeOfLastClicked,
        active,
        setIsActive,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

//? This consumes the created context and is abstracted away from other components
export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    );
  }

  return context;
};

export default ActiveSectionContextProvider;
