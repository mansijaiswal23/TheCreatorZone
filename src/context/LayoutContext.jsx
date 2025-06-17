// src/context/LayoutContext.js
import { createContext, useContext, useState } from 'react';

const LayoutContext = createContext(null); // Initialize with null

export const LayoutProvider = ({ children }) => {
  const [showFixedComponent, setShowFixedComponent] = useState(true);

  return (
    <LayoutContext.Provider value={{ showFixedComponent, setShowFixedComponent }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (context === null) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};