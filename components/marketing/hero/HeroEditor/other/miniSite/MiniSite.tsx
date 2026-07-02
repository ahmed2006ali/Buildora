import MiniSiteFeatures from "./MiniSiteFeatures"
import MiniSiteHero from "./MiniSiteHero"
import MiniSiteNavBar from "./MiniSiteNavBar"

function MiniSite() {
  return (
    <div
      className="
      w-[900px]
      overflow-hidden
      rounded-md
      border
      border-[oklch(0.34_0.02_285)]
      bg-background
      shadow-[0_0_0_1px_rgba(255,255,255,.02),0_20px_60px_rgba(0,0,0,.35)]
      "
    >
      <MiniSiteNavBar />
      <MiniSiteHero />
      <MiniSiteFeatures />
    </div>
  );
}

export default MiniSite;
