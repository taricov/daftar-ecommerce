import { ThemeProvider } from "@emotion/react";
import { PaletteMode, createTheme } from "@mui/material";
import * as locales from '@mui/material/locale';
import React, { createContext, useEffect, useMemo, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./@services/routes.tsx";
import { TsupportedLocales } from "./@types/types.ts";
import { LoadingProvider } from "./components/commonUI/GlobalLoader/LoadingProvider.tsx";
import { RTLprovider } from "./components/commonUI/GlobalRTL/RTLprovider.tsx";

export const ColorModeContext = createContext<{
  mode: PaletteMode;
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
} | null>(null);
export const localeContext = createContext<{ locale: TsupportedLocales; setLocale: React.Dispatch<TsupportedLocales>; } | null>(null);

function App() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const [locale, setLocale] = useState<TsupportedLocales>("enUS");
  const colorMode = { mode, setMode };
  const localeValue = { locale, setLocale };
useEffect(() => {
  locale === "arEG" ? document.dir = "rtl" : null

}, [locale])

  const theme = useMemo(
    () =>
      createTheme({
        typography:{
          fontFamily: [
            'Alexandria',
            'sans-serif'
          ].join(','),
        },
        direction: locale === "arEG" ? "rtl" : "ltr",
        components: {
          MuiButtonBase: {
            defaultProps: {
              disableRipple: true,
            },
          },
        },
        palette: { mode },
      }, locales[locale]),
    [mode, locale]
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        {locale === "arEG" ? (
        <RTLprovider>
        <LoadingProvider>
          <ColorModeContext.Provider value={colorMode}>
          <localeContext.Provider value={localeValue}>
              <RouterProvider router={router} />
          </localeContext.Provider>
          </ColorModeContext.Provider>
        </LoadingProvider>
        </RTLprovider>
        ):
        (
          <LoadingProvider>
            <ColorModeContext.Provider value={colorMode}>
            <localeContext.Provider value={localeValue}>
                <RouterProvider router={router} />
            </localeContext.Provider>
            </ColorModeContext.Provider>
          </LoadingProvider>
          )
      }
      </ThemeProvider>
    </>
  );
}

export default App;
