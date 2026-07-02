import EditorTopBar from "../other/EditorTopBar";
import EditorCanvas from "./EditorCanvas";
import HeroEditorSidebar from "./HeroEditorSidebar";

function HeroEditor() {
  return (
    <div className="heroEditor mt-[51px] w-full max-w-[1240px] overflow-hidden rounded-2xl border border-border bg-background shadow-editor">
      <EditorTopBar />

      <div className="editor-body grid h-[650px] grid-cols-[56px_minmax(0,1fr)]">
        <HeroEditorSidebar />
        <EditorCanvas />
      </div>
    </div>
  );
}

export default HeroEditor;