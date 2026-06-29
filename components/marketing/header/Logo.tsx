import Image from "next/image"
import Link from "next/link"

export default function Logo(){
    return(
        <Link className="logo hover:scale-[1.02] transition-all duration-300" href='/' >
            <Image 
                src="/logo.png" 
                alt="logo" 
                width={160} 
                height={36}
                priority
            />
        </Link>
    )
}