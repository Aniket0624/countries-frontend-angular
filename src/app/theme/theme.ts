export interface Theme {
    name: string;
    properties: any;
}

export const light: Theme = {
    name: "light",
    properties: {
        "--background-color": "hsl(0, 0%, 92%)",
        "--background-color-lighter": "white",
        "--font-color": "black",
        "--button-hover-color": "hsl(0, 0%, 80%)",
        "--individual-country-font-color": "black",
        "--dark-mode-btn-color": "hsl(207, 26%, 17%)"
    }
};

export const dark: Theme = {
    name: "dark",
    properties: {
        "--background-color": "hsl(207, 26%, 17%)",
        "--background-color-lighter": "hsl(209, 23%, 22%)",
        "--font-color": "white",
        "--button-hover-color": "hsl(209, 23%, 30%)",
        "--individual-country-font-color": "hsl(209, 23%, 80%)",
        "--dark-mode-btn-color": "hsl(0, 0%, 92%)"

    }
};