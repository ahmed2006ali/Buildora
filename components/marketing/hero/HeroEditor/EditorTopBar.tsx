
import {  LaptopMinimal, Redo, Smartphone, Tablet, Undo } from "lucide-react"
import Dot from "./Dot"
import ScreenSelectorBtn from "./ScreenSelectorBtn"

function EditorTopBar() {
  return (

    // Editor Top Bar
    <header className="EditorTopBar flex-between w-full px-4 h-13 p-5 bg-[oklch(0.14 0.006 285)] border-b border-b-[oklch(0.22 0.008 285)]">
        
        <div className="dots flex-items gap-2.5  ">
            <Dot backgroundColor="bg-reddot" />
            <Dot backgroundColor="bg-yellowdot" />
            <Dot backgroundColor="bg-greendot" />
        </div>


        <div className="screen-selector flex-items gap-6">
            <div className="screen-selectors-btns flex-items gap-2">
                    <ScreenSelectorBtn icon={<LaptopMinimal />} />  
                    <ScreenSelectorBtn icon={<Tablet />} />
                    <ScreenSelectorBtn icon={<Smartphone />} />
            </div>
            <div className="screen-size text-shite bg-accent rounded-sm text-[14px] p-2">1280px</div>
        </div>

        <div className="storageActions">
            <div className="undo flex gap-3">
                <Undo size={18} strokeWidth={1.8} className="cursor-pointer opacity-60 hover:opacity-100 transition-all" />
                <Redo size={18} strokeWidth={1.8} className="cursor-pointer opacity-60 hover:opacity-100 transition-all" />
            </div>
        </div>
    </header>
)
}

export default EditorTopBar