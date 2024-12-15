import { BoxProps, FlexProps } from "@chakra-ui/react";

export interface LinkItemProps {
  name: string;
  activeIcon?: string;
  icon: string;
  href: string;
  children?: Array<unknown>;
  linkRefs?: string[]
}

export interface NavItemProps extends FlexProps {
  name?: string;
  icon: string;
  activeIcon?: string;
  href: string;
  children: React.ReactNode;
  linkRefs?: string[]
}

export interface MobileProps extends FlexProps {
  onOpen: () => void;
}

export interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const LinkItems: Array<LinkItemProps> = [
  {
    name: "Home",
    icon: "/assets/icons/home.svg",
    href: "/home",
    linkRefs: ['/profile', '/settings']
  },

  {
    name: "Appointments",
    icon: "/assets/icons/appointments.svg",
    href: "/appointments",
  },

  {
    name: "Whatsapp Chat",
    icon: "/assets/icons/whatsapp.svg",
    href: "/message",
  },

  {
    name: "Patients Record",
    icon: "/assets/icons/patients.svg",
    href: "/patients",
  },

  {
    name: "Manage Staff",
    icon: "/assets/icons/staff.svg",
    href: "/staff",
  },

  {
    name: "Payments Record",
    icon: "/assets/icons/payments.svg",
    href: "/payments",
  },

  {
    name: "Analytics",
    icon: "/assets/icons/analytics.svg",
    href: "/analytics",
  },
];
