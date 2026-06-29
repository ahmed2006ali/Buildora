import { Button } from "@/components/ui/button";
import { ArrowRight} from "lucide-react";
import Link from "next/link";

export default function Buttons(){
    return(
        <div className="hidden items-center gap-4 md:flex">
                    <Button variant="ghost" asChild>
                        <Link href="/login">Log in</Link>
                    </Button>

                    <Button size="lg" asChild className="rounded-xl px-6 group">
                        <Link href="/editor">
                        Start Building
                        <ArrowRight className="size-4 transition-transform
group-hover:translate-x-1" />
                        </Link >
                    </Button>
                </div>
    )
}