import { SidebarItem } from "@/types/SideBarItem";
type Props = {
  item: SidebarItem;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function IconSidebar({
  item,
  activeTab,
  setActiveTab,
}: Props) {
  const Icon = item.icon;

  return (
    <button
      onClick={() => setActiveTab(item.name)}
      className={`
        flex h-10 w-10 items-center justify-center rounded-[10px]
        transition-colors duration-200 cursor-pointer
        ${
          activeTab === item.name
            ? "bg-[oklch(0.2_0.01_285)] text-primary"
            : "text-[oklch(0.5_0.01_285)] hover:bg-[oklch(0.2_0.008_285)] hover:text-foreground hover:scale-105"
        }
      `}
    >
      <Icon size={20} strokeWidth={1.8} />
    </button>
  );
}