import flowbitePlugin from "flowbite/plugin";

import type { Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
    darkMode: "selector",
  theme: {
        extend: {
          fontFamily: {sans: ["Poppins", ...defaultTheme.fontFamily.sans] },
            colors: {
                // flowbite-svelte
                primary: {
                    "50": "#FDF2F8",
                    "100": "#FCE8F3",
                    "200": "#FAD1E8",
                    "300": "#F8B4D9",
                    "400": "#F17EB8",
                    "500": "#E74694",
                    "600": "#D61F69",
                    "700": "#BF125D",
                    "800": "#99154B",
                    "900": "#751A3D",
                },
            },
        },
    },

    plugins: [flowbitePlugin],
} as Config;