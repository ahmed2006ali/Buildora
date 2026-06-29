import HeroCta from "./HeroCta"
import HeroEditor from "./HeroEditor/HeroEditor"
import HeroHeading from "./HeroHeading"

function Hero() {
return (
    <div className="hero relative pt-14 overflow-hidden mt-[100px]">
        <div className="container-buildora relative z-1 flex flex-col items-center text-center">
            <HeroHeading/>
            <HeroCta/>
            <HeroEditor/>
        </div>
    </div>
)
}

export default Hero