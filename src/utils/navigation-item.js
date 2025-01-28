import {
  ChartSpline,
  LayoutDashboard,
  ListChecks,
  Tent,
  UsersRound,
} from "lucide-react";

export const getNavItems = () => [
  { name: "Dashboard", path: "/admin", icon: <LayoutDashboard /> },
  { name: "Expedition", path: "/admin/expeditions", icon: <Tent /> },
  { name: "Bookings", path: "/admin/bookings", icon: <ListChecks /> },
  { name: "Users", path: "/admin/users", icon: <UsersRound /> },
  { name: "Analytics", path: "/admin/analytics", icon: <ChartSpline /> },
];
