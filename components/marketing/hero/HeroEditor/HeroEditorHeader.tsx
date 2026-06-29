
import { LaptopMinimal, Smartphone, Tablet } from "lucide-react"

function HeroEditorHeader() {
  return (
    <header className="heroEditorHeader flex items-center justify-between w-full px-4 ">
        <div className="dots flex gap-[10px] items-center ">
            <div className="dot bg-reddot rounded-full w-[11px] h-[11px]"></div>
            <div className="dot bg-yellowdot rounded-full w-[11px] h-[11px]"></div>
            <div className="dot bg-greendot rounded-full w-[11px] h-[11px]"></div>
        </div>

        <div className="screen-selector-btns flex items-center gap-1">
            <button className="screen-selector-btn cursor-pointer">
                <LaptopMinimal />
            </button>
            <button className="screen-selector-btn cursor-pointer">
                <Tablet />
            </button>
            <button className="screen-selector-btn cursor-pointer">
                <Smartphone />
            </button>
        </div>
        <div className="screen-size text-shite bg-accent rounded-sm text-[14px]">1280px</div>
        <div className="storageActions">
            <div className="undo">
                
            </div>
        </div>
    </header>
)
}

export default HeroEditorHeader