import { uniqueId } from "lodash";

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import {
  IconHome,
  IconLayoutDashboard,
  IconWallet,
  IconNews,
  IconChartHistogram,
  IconAward,
  IconBoxMultiple,
  IconPoint,
  IconAlertCircle,
  IconNotes,
  IconCalendar,
  IconMail,
  IconTicket,
  IconEdit,
  IconGitMerge,
  IconCurrencyDollar,
  IconApps,
  IconFileDescription,
  IconFileDots,
  IconFiles,
  IconBan,
  IconStar,
  IconMoodSmile,
  IconBorderAll,
  IconBorderHorizontal,
  IconBorderInner,
  IconBorderVertical,
  IconBorderTop,
  IconUserCircle,
  IconPackage,
  IconMessage2,
  IconBasket,
  IconChartLine,
  IconChartArcs,
  IconChartCandle,
  IconChartArea,
  IconChartDots,
  IconChartDonut3,
  IconChartRadar,
  IconLogin,
  IconUserPlus,
  IconRotate,
  IconBox,
  IconShoppingCart,
  IconAperture,
  IconLayout,
  IconSettings,
  IconHelp,
  IconZoomCode,
  IconBoxAlignBottom,
  IconBoxAlignLeft,
  IconBorderStyle2,
  IconAppWindow,
} from "@tabler/icons-react";

const Menuitems: MenuitemsType[] = [
  {
    id: uniqueId(),
    title: "Home",
    icon: IconHome,
    href: "/home",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
    chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Wallet",
    icon: IconWallet,
    href: "/wallet",
  },
  {
    id: uniqueId(),
    title: "News",
    icon: IconNews,
    href: "/news",
  },

  {
    id: uniqueId(),
    title: "Stock & fund",
    icon: IconChartHistogram,
    href: "/menu",
    children: [
      {
        id: uniqueId(),
        title: "Stock",
        icon: IconPoint,
        href: "/stock",
      },
      {
        id: uniqueId(),
        title: "Cryptocurrency",
        icon: IconPoint,
        href: "/cryptocurrency",
      },
      {
        id: uniqueId(),
        title: "Mutual Fund",
        icon: IconPoint,
        href: "/mutualfund",
      },
      {
        id: uniqueId(),
        title: "Gold",
        icon: IconPoint,
        href: "/gold",
      }
    ],
  },
];

export default Menuitems;
