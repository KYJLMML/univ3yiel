// app/LayoutContext.js
'use client';
import { createContext, useContext, useState } from 'react';

const LayoutContext = createContext();

export function LayoutProvider({ children }) {
  const [showLayout, setShowLayout] = useState(false);
  
  const resetLayout = () => {
    setShowLayout(false);
  };

  return (
    <LayoutContext.Provider value={{ 
      showLayout, 
      setShowLayout,
      resetLayout 
    }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
}