
function Dot({backgroundColor}: {backgroundColor: string}) {
  return (
    <div className={`dot rounded-full w-[11px] h-[11px] cursor-pointer ${backgroundColor}`}></div>
  )
}

export default Dot