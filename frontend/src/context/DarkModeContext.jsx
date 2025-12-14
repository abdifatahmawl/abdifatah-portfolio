import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then default to false (light mode)
    try {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) {
        const isDarkMode = JSON.parse(saved);
        // Apply initial class immediately
        if (isDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return isDarkMode;
      }
    } catch (error) {
      console.error('Error reading darkMode from localStorage:', error);
    }
    // Default to light mode
    document.documentElement.classList.remove('dark');
    return false;
  });

  useEffect(() => {
    // Update the HTML class and localStorage when dark mode changes
    try {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('darkMode', JSON.stringify(isDark));
    } catch (error) {
      console.error('Error updating darkMode:', error);
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(prev => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

