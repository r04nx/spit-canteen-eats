import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToOrder = () => {
    const element = document.querySelector("#order");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="flex justify-center mb-6">
            <img
              src="https://www.spit.ac.in/wp-content/uploads/2021/01/LogoSPIT.png"
              alt="SPIT Logo"
              className="h-20 w-auto object-contain opacity-90"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Welcome to{" "}
            <span className="text-accent">SPIT Canteen</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 font-nunito max-w-2xl mx-auto">
            Enjoy fresh, hygienic, and homely food right on campus. Pre-ordered
            meals from breakfast to evening snacks!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={scrollToOrder}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-montserrat font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Order Now
            </Button>
            <Button
              onClick={() => {
                const element = document.querySelector("#about");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 font-montserrat font-semibold text-lg px-8 py-6 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-8 h-8 text-primary-foreground/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
