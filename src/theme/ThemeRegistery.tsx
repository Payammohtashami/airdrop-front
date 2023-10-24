"use client";
import React from "react";
import { ThemeOptions, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { NextAppDirEmotionCacheProvider } from "@/theme/EmotionCache";
import { Montserrat } from "./fonts";

const themeOptions: ThemeOptions = {
    direction: 'rtl',
    palette: {
        mode: 'light',
        primary: {
            main: '#007aff',
            dark: '#0661dc',
            light: '#00a8ff',
            "100": 'linear-gradient(-45deg, rgba(6,97,220,1) 0%, rgba(0,168,255,1) 100%)'
        },
    },
    typography: {
        fontFamily: Montserrat.style.fontFamily,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    '& .MuiButton-endIcon': {
                        marginLeft: '-4px !important', 
                        marginRight: '8px !important',
                    },
                    '& .MuiButton-startIcon': {
                        marginLeft: '8px !important', 
                        marginRight:'-4px !important',
                    },
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
