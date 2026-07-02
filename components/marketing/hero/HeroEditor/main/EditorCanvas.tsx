import MiniSite from "../other/miniSite/MiniSite";

function EditorCanvas() {
  return (
    <main className="relative flex-1 overflow-auto bg-[oklch(0.105_0.006_285)]">

      {/* Canvas Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.14_0.008_285),transparent_75%)]" />

      {/* Canvas */}
      <div className="relative flex min-h-full justify-center p-12">

        <MiniSite />

      </div>

    </main>
  );
}

export default EditorCanvas;