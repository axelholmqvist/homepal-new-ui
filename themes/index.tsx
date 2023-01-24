import { createTheme } from "@mui/material";
import { Palette, PaletteOptions } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    tertiary: PaletteColor;
    quaternary: PaletteColor;
    quinary: PaletteColor;
    black: PaletteColor;
    white: PaletteColor;
    neutral: PaletteColor;
    transparent: {
      /* primary: string; */
      secondary: string;
      /* tertiary: string;
      quaternary: string;
      quinary: string;
      black: string; */
      white: string;
      /* neutral: string; */
      success: string;
      /* info: string;
      warning: string;*/
      error: string;
    };
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    tertiary: PaletteColorOptions;
    quaternary: PaletteColorOptions;
    quinary: PaletteColorOptions;
    black: PaletteColorOptions;
    white: PaletteColorOptions;
    neutral: PaletteColorOptions;
    transparent: {
      /* primary: string; */
      secondary: string;
      /* tertiary: string;
      quaternary: string;
      quinary: string;
      black: string; */
      white: string;
      /* neutral: string; */
      success: string;
      /* info: string;
      warning: string;*/
      error: string;
    };
  }
}

declare module "@mui/material" {
  interface ChipPropsColorOverrides {
    black: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 480,
      sm: 768,
      md: 996,
      lg: 1200,
      xl: 1920,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          minHeight: "100vh",
          width: "100%",
        },
        body: {
          minHeight: "100vh",
          width: "100%",
        },
        a: {
          color: "inherit",
          textDecoration: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "text" && {
            backgroundColor: ownerState.color
              ? `${ownerState.color}.main`
              : undefined,
          }),
        }),
      },
    },
  },
  palette: {
    mode: "light",
    action: {
      active: "rgba(15, 23, 42, 0.54)",
      hover: "rgba(15, 23, 42, 0.04)",
      selected: "rgba(15, 23, 42, 0.08)",
      disabled: "rgba(15, 23, 42, 0.26)",
      disabledBackground: "rgba(15, 23, 42, 0.12)",
      focus: "rgba(15, 23, 42, 0.12)",
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
      /* tooltip: "rgba(71, 85, 105, 0.92)", */
      /* disabled: "#f1f5f9", */
    },
    divider: "#e2e8f0",
    common: {
      black: "#0f172a",
      white: "#ffffff",
    },
    black: {
      main: "#0f172a",
      light: "#1e293b",
      dark: "#0f172a",
      contrastText: "#ffffff",
      /* transparent: "rgba(15, 23, 42, 0.25)", */
    },
    white: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#f8fafc",
      contrastText: "#0f172a",
      /* transparent: "rgba(255, 255, 255, 0.12)", */
    },
    grey: {
      100: "#f8fafc",
      200: "#f1f5f9",
      300: "#e2e8f0",
      400: "#cbd5e1",
      500: "#94a3b8",
      600: "#64748b",
      700: "#475569",
      800: "#334155",
      900: "#1e293b",
    },
    neutral: {
      main: "rgba(15, 23, 42, 0.08)",
      light: "rgba(15, 23, 42, 0.08)",
      dark: "rgba(15, 23, 42, 0.08)",
      contrastText: "#0f172a",
    },
    primary: {
      main: "#22c55e",
      light: "#4ade80",
      dark: "#16a34a",
      contrastText: "#ffffff",
      /* transparent: "rgba(74, 222, 128, 0.25)", */
    },
    secondary: {
      main: "#3b82f6",
      light: "#60a5fa",
      dark: "#2563eb",
      contrastText: "#ffffff",
      /* transparent: "rgba(59, 130, 246, 0.25)", */
      /* transparentGradient: "linear-gradient(0deg, rgba(59,130,246,0) 0%, rgba(59,130,246,1) 100%)" */
    },
    tertiary: {
      main: "#a855f7",
      light: "#c084fc",
      dark: "#9333ea",
      contrastText: "#ffffff",
      /* transparent: "rgba(168, 85, 247, 0.25)", */
    },
    quaternary: {
      main: "#06b6d4",
      light: "#e879f9",
      dark: "#c026d3",
      contrastText: "#ffffff",
      /* transparent: "rgba(232, 121, 249, 0.25)", */
    },
    quinary: {
      main: "#14b8a6",
      light: "#2dd4bf",
      dark: "#0d94883",
      contrastText: "#ffffff",
      /* transparent: "rgba(20, 184, 166, 0.25)", */
    },
    success: {
      main: "#22c55e",
      light: "#4ade80",
      dark: "#16a34a",
      contrastText: "#ffffff",
      /* transparent: "rgba(74, 222, 128, 0.25)", */
    },
    info: {
      main: "#3b82f6",
      light: "#60a5fa",
      dark: "#2563eb",
      contrastText: "#ffffff",
      /* transparent: "rgba(59,130,246, 0.25)", */
    },
    warning: {
      main: "#f59e0b",
      light: "#fbbf24",
      dark: "#d97706",
      contrastText: "#ffffff",
      /* transparent: "rgba(245,158,11, 0.25)", */
    },
    error: {
      main: "#ef4444",
      light: "#f87171",
      dark: "#dc2626",
      contrastText: "#ffffff",
      /* transparent: "rgba(239,68,68, 0.25)", */
    },
    text: {
      primary: "rgba(15, 23, 42, 0.87)",
      secondary: "rgba(15, 23, 42, 0.6)",
      disabled: "rgba(15, 23, 42, 0.38)",
    },
    transparent: {
      secondary: "rgba(59, 130, 246, 0.12)",
      success: "rgba(34, 197, 94, 0.12)",
      error: "rgba(239, 68, 68, 0.12)",
      white: "rgba(255, 255, 255, 0.12)",
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    "none",
    "0px 1px 1px rgba(15, 23, 42, 0.06), 0px 1px 2px rgba(15, 23, 42, 0.1)",
    "0px 1px 2px rgba(15, 23, 42, 0.12)",
    "0px 1px 4px rgba(15, 23, 42, 0.12)",
    "0px 1px 5px rgba(15, 23, 42, 0.12)",
    "0px 1px 6px rgba(15, 23, 42, 0.12)",
    "0px 2px 6px rgba(15, 23, 42, 0.12)",
    "0px 3px 6px rgba(15, 23, 42, 0.12)",
    "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(15, 23, 42, 0.12)",
    "0px 5px 12px rgba(15, 23, 42, 0.12)",
    "0px 5px 14px rgba(15, 23, 42, 0.12)",
    "0px 5px 15px rgba(15, 23, 42, 0.12)",
    "0px 6px 15px rgba(15, 23, 42, 0.12)",
    "0px 7px 15px rgba(15, 23, 42, 0.12)",
    "0px 8px 15px rgba(15, 23, 42, 0.12)",
    "0px 9px 15px rgba(15, 23, 42, 0.12)",
    "0px 10px 15px rgba(15, 23, 42, 0.12)",
    "0px 12px 22px -8px rgba(15, 23, 42, 0.25)",
    "0px 13px 22px -8px rgba(15, 23, 42, 0.25)",
    "0px 14px 24px -8px rgba(15, 23, 42, 0.25)",
    "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
    "0px 25px 50px rgba(15, 23, 42, 0.25)",
    "0px 25px 50px rgba(15, 23, 42, 0.25)",
    "0px 25px 50px rgba(15, 23, 42, 0.25)",
    "0px 25px 50px rgba(15, 23, 42, 0.25)",
  ],
  typography: {
    button: {
      fontWeight: 600,
      textTransform: "none",
      lineHeight: 1.5,
    },
    fontSize: 14,
    fontFamily: ["IBM Plex Sans", "Lato", "Helvetica Neue", "sans-serif"].join(
      ","
    ),
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.57,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      lineHeight: 2.5,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
    },
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.375,
    },
    h2: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.375,
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.375,
    },
    h4: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.375,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.375,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.375,
    },
  },
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
});
