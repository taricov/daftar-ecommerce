/* eslint-disable @typescript-eslint/no-explicit-any */
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ReactElement } from 'react';


type TsidebarStruct =   {
  icon:  ReactElement<OverridableComponent<SvgIconTypeMap<"svg">> & {muiName: string}>;
  title: string;
  to?: string;
  items?: any[];
}

export default [
  {
    icon: <HomeOutlined/>,
    title: "tab1",
    items: [],
    to: "/",
  },
  {
    icon: <LocalLibraryOutlinedIcon/>,
    title: "tab2",
    to: "/thedowtheory",
    items: [
      {
        title: "Technical Analysis",
        icon: <HomeOutlined/>,
        to: "/",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory"
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart"
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines"
          },
          {
            title: "Support & Resistance",
            to: "/sandr"
          }
        ]
      },
      {
        title: "Fundamental Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory"
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart"
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines"
          },
          {
            title: "Support & Resistance",
            to: "/sandr"
          }
        ]
      },
      {
        title: "Elliot Wave Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory"
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart"
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines"
          },
          {
            title: "Support & Resistance",
            to: "/sandr"
          }
        ]
      }
    ]
  },
  {
    icon: <TrendingUpOutlinedIcon/>,
    title: "tab3"
  },
  {
    icon: <DescriptionOutlinedIcon/>,
    title: "tab4",
    to: "/about"

  },
  {
    icon: <DescriptionOutlinedIcon/>,
    title: "tab5",
    to: "/settings",
    items:[
      {
        title: "tab5",
        to: "/settings",
      },
      {
        title: "tab6",
        to: "/settings/users"
    
      }
    ]

  }
] satisfies TsidebarStruct[];