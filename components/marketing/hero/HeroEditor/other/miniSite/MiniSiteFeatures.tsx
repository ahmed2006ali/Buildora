function MiniSiteFeatures() {
  return (
    <div className="grid grid-cols-3 gap-4 pt-2 px-9 pb-9">
        <div className="flex gap-3 items-start border border-border rounded-xl p-4">
            <span className="w-8 h-8 rounded-lg flex-center shrink-0 BG-[oklch(0.89 0.19 116 / 0.15)] text-primary"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="9" x2="22" y2="9"></line></svg></span>
            <div>
                <h4 className="text-[13px] font-semibold mb-1">Visual Editing</h4>
                <p className='text-[11.5px] leading-[1.5] text-muted-foreground'>Drag, drop, and design with complete control.</p>
            </div>
        </div>


        <div className="flex gap-3 items-start border border-border rounded-xl p-4">
            <span className="w-8 h-8 rounded-lg flex-center shrink-0 bg-[oklch(0.63 0.24 278 / 0.18)] text-accent "><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></span>
            <div>
                <h4 className="text-[13px] font-semibold mb-1">Clean Code Output</h4>
                <p className='text-[11.5px] leading-[1.5] text-muted-foreground'>Export production-ready HTML, CSS, and JS.</p>
            </div>
        </div>


        <div className="flex gap-3 items-start border border-border rounded-xl p-4">
            <span className="w-8 h-8     rounded-lg flex-center shrink-0 bg-[oklch(0.89 0.19 116 / 0.15)] text-primary"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87"></path><path d="M16 3.13a4 4 0 010 7.75"></path></svg></span>
            <div>
                <h4 className="text-[13px] font-semibold mb-1">Team Collaboration</h4>
                <p className='text-[11.5px] leading-[1.5] text-muted-foreground'>Work together in real-time and ship faster.</p>
            </div>
        </div>
    </div>
  )
}

export default MiniSiteFeatures