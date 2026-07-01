import EditorTopBar from "./EditorTopBar"
import HeroEditorSidebar from "./HeroEditorSidebar"

function HeroEditor() {
  return (
    <div className="heroEditor w-full mt-12.5 max-w-305 rounded-2xl border border-[oklch(0.32 0.04 285)] bg-background shadow-editor ">
        <EditorTopBar/>
        <div className="editor-body grid h-[120] ">
        <HeroEditorSidebar/>
        </div>
    </div>
)
}

export default HeroEditor