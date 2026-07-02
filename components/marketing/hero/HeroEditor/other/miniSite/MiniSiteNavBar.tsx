import React from 'react'

function MiniSiteNavBar() {
  return (
    <div className="h-[52px] flex items-center justify-between px-6 border-b border-border">
        {/* logo */}
        <ul className="nav flex-items gap-6  text-[12px] text-[oklch(0.8 0.005 285)] ">
            <li>Product </li>
            <li>Templates</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="actions flex-items gap-[14px] text-[12px] ">
            <span className="text-[oklch(0.8 0.005 285)] ">Sign In</span>
            <span className="bg-foreground text-background px-[14px] py-[6px] rounded-[7px] font-semibold">Get Started</span>
        </div>
    </div>
  )
}

export default MiniSiteNavBar