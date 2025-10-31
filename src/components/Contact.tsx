import { Mail, MapPin, User } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-nunito">
            Have questions or suggestions? We'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1 font-raleway">
                      Canteen Manager
                    </h3>
                    <p className="text-muted-foreground font-nunito">
                      Ms. Megha Sawant
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1 font-raleway">
                      Location
                    </h3>
                    <p className="text-muted-foreground font-nunito">
                      3rd Floor, SPIT Campus
                      <br />
                      Sardar Patel Institute of Technology
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1 font-raleway">
                      Feedback
                    </h3>
                    <p className="text-muted-foreground font-nunito">
                      Share your feedback and suggestions directly with Ms.
                      Megha Sawant to help us enhance the canteen experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 flex flex-col justify-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary font-raleway">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-3 font-nunito text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Hygienic food preparation standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Fresh, home-style cooking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Convenient campus location</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Affordable and quality meals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Expert management and care</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground font-nunito">
                All are encouraged to make use of this facility and enjoy fresh,
                hygienic, and homely food options within the campus rather than
                relying on outside eateries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
