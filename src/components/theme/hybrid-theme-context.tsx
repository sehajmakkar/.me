"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTheme as useNextTheme } from 'next-themes';

// Define color palettes (same as before)
export const colorPalettes = {
  zinc: {
    name: 'Zinc',
    primary: '240 5.9% 10%',
    primaryForeground: '0 0% 98%',
    secondary: '240 4.8% 95.9%',
    secondaryForeground: '240 5.9% 10%',
    accent: '240 4.8% 95.9%',
    accentForeground: '240 5.9% 10%',
    muted: '240 4.8% 95.9%',
    mutedForeground: '240 3.8% 46.1%',
    border: '240 5.9% 90%',
    input: '240 5.9% 90%',
    ring: '240 5.9% 10%',
  },
  slate: {
    name: 'Slate',
    primary: '222.2 84% 4.9%',
    primaryForeground: '210 40% 98%',
    secondary: '210 40% 96%',
    secondaryForeground: '222.2 84% 4.9%',
    accent: '210 40% 96%',
    accentForeground: '222.2 84% 4.9%',
    muted: '210 40% 96%',
    mutedForeground: '215.4 16.3% 46.9%',
    border: '214.3 31.8% 91.4%',
    input: '214.3 31.8% 91.4%',
    ring: '222.2 84% 4.9%',
  },
  stone: {
    name: 'Stone',
    primary: '24 9.8% 10%',
    primaryForeground: '60 9.1% 97.8%',
    secondary: '60 4.8% 95.9%',
    secondaryForeground: '24 9.8% 10%',
    accent: '60 4.8% 95.9%',
    accentForeground: '24 9.8% 10%',
    muted: '60 4.8% 95.9%',
    mutedForeground: '25 5.3% 44.7%',
    border: '60 4.8% 90%',
    input: '60 4.8% 90%',
    ring: '24 9.8% 10%',
  },
  gray: {
    name: 'Gray',
    primary: '220 14.3% 95.9%',
    primaryForeground: '220 8.9% 46.1%',
    secondary: '220 14.3% 95.9%',
    secondaryForeground: '220 8.9% 46.1%',
    accent: '220 14.3% 95.9%',
    accentForeground: '220 8.9% 46.1%',
    muted: '220 14.3% 95.9%',
    mutedForeground: '220 8.9% 46.1%',
    border: '220 13% 91%',
    input: '220 13% 91%',
    ring: '220 8.9% 46.1%',
  },
  neutral: {
    name: 'Neutral',
    primary: '0 0% 9%',
    primaryForeground: '0 0% 98%',
    secondary: '0 0% 96.1%',
    secondaryForeground: '0 0% 9%',
    accent: '0 0% 96.1%',
    accentForeground: '0 0% 9%',
    muted: '0 0% 96.1%',
    mutedForeground: '0 0% 45.1%',
    border: '0 0% 89.8%',
    input: '0 0% 89.8%',
    ring: '0 0% 3.9%',
  },
  red: {
    name: 'Red',
    primary: '0 72.2% 50.6%',
    primaryForeground: '0 85.7% 97.3%',
    secondary: '0 100% 96.9%',
    secondaryForeground: '0 93.5% 31.8%',
    accent: '0 100% 96.9%',
    accentForeground: '0 93.5% 31.8%',
    muted: '0 100% 96.9%',
    mutedForeground: '0 13% 45.1%',
    border: '0 92% 90%',
    input: '0 92% 90%',
    ring: '0 72.2% 50.6%',
  },
  rose: {
    name: 'Rose',
    primary: '346.8 77.2% 49.8%',
    primaryForeground: '355.7 100% 97.3%',
    secondary: '357.1 100% 96.5%',
    secondaryForeground: '346.3 77.2% 49.8%',
    accent: '357.1 100% 96.5%',
    accentForeground: '346.3 77.2% 49.8%',
    muted: '357.1 100% 96.5%',
    mutedForeground: '346.8 9% 45.1%',
    border: '357 89% 90%',
    input: '357 89% 90%',
    ring: '346.8 77.2% 49.8%',
  },
  orange: {
    name: 'Orange',
    primary: '20.5 90.2% 48.2%',
    primaryForeground: '60 9.1% 97.8%',
    secondary: '33 100% 96.5%',
    secondaryForeground: '20.5 90.2% 48.2%',
    accent: '33 100% 96.5%',
    accentForeground: '20.5 90.2% 48.2%',
    muted: '33 100% 96.5%',
    mutedForeground: '30 5.3% 45.1%',
    border: '33 92% 90%',
    input: '33 92% 90%',
    ring: '20.5 90.2% 48.2%',
  },
  green: {
    name: 'Green',
    primary: '142.1 76.2% 36.3%',
    primaryForeground: '355.7 100% 97.3%',
    secondary: '138.5 76.2% 96.7%',
    secondaryForeground: '142.1 70.6% 45.3%',
    accent: '138.5 76.2% 96.7%',
    accentForeground: '142.1 70.6% 45.3%',
    muted: '138.5 76.2% 96.7%',
    mutedForeground: '142.1 8% 45.1%',
    border: '139 85% 90%',
    input: '139 85% 90%',
    ring: '142.1 76.2% 36.3%',
  },
  blue: {
    name: 'Blue',
    primary: '221.2 83.2% 53.3%',
    primaryForeground: '210 40% 98%',
    secondary: '214.3 31.8% 91.4%',
    secondaryForeground: '222.2 84% 4.9%',
    accent: '214.3 31.8% 91.4%',
    accentForeground: '222.2 84% 4.9%',
    muted: '214.3 31.8% 91.4%',
    mutedForeground: '215.4 16.3% 46.9%',
    border: '214.3 31.8% 91.4%',
    input: '214.3 31.8% 91.4%',
    ring: '221.2 83.2% 53.3%',
  },
  yellow: {
    name: 'Yellow',
    primary: '47.9 95.8% 53.1%',
    primaryForeground: '26 83.3% 14.1%',
    secondary: '60 4.8% 95.9%',
    secondaryForeground: '24 9.8% 10%',
    accent: '60 4.8% 95.9%',
    accentForeground: '24 9.8% 10%',
    muted: '60 4.8% 95.9%',
    mutedForeground: '25 5.3% 44.7%',
    border: '60 4.8% 90%',
    input: '60 4.8% 90%',
    ring: '47.9 95.8% 53.1%',
  },
  violet: {
    name: 'Violet',
    primary: '262.1 83.3% 57.8%',
    primaryForeground: '210 40% 98%',
    secondary: '270 3.2% 95.9%',
    secondaryForeground: '240 5.9% 10%',
    accent: '270 3.2% 95.9%',
    accentForeground: '240 5.9% 10%',
    muted: '270 3.2% 95.9%',
    mutedForeground: '240 3.8% 46.1%',
    border: '270 5.9% 90%',
    input: '270 5.9% 90%',
    ring: '262.1 83.3% 57.8%',
  },
};

