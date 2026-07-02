'use client'
import { useState } from "react";
import IconSidebar from "../other/IconSidebar";
import { sidebarItems } from "@/constants/editor-sidebar";

function HeroEditorSidebar() {


  

  const [activeTab, setActiveTab] = useState("Layers");


  return (
    <div className="sidebar w-14 flex-column gap-1 px-2 py-4 bg-[oklch(0.13 0.006 285)] border-r border-r-[oklch(0.22 0.008 285)] ">
      {sidebarItems.map((item)=>(
        <IconSidebar 
        item={item}
        activeTab={activeTab} 
        key={item.id} 
        setActiveTab={setActiveTab}/>
      ))}
    </div>
)
}

export default HeroEditorSidebar