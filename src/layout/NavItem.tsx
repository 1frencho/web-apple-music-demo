import { FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

export const NavItem = ({ icon: Icon, children }: NavItemProps) => {
  return (
    <Link to="#">
      <div className="myLink">
        {Icon && <Icon className="mr-4 text-lg group-hover:text-white" />}
        {children}
      </div>
    </Link>
  );
};
