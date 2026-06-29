import  {Menu} from "lucide-react";
import Logo from "./Logo";
import Nav from "./Nav";
import Buttons from "./Buttons";

export default function Header(){
    return(
        <header className="h-18 fixed top-0 left-0 z-50 w-full bg-background/70 backdrop-blur-2xl border-b border-b-border ">
            <div className="container-buildora flex items-center justify-between h-full">
                <Logo/>
                <Nav/>
                <Buttons/>
                <Menu className="size-6 md:hidden cursor-pointer"/>            
                </div>
        </header>
    )
}