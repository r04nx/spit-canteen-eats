import { MapPin, Users, Heart, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: MapPin,
      title: "Convenient Location",
      description: "Located on the 3rd floor of SPIT campus for easy access",
    },
    {
      icon: Heart,
      title: "Hygienic & Fresh",
      description: "All food pre-prepared with high hygiene standards",
    },
    {
      icon: Users,
      title: "Expert Management",
      description: "Overseen by Ms. Megha Sawant for smooth operations",
    },
    {
      icon: Sparkles,
      title: "Homely Taste",
      description: "Experience the comfort of home-cooked meals on campus",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Our Canteen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-nunito">
            Your trusted food partner within the SPIT campus, bringing you
            quality meals with care and convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-md hover-lift hover:shadow-xl text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 font-raleway">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-nunito">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground font-nunito leading-relaxed mb-4">
              Welcome to the SPIT Institute Canteen, your go-to destination for
              delicious and hygienic food right on campus! Our canteen serves{" "}
              <span className="font-semibold text-primary">
                breakfast, lunch, and evening snacks
              </span>{" "}
              including everyone's favorite Panipuri, with all food
              pre-prepared from outside to ensure quality and freshness.
            </p>
            <p className="text-foreground font-nunito leading-relaxed mb-4">
              Enjoy the benefit of{" "}
              <span className="font-semibold text-accent">
                hygienic, homely, and convenient food
              </span>{" "}
              within the campus, eliminating the need to rely on outside
              eateries.
            </p>
            <p className="text-foreground font-nunito leading-relaxed">
              The overall management and smooth functioning of this canteen is
              overseen by{" "}
              <span className="font-semibold text-primary">
                Ms. Megha Sawant
              </span>{" "}
              from our Institute. She ensures coordinated serving arrangements,
              maintains hygiene standards, and manages daily operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
