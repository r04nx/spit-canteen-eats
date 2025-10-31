import { Coffee, Utensils, IceCream, Clock } from "lucide-react";

const Menu = () => {
  const menuItems = [
    {
      icon: Coffee,
      title: "Breakfast",
      time: "8:00 AM - 10:00 AM",
      description: "Start your day with our fresh breakfast options",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Utensils,
      title: "Lunch",
      time: "Lunch Hours",
      description: "Chapati, Sabzi, Dal, and Rice",
      items: ["Chapati", "Sabzi", "Dal", "Rice"],
      color: "from-red-500 to-pink-500",
    },
    {
      icon: IceCream,
      title: "Evening Snacks",
      time: "4:00 PM - 6:00 PM",
      description: "Everyone's favorite Panipuri!",
      items: ["Panipuri"],
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Menu & Timings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-nunito">
            Fresh meals prepared with care throughout the day
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl shadow-lg hover-lift overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className={`h-32 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <item.icon className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-raleway">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-accent">
                  <Clock className="w-5 h-5" />
                  <span className="font-montserrat font-semibold">
                    {item.time}
                  </span>
                </div>

                <p className="text-muted-foreground font-nunito">
                  {item.description}
                </p>

                {item.items && (
                  <div className="pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {item.items.map((dish, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-foreground font-montserrat"
                        >
                          {dish}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
