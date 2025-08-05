"use client";
import React from "react";
import {
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  TouchIdIcon,
  BrightnessDownIcon,
  BrightnessUpIcon,
  MissionControlIcon,
  SearchIcon,
  MicIcon,
  MoonIcon,
  RewindIcon,
  PlayPauseIcon,
  FastForwardIcon,
  MuteIcon,
  VolumeDownIcon,
  VolumeUpIcon,
  GithubIcon,
  LinkedInIcon,
  XIcon,
} from "./svgs";

// Key component for individual keys. Height is now passed via className.
interface KeyProps {
  children: React.ReactNode;
  className?: string;
}

const Key: React.FC<KeyProps> = ({ children, className = "" }) => {
  const baseClasses = `flex items-center justify-center rounded-md bg-[#0A090D] text-zinc-300 font-light shadow-lg shadow-white/50 text-sm transition-all duration-200 ease-out`;
  const defaultStateClasses = `shadow-[rgb(13,13,15)_0px_-0.5px_2px_0px_inset,_rgb(13,13,15)_-0.5px_0px_2px_0px_inset]`;
  const hoverClasses = `transition-transform duration-100 hover:shadow-none hover:scale-[0.98] hover:translate-y-px`;
  const activeClasses = `active:scale-95 active:shadow-inner active:bg-black/80`;

  const playSound = () => {
    try {
      const audio = new Audio("/press.wav");
      audio.volume = 0.3; // Set volume to 30% to avoid being too loud
      audio.currentTime = 0; // Reset to beginning in case it's already playing
      audio.play().catch((error) => {
        console.log("Audio play failed:", error);
      });
    } catch (error) {
      console.log("Audio creation failed:", error);
    }
  };

  return (
    <button
      className={`${baseClasses} ${defaultStateClasses} ${hoverClasses} ${activeClasses} ${className}`}
      onClick={playSound}
    >
      {children}
    </button>
  );
};

// A special component for the arrow key group, using half-height keys to fit in a single row.
const ArrowKeys = () => (
  <div className="flex flex-col gap-1">
    <div className="flex justify-center">
      <Key className="w-12 h-5.5">
        <ArrowUp />
      </Key>
    </div>
    <div className="flex gap-1">
      <Key className="w-12 h-5.5">
        <ArrowLeft />
      </Key>
      <Key className="w-12 h-5.5">
        <ArrowDown />
      </Key>
      <Key className="w-12 h-5.5">
        <ArrowRight />
      </Key>
    </div>
  </div>
);

// Main Keyboard Component
type KeyDef = {
  label: string;
  type: string;
  primary: React.ReactNode;
  secondary?: React.ReactNode;
};

