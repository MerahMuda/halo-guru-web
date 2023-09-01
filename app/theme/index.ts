'use client'

import { createTheme } from "@mui/material";
import { palette } from "./palette";
import { typography } from "./typography";
const theme = createTheme({
    palette,
    typography,
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'DM sans';
              font-style: normal;
            }
          `,
        },
    },
})

export default theme;