import HeroCta from "./HeroCta"
import HeroEditor from "../HeroEditor/main/HeroEditor"
// import Heroglow from "./Heroglow"
import HeroHeading from "../HeroDetails/HeroHeading"

function Hero() {
return (
    <section className="heroSection relative pt-14  mt-25 isolate" >

        {/* <Heroglow/> */}

        <div className="container-buildora relative z-1 flex-column text-center">
            <HeroHeading/>
            <HeroCta/>
            <HeroEditor/>
        </div>

        
    </section>
)
}

export default Hero