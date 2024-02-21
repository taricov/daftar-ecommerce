/* eslint-disable @typescript-eslint/no-explicit-any */
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import { TsidebarStruct } from '../../../@types/types';

export default [
  {
    icon: <HomeOutlined/>,
    title: "tab1",
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
      },
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