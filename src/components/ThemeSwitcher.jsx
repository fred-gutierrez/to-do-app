import { useEffect, useState } from "react";
import styles from "../styles/modules/ThemeSwitcher.module.css";

import {
  XMarkIcon,
  SunIcon,
  MoonIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";

export default function ThemeSwitcher() {
  const [hue, setHue] = useState("180");
  const [theme, setTheme] = useState("light");
  const [isColorPicking, setIsColorPicking] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--_hue", hue);
  }, [hue]);

  return (
    <aside
      className={styles.wrapper}
      style={{
        backgroundColor: isColorPicking
          ? "hsl(var(--muted) / .6)"
          : "transparent",
      }}
    >
      {isColorPicking ? (
        <>
          <button
            className={`btn ${styles.close}`}
            aria-label="Close color picking mode"
            onClick={() => setIsColorPicking(false)}
          >
            <XMarkIcon />
          </button>
          <input
            className={styles.picker}
            type="range"
            aria-label="Change color theme slider"
            min="0"
            max="360"
            value={hue}
            onInput={(e) => setHue(e.target.value)}
          />
        </>
      ) : (
        <div className={styles.btns}>
          <button
            className="btn"
            aria-label={`Change theme to ${
              theme === "light" ? "dark" : "light"
            } mode`}
            role="switch"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="btn"
            aria-label="Enable color picking mode"
            onClick={() => setIsColorPicking(true)}
          >
            <SwatchIcon />
          </button>
        </div>
      )}
    </aside>
  );
}
