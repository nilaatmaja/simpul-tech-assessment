import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryColor: "#e78900",
                primaryBlack: "#333333",
                primaryBlue: "#2F80ED",
                primaryGray: "#F2F2F2",
                primaryPurple: "#8785FF",
                primaryOrange: "#F8B76B",
                primaryRed: "#EB5757",
                chatPurple: "#9B51E0",
                chatbgPurple: "#EEDCFF",
                chatOrange: "#E5A443",
                chatbgOrange: "#FCEED3",
                chatGreen: "#43B78D",
                chatbgGreen: "#D2F2EA",
            },
            boxShadow: {
                widgetShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
