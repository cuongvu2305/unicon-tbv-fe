/**
 * Raw brand color values, mirrored from the CSS custom properties in
 * `src/app/globals.css`. Use these only where Tailwind classes can't reach
 * (inline SVG fills, canvas, `theme-color` meta tag, etc). Everywhere else,
 * prefer the Tailwind utility classes (`bg-navy-900`, `text-gold-500`, ...).
 */
export const brand = {
  navy: {
    50: "#eef0fb",
    100: "#d6d9f3",
    200: "#adb2e6",
    300: "#7d84d3",
    400: "#4d55b8",
    500: "#2f3696",
    600: "#1f2574",
    700: "#171b5c",
    800: "#12154a",
    900: "#0e1039",
    950: "#090a28",
  },
  gold: {
    50: "#fdf8e7",
    100: "#fbedbe",
    200: "#f8dd85",
    300: "#f5cc4c",
    400: "#f2bf24",
    500: "#eab308",
    600: "#c99406",
    700: "#a17408",
    800: "#855e0d",
    900: "#714e10",
  },
} as const;
