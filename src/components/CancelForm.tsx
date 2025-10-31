import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

const CancelForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="cancel" className="min-h-screen bg-background flex flex-col">
      <div className="w-full px-4 py-8">
        <div className="text-center mb-6 animate-slide-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-destructive to-destructive/70 mb-4">
            <XCircle className="w-8 h-8 text-destructive-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Cancel Your Order
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-nunito">
            Need to cancel your order? Fill out the form below
          </p>
        </div>

        <div className="w-full bg-card shadow-xl overflow-hidden flex-1">
          {!submitted ? (
            <div className="relative">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScb0ngU-46uj8YM7TOw_c-Mhr7lxr20nti7ho0QcQ8YrMRkmg/viewform?embedded=true"
                width="100%"
                height="1200"
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
                Cancellation Request Submitted
              </h3>
              <p className="text-lg text-muted-foreground font-nunito max-w-md mx-auto">
                Your cancellation request has been received. We'll process it as soon as possible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-montserrat font-semibold transition-all hover:scale-105 shadow-lg"
              >
                Submit Another Request
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CancelForm;
