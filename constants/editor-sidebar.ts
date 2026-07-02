import { SidebarItem } from "@/types/SideBarItem";
import {
  Bot,
  CodeXml,
  Folder,
  Grid2x2,
  Layers,
  Palette,
  Settings,
} from "lucide-react";


export const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    name: "Layers",
    icon: Layers,
  },
  {
    id: 2,
    name: "Components",
    icon: Grid2x2,
  },
  {
    id: 3,
    name: "Assets",
    icon: Folder,
  },
  {
    id: 4,
    name: "Styles",
    icon: Palette,
  },
  {
    id: 5,
    name: "AI",
    icon: Bot,
  },
  {
    id: 6,
    name: "Code",
    icon: CodeXml,
  },
  {
    id: 7,
    name: "Settings",
    icon: Settings,
  },
];