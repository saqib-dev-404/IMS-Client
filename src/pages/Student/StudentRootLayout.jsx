import { Outlet } from "react-router";
import SidebarwithHeader from "../../components/common/Sidebar/SidebarwithHeader";
import {
  ArrowUpIcon,
  InfoIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
} from "@chakra-ui/icons";

const LinkItems = [
  { name: "Home", icon: InfoIcon, route: "/student" },
  { name: "Attendance", icon: SearchIcon, route: "/student/attendance" },
  { name: "Assignments", icon: StarIcon, route: "/student/assignments" },
  { name: "Marks Summary", icon: SettingsIcon, route: "/student/marks" },
  { name: "Course Resources", icon: SettingsIcon, route: "/student/resources" },
  { name: "View Library", icon: SettingsIcon, route: "/student/viewlibrary" },
];

const routeItems = [
  { name: "Messages", icon: ArrowUpIcon, route: "/student/messages" },
  { name: "Support", icon: SearchIcon, route: "/student/support" },
];

export default function StudentRootLayout() {
  return (
    <div>
      <SidebarwithHeader linkItems={LinkItems} routeItems={routeItems}>
        <Outlet />
      </SidebarwithHeader>
    </div>
  );
}
