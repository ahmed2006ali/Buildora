
function HeroHeading() {
  return (
    <div className="heading text-center flex flex-col items-center">
    <h1 className="title text-[64px] font-bold leading-[1.2] tracking-[-0.02em] text-foreground mb-6 max-w-4xl">
         Design websites 
        <span className="text-primary"> visually.</span>
        <br/>
        Ship production
        <span className="text-accent"> code.</span> 
    </h1>
    <p className="subtitle max-w-2xl text-[18px] text-muted-foreground leading-[1.6] max-w-160 mb-9">
        Buildora gives you total control over layout, styling, and interactions
        <br/>
        with a powerful visual canvas and clean code output.
    </p>
    </div>
)
}

export default HeroHeading