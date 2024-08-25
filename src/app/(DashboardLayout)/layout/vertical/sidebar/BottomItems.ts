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
    IconUsersGroup,
    IconSettings,
    IconPhone
} from "@tabler/icons-react";

const BottomItems: MenuitemsType[] = [
  {
    id: uniqueId(),
    title: "Our community",
    icon: IconUsersGroup,
    href: "/ourcommunity",
  },
  {
    id: uniqueId(),
    title: "Settings",
    icon: IconSettings,
    href: "/settings",
    chip: '6',
    chipColor: 'error',
  },
  {
    id: uniqueId(),
    title: "Contact us",
    icon: IconPhone,
    href: "/contactus",
  }  
];

export default BottomItems;
