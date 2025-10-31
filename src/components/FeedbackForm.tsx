import { useState } from "react";
import { CheckCircle2, MessageSquare } from "lucide-react";

const FeedbackForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="feedback" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary mb-4">
            <MessageSquare className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Share Your Feedback
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-nunito">
            Your feedback helps us serve you better. Let us know about your experience!
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-xl overflow-hidden">
          {!submitted ? (
            <div className="relative">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSetG5qxYJ8Cn9U_mq6-fnfJWhu3yNhGnAlJVAEfWZKSTpvkyQ/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
                onLoad={(e) => {
                  const iframe = e.currentTarget;
                  const checkSubmit = setInterval(() => {
                    try {
                      if (iframe.contentWindow?.location.href.includes("formResponse")) {
                        setSubmitted(true);
                        clearInterval(checkSubmit);
                      }
                    } catch (e) {
                      // Cross-origin iframe - can't check
                    }
                  }, 500);
                }}
              >
                Loading…
              </iframe>
            </div>
          ) : (
            <div className="p-12 text-center space-y-6 animate-slide-up">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-4">
                <CheckCircle2 className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-primary font-raleway">
                Thank You for Your Feedback!
              </h3>
              <p className="text-lg text-muted-foreground font-nunito max-w-md mx-auto">
                We appreciate you taking the time to share your thoughts. Your input helps us improve!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-montserrat font-semibold transition-all hover:scale-105 shadow-lg"
              >
                Submit Another Response
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
