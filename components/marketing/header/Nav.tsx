import Link from "next/link";

function Nav(){

    const navLinks = [
  {
    label: "Product",
    href: "/product",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Templates",
    href: "/templates",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];


    return(
        <ul className="nav md:flex items-center gap-8 hidden">        
            {navLinks.map((link)=>(
                <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors duration-250 text-[15px] tracking-[-0.02em]">
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Nav;