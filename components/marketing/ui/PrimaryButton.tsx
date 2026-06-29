import { ArrowRight } from "lucide-react"
import Link from "next/link"

function PrimaryButton({href}: {href: string}) {
  return (
    <Link href={href} className="group bg-primary rounded-md font-semibold gap-[8px] inline-flex items-center justify-center px-6 h-[40px] text-[14px] text-primary-foreground transition-all duration-200">
        Start Building
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </Link>
  )
}

export default PrimaryButton