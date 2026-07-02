function MiniSiteHero() {
  return (
    <div className="grid grid-cols-[1.05fr_.95fr] items-center gap-14 px-12
pt-12
pb-12 ">
        <div className="hero-left">
            <div className="selection-box relative inline-block rounded-[4px] px-[14px] py-[10px] border-[1.5px] border-dashed border-accent ">
                <span className ="box-tag absolute -top-[22px] -left-[1px] bg-accent text-white text-[10px] font-bold px-2 py-[3px] rounded-[4px] flex-items gap-1">H1 Heading</span>
                <h2 className="text-[44px]
leading-[1.05]
tracking-[-0.04em] font-bold leading-[1.18] tracking-[-0.01em] text-foreground ">
                    Build without limits.
                    <br />
                    Publish 
                    <span className="bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent">everywhere.</span>
                </h2>

            <p className="text-[14px]
leading-6
max-w-[340px] leading-1.6 text-muted-foreground mt-4 ">
                A modern visual builder for professional websites.
                <br/>
                Clean code. Fast performance. Total freedom.
            </p>

            <div className="buttons flex-items gao-[10px] mt-5">
                <span className="inline-flex items-center gap-[6px] text-xs font-semibold px-5
py-3
rounded-xl rounded-lg bg-primary text-foreground">
                Start Building Free
                </span>
                <span className="inline-flex items-center gap-[6px] text-xs font-semibold px-5
py-3
rounded-xl rounded-lg border border-border text-foreground" >Explore Templates</span>
            </div>
            </div>
        </div>
        <div className="hero-right relative">
            <span className="selection-box static inline-flex mb-2 items-center gap-1 rounded-[4px] px-2 py-[3px] font-bold text-[10px]  text-white bg-accent ">Image</span>
            <div className=" imagecard relative h-[240px]rounded-[14px] bg-[linear-gradient(135deg,#7c8fb3_0%,#36445e_55%,#171c29_100%)] bg-[linear-gradient(180deg,_oklch(0.55_0.04_250_/_0.4),_oklch(0.2_0.02_260_/_0.85)),_linear-gradient(160deg,_#6e7f9e_0%,_#3c4a63_55%,_#1d2433_100%)] border-[1.5px] border-accent flex items-end padding-[18px] overflow-hidden">
                <div className="content">
                    <h3 className="text-[20px] font-bold text-shite leading-1.2 mb-[10px]">
                        Northern
                        <br/>
                        Adventures
                    </h3>
                    <span className="inline-block bg-white text-black text-[10px] font-semibold px-3 py-1.5 rounded-[6px]">Explore Now</span>
                </div>
                <div className="absolute bottom-[18px] right-[18px] w-7 h-7 rounded-full bg-accent flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MiniSiteHero