export default function Keyboard() {
  // Each key is now an object with a unique label, a type for rendering, and primary/secondary content.
  const keyRows: KeyDef[][] = [
    [
      { label: "esc", type: "special-text", primary: "esc" },
      {
        label: "F1",
        type: "icon",
        primary: "F1",
        secondary: <BrightnessDownIcon />,
      },
      {
        label: "F2",
        type: "icon",
        primary: "F2",
        secondary: <BrightnessUpIcon />,
      },
      {
        label: "F3",
        type: "icon",
        primary: "F3",
        secondary: <MissionControlIcon />,
      },
      { label: "F4", type: "icon", primary: "F4", secondary: <SearchIcon /> },
      { label: "F5", type: "icon", primary: "F5", secondary: <MicIcon /> },
      { label: "F6", type: "icon", primary: "F6", secondary: <MoonIcon /> },
      { label: "F7", type: "icon", primary: "F7", secondary: <RewindIcon /> },
      {
        label: "F8",
        type: "icon",
        primary: "F8",
        secondary: <PlayPauseIcon />,
      },
      {
        label: "F9",
        type: "icon",
        primary: "F9",
        secondary: <FastForwardIcon />,
      },
      { label: "F10", type: "icon", primary: "F10", secondary: <MuteIcon /> },
      {
        label: "F11",
        type: "icon",
        primary: "F11",
        secondary: <VolumeDownIcon />,
      },
      {
        label: "F12",
        type: "icon",
        primary: "F12",
        secondary: <VolumeUpIcon />,
      },
      { label: "power", type: "touch-id", primary: <TouchIdIcon /> },
    ],
    [
      { label: "`", type: "dual-text", primary: "~", secondary: "`" },
      { label: "1", type: "dual-text", primary: "!", secondary: "1" },
      { label: "2", type: "dual-text", primary: "@", secondary: "2" },
      { label: "3", type: "dual-text", primary: "#", secondary: "3" },
      { label: "4", type: "dual-text", primary: "$", secondary: "4" },
      { label: "5", type: "dual-text", primary: "%", secondary: "5" },
      { label: "6", type: "dual-text", primary: "^", secondary: "6" },
      { label: "7", type: "dual-text", primary: "&", secondary: "7" },
      { label: "8", type: "dual-text", primary: "*", secondary: "8" },
      { label: "9", type: "dual-text", primary: "(", secondary: "9" },
      { label: "0", type: "dual-text", primary: ")", secondary: "0" },
      { label: "-", type: "dual-text", primary: "_", secondary: "-" },
      { label: "=", type: "dual-text", primary: "+", secondary: "=" },
      { label: "delete", type: "special-text-right", primary: "delete" },
    ],
    [
      { label: "tab", type: "special-text", primary: "tab" },
      { label: "Q", type: "single-text", primary: "Q" },
      { label: "W", type: "single-text", primary: "W" },
      { label: "E", type: "single-text", primary: "E" },
      { label: "R", type: "single-text", primary: "R" },
      { label: "T", type: "single-text", primary: "T" },
      { label: "Y", type: "single-text", primary: "Y" },
      { label: "U", type: "single-text", primary: "U" },
      { label: "I", type: "single-text", primary: "I" },
      { label: "O", type: "single-text", primary: "O" },
      { label: "P", type: "single-text", primary: "P" },
      { label: "[", type: "dual-text", primary: "{", secondary: "[" },
      { label: "]", type: "dual-text", primary: "}", secondary: "]" },
      { label: "\\", type: "dual-text", primary: "|", secondary: "\\" },
    ],
    [
      { label: "caps lock", type: "special-text", primary: "caps lock" },
      { label: "A", type: "single-text", primary: "A" },
      { label: "S", type: "single-text", primary: "S" },
      { label: "D", type: "single-text", primary: "D" },
      { label: "F", type: "single-text", primary: "F" },
      { label: "G", type: "single-text", primary: "G" },
      { label: "H", type: "single-text", primary: "H" },
      { label: "J", type: "single-text", primary: "J" },
      { label: "K", type: "single-text", primary: "K" },
      { label: "L", type: "single-text", primary: "L" },
      { label: ";", type: "dual-text", primary: ":", secondary: ";" },
      { label: "'", type: "dual-text", primary: '"', secondary: "'" },
      { label: "return", type: "special-text-right", primary: "return" },
    ],
    [
      { label: "shift", type: "special-text", primary: "shift" },
      { label: "Z", type: "single-text", primary: "Z" },
      { label: "X", type: "single-text", primary: "X" },
      { label: "C", type: "single-text", primary: "C" },
      { label: "V", type: "single-text", primary: "V" },
      { label: "B", type: "single-text", primary: "B" },
      { label: "N", type: "single-text", primary: "N" },
      { label: "M", type: "single-text", primary: "M" },
      { label: ",", type: "dual-text", primary: "<", secondary: "," },
      { label: ".", type: "dual-text", primary: ">", secondary: "." },
      { label: "/", type: "dual-text", primary: "?", secondary: "/" },
      { label: "shift_right", type: "special-text-right", primary: "shift" },
    ],
    [
      { label: "fn", type: "special-text", primary: "fn" },
      { label: "control", type: "special-text", primary: "control" },
      { label: "option", type: "special-text", primary: "option" },
      {
        label: "command",
        type: "command-left",
        primary: "⌘",
        secondary: "command",
      },
      { label: "space", type: "space", primary: "" },
      {
        label: "command_right",
        type: "command-right",
        primary: "⌘",
        secondary: "command",
      },
      { label: "option_right", type: "special-text-right", primary: "option" },
      { label: "Arrows", type: "arrows", primary: "" },
    ],
  ];

  // Gets styling for a key based on its unique label.

  const getKeyClass = (keyLabel: string): string => {
    const keyLower = keyLabel.toLowerCase();
    let classes = "w-15 h-12"; // Default for 1-unit keys

    switch (keyLower) {
      case "delete":
        classes = "w-32 h-12";
        break;
      case "tab":
        classes = "w-24 h-12";
        break;
      case "\\":
        classes = "w-24 h-12";
        break;
      case "caps lock":
        classes = "w-28 h-12";
        break;
      case "return":
        classes = "w-36 h-12";
        break;
      case "shift":
        classes = "w-40 h-12";
        break;
      case "shift_right":
        classes = "w-40 h-12";
        break;
      case "command":
      case "command_right":
        classes = "w-14 h-12";
        break;
      case "space":
        classes = "flex-grow h-12";
        break;
    }
    return classes;
  };

  // Renders the content of a key based on its type.
  const getKeyContent = (key: KeyDef) => {
    switch (key.type) {
      case "icon":
        return (
          <div className="flex flex-col items-center justify-center h-full text-zinc-400">
            {key.secondary}
            <span className="text-[10px] mt-1.5">{key.primary}</span>
          </div>
        );
      case "dual-text":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full">
            <span className="text-xs text-zinc-400">{key.primary}</span>
            <span className="text-sm">{key.secondary}</span>
          </div>
        );
      case "special-text":
        return (
          <div className="relative w-full h-full">
            <span className="absolute bottom-2 left-2.5 text-[10px]">
              {key.primary}
            </span>
          </div>
        );
      case "special-text-right":
        return (
          <div className="relative w-full h-full">
            <span className="absolute bottom-2 right-2.5 text-[10px]">
              {key.primary}
            </span>
          </div>
        );
      case "command":
        return <span className="text-md">{key.primary}</span>;
      case "command-left":
        return (
          <div className="relative w-full h-full">
            <span className="absolute top-2 left-1.5 text-sm">
              {key.primary}
            </span>
            <span className="absolute bottom-1.5 left-1.5 text-[10px]">
              {key.secondary}
            </span>
          </div>
        );
      case "command-right":
        return (
          <div className="relative w-full h-full">
            <span className="absolute top-2 right-1.5 text-sm">
              {key.primary}
            </span>
            <span className="absolute bottom-1.5 right-1.5 text-[10px]">
              {key.secondary}
            </span>
          </div>
        );
      case "touch-id":
      case "power":
      case "single-text":
      default:
        return (
          <div className="flex items-center justify-center h-full w-full">
            {key.primary}
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-start md:justify-center p-4 font-sans overflow-x-auto">
      <div className="w-[800px] min-w-[800px] mt-8">
        <div className="flex justify-end mb-2">
          <p className="text-zinc-500 text-xs font-light">sound on!</p>
        </div>
        <div className="bg-[#303033] backdrop-blur-xl p-3 rounded-2xl shadow-2xl shadow-black/50">
          <div className="flex flex-col gap-1.5">
            {keyRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-between gap-1.5 w-full items-center">
                {row.map((key) => {
                  if (key.type === "arrows") {
                    return <ArrowKeys key={key.label} />;
                  }

                  if (key.label.toLowerCase() === "power") {
                    return (
                      <React.Fragment key={key.label}>
                        {/* <div className="flex-grow"></div> */}
                        <Key className={getKeyClass(key.label)}>
                          {getKeyContent(key)}
                        </Key>
                      </React.Fragment>
                    );
                  }

                  const fkeyClass = getKeyClass(key.label);

                  return (
                    <Key key={key.label} className={fkeyClass}>
                      {getKeyContent(key)}
                    </Key>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}