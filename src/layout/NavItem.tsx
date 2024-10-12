import { FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
  active?: boolean;
}

export const NavItem = ({
  icon: Icon,
  children,
  active,
  className,
}: NavItemProps) => {
  return (
    <div className={`myLink ${active ? "active" : ""} ${className}`}>
      {Icon && <Icon className="mr-3 text-lg group-hover:text-white" />}
      {children}
    </div>
  );
};
