import React from 'react'

function ScreenSelectorBtn({icon}: {icon: React.ReactNode}) {
  return (
    <button className="screen-selector-btn cursor-pointer">
      {icon}
    </button>
)
}

export default ScreenSelectorBtn