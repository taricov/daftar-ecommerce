import * as locales from '@mui/material/locale';


export type LoadingContextType = {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  };

  export type TsupportedLocales = keyof typeof locales;