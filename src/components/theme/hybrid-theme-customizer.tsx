"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Palette, Sun, Moon, Shuffle } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useColorTheme, colorPalettes } from './hybrid-theme-context';

interface ThemeCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({ isOpen, onClose }) => {
  const { currentTheme, radius, setTheme, setRadius, generateRandomTheme } = useColorTheme();
  const { theme, setTheme: setNextTheme } = useTheme();

  const radiusOptions = [
    { value: 0, label: '0' },
    { value: 0.3, label: '0.3' },
    { value: 0.5, label: '0.5' },
    { value: 0.75, label: '0.75' },
    { value: 1.0, label: '1.0' },
  ];

  const getColorPreview = (themeName: string) => {
    const themeData = colorPalettes[themeName as keyof typeof colorPalettes];
    return `hsl(${themeData.primary})`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-background border border-border rounded-lg shadow-2xl z-50 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Customize Portfolio</h2>
              </div>
              <button
                onClick={onClose}
                className="p-1 hover:bg-accent rounded-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Tagline */}
              <p className="text-sm text-muted-foreground">
                Tweak it, twist it, make it funky!
              </p>

              {/* Color Section */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Color</h3>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(colorPalettes).map(([key, themeData]) => (
                    <button
                      key={key}
                      onClick={() => setTheme(key)}
                      className={`
                        flex items-center gap-2 p-2 rounded-md border transition-all text-sm
                        ${currentTheme === key 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border hover:border-primary/50'
                        }
                      `}
                    >
                      <div
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: getColorPreview(key) }}
                      />
                      {themeData.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Radius Section */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Radius</h3>
                <div className="flex gap-2">
                  {radiusOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setRadius(option.value)}
                      className={`
                        px-3 py-2 text-sm rounded-md border transition-all min-w-[50px]
                        ${radius === option.value 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border hover:border-primary/50'
                        }
                      `}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mode Section */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Mode</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setNextTheme('light')}
                    className={`
                      flex items-center gap-2 px-4 py-3 rounded-md border transition-all text-sm flex-1 justify-center
                      ${theme === 'light' 
                        ? 'border-primary bg-primary/10' 
                        : 'border-border hover:border-primary/50'
                      }
                    `}
                  >
                    <Sun className="w-4 h-4" />
                    Light
                  </button>
                  <button
                    onClick={() => setNextTheme('dark')}
                    className={`
                      flex items-center gap-2 px-4 py-3 rounded-md border transition-all text-sm flex-1 justify-center
                      ${theme === 'dark' 
                        ? 'border-primary bg-primary/10' 
                        : 'border-border hover:border-primary/50'
                      }
                    `}
                  >
                    <Moon className="w-4 h-4" />
                    Dark
                  </button>
                </div>
              </div>

              {/* Random Theme Button */}
              <div className="pt-4 border-t border-border">
                <button
                  onClick={generateRandomTheme}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  <Shuffle className="w-4 h-4" />
                  Surprise Me!
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};