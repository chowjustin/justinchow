"use client";

import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("dark-mode");
    if (savedMode === "enabled") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "enabled");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "disabled");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 bg-gray-200 max-md:text-2xl dark:max-md:bg-white dark:max-md:text-gray-900 max-md:bg-black max-md:text-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 md:duration-1000 rounded-lg"
    >
      {darkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
    </button>
  );
}
