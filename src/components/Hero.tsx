import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import canteenLogo from "@/assets/canteen-logo.png";
import heroFood from "@/assets/hero-food.jpg";

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
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <img 
          src={heroFood} 
          alt="Delicious food" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-6 lg:space-y-8 animate-slide-up">
          <div className="flex justify-center mb-6">
            <img
              src={canteenLogo}
              alt="SPIT Canteen Logo"
              className="h-32 w-32 object-contain rounded-full shadow-lg bg-white/10 p-2"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-primary-foreground leading-tight font-raleway">
            Welcome to{" "}
            <span className="text-accent">SPIT Canteen</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-xl text-primary-foreground/90 font-nunito max-w-2xl mx-auto">
            Enjoy fresh, hygienic, and homely food right on campus. Pre-ordered
            meals from breakfast to evening snacks!
          </p>

          <div className="flex flex-col gap-4 justify-center items-center pt-4 w-full max-w-xs mx-auto">
            <Button
              onClick={scrollToOrder}
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-montserrat font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Order Food
            </Button>
            <Button
              onClick={() => {
                const element = document.querySelector("#cancel");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              variant="outline"
              className="w-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 font-montserrat font-semibold text-lg px-8 py-6 backdrop-blur-sm"
            >
              Cancel Order
            </Button>
          </div>

          <div className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-8 h-8 text-primary-foreground/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
