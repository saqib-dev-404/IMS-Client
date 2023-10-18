import { Outlet } from "react-router";
import SidebarwithHeader from "../../components/common/Sidebar/SidebarwithHeader";
import {
  ArrowUpIcon,
  InfoIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
} from "@chakra-ui/icons";
import Breadcrumbs from "../../components/common/Breadcrumb/Breadcrumb";

const LinkItems = [
  { name: "Home", icon: InfoIcon, route: "/admin" },
  { name: "Students", icon: SearchIcon, route: "/admin/studentview" },
  { name: "Teachers", icon: StarIcon, route: "/admin/teacherview" },
  { name: "Library", icon: SettingsIcon, route: "/admin/library" },
  { name: "Inventory", icon: SettingsIcon, route: "/admin" },
  { name: "Courses", icon: SettingsIcon, route: "/admin/courses" },
  { name: "Result", icon: SettingsIcon, route: "/admin" },
];

export default function AdminRootLayout() {
  return (
    <div>
      <SidebarwithHeader linkItems={LinkItems}>
        <Breadcrumbs />
        <Outlet />
      </SidebarwithHeader>
    </div>
  );
}
