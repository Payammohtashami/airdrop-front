"use client";
import React from "react";
import { ThemeOptions, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { NextAppDirEmotionCacheProvider } from "@/theme/EmotionCache";
import { Montserrat } from "./fonts";

const themeOptions: ThemeOptions = {
    direction: 'ltr',
    palette: {
        mode: 'light',
        primary: {
            main: '#84DCC6',
            dark: '#0CB09D',
            light: '#51B89E',
        },
    },
    typography: {
        fontFamily: Montserrat.style.fontFamily,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    
                }
            }
        }
    }
};
const theme = createTheme(themeOptions);

export default function ThemeRegistery({children}: {children: React.ReactNode}){
    return (
        <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    );
};
