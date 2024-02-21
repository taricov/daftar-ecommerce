import * as locales from '@mui/material/locale';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { ReactElement } from 'react';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';


export type LoadingContextType = {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  };

  export type TsupportedLocales = keyof typeof locales;

  export interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }


  type TsidebarItem = {
    title: string;
    icon?:  ReactElement<OverridableComponent<SvgIconTypeMap<"svg">> & {muiName: string}>;
    to?: string;
  }


  export type TsidebarStruct =   {
    icon:  ReactElement<OverridableComponent<SvgIconTypeMap<"svg">> & {muiName: string}>;
    title: string;
    to?: string;
    items?: TsidebarItem[];
  }
  