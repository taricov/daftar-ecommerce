import { ThemeProvider } from "@emotion/react";
import { PaletteMode, createTheme } from "@mui/material";
import * as locales from '@mui/material/locale';
import React, { createContext, useEffect, useMemo, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { TsupportedLocales } from "./@types/types.ts";
import { LoadingProvider } from "./components/commonUI/GlobalLoader/LoadingProvider.tsx";
import AdminDefalutLayout from "./layouts/DefaultAdmin/index.tsx";
import ShopDefalutLayout from "./layouts/DefaultShop/index.tsx";
import LayoutWrapper from "./layouts/index.tsx";
import About from "./pages/AdminPages/About/index.tsx";
import Error404 from "./pages/AdminPages/Error404/index.tsx";
import Home from "./pages/AdminPages/Home/index.tsx";
import Shop from "./pages/Shop";
import Settings from "./pages/AdminPages/Settings/index.tsx";
import { RTLprovider } from "./components/commonUI/GlobalRTL/RTLprovider.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <LayoutWrapper layout={AdminDefalutLayout} component={Home} />
      </>
    ),
  },
  {
    path: "/settings/users",
    element: (
      <>
        <LayoutWrapper layout={AdminDefalutLayout} component={About} />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <LayoutWrapper layout={AdminDefalutLayout} component={About} />
      </>
    ),
  },
  {
    path: "/settings",
    element: (
      <>
        <LayoutWrapper layout={AdminDefalutLayout} component={Settings} />
      </>
    ),
  },
  {
    path: "/shop",
    element: (
      <>
        <LayoutWrapper layout={ShopDefalutLayout} component={Shop} />
      </>
    ),
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

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