interface ColorThemeContextType {
  currentTheme: string;
  radius: number;
  setTheme: (theme: string) => void;
  setRadius: (radius: number) => void;
  generateRandomTheme: () => void;
}

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined);

export const useColorTheme = () => {
  const context = useContext(ColorThemeContext);
  if (!context) {
    throw new Error('useColorTheme must be used within a ColorThemeProvider');
  }
  return context;
};

export const ColorThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('neutral');
  const [radius, setRadiusState] = useState(0.5);
  const { theme: nextTheme } = useNextTheme(); // Get theme from next-themes

  const applyColorTheme = (themeName: string, radiusValue: number) => {
    const theme = colorPalettes[themeName as keyof typeof colorPalettes];
    if (!theme) return;

    const root = document.documentElement;
    
    // Apply color variables
    Object.entries(theme).forEach(([key, value]) => {
      if (key !== 'name') {
        const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        root.style.setProperty(`--${cssVar}`, value);
      }
    });

    // Apply radius
    root.style.setProperty('--radius', `${radiusValue}rem`);
  };

  const setTheme = (theme: string) => {
    setCurrentTheme(theme);
    applyColorTheme(theme, radius);
    localStorage.setItem('portfolio-color-theme', theme);
  };

  const setRadius = (newRadius: number) => {
    setRadiusState(newRadius);
    applyColorTheme(currentTheme, newRadius);
    localStorage.setItem('portfolio-radius', newRadius.toString());
  };

  const generateRandomTheme = () => {
    const themes = Object.keys(colorPalettes);
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    const randomRadius = [0, 0.3, 0.5, 0.75, 1.0][Math.floor(Math.random() * 5)];
    
    setCurrentTheme(randomTheme);
    setRadiusState(randomRadius);
    applyColorTheme(randomTheme, randomRadius);
    
    localStorage.setItem('portfolio-color-theme', randomTheme);
    localStorage.setItem('portfolio-radius', randomRadius.toString());
  };

  useEffect(() => {
    // Load saved color preferences
    const savedTheme = localStorage.getItem('portfolio-color-theme') || 'neutral';
    const savedRadius = parseFloat(localStorage.getItem('portfolio-radius') || '0.5');

    setCurrentTheme(savedTheme);
    setRadiusState(savedRadius);
    applyColorTheme(savedTheme, savedRadius);
  }, []);

  // Re-apply color theme when next-themes changes (for proper dark mode support)
  useEffect(() => {
    if (currentTheme) {
      applyColorTheme(currentTheme, radius);
    }
  }, [nextTheme, currentTheme, radius]);

  return (
    <ColorThemeContext.Provider value={{
      currentTheme,
      radius,
      setTheme,
      setRadius,
      generateRandomTheme,
    }}>
      {children}
    </ColorThemeContext.Provider>
  );
};