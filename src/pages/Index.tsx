import Hero from "@/components/Hero";
import OrderForm from "@/components/OrderForm";
import CancelForm from "@/components/CancelForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Mobile Layout - Stacked */}
      <div className="lg:hidden">
        <Hero />
        <div className="w-full">
          <div className="space-y-0">
            <div id="order">
              <OrderForm />
            </div>
            <div id="cancel">
              <CancelForm />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Horizontal */}
      <div className="hidden lg:flex min-h-screen">
        <div className="w-1/2 sticky top-0 h-screen">
          <Hero />
        </div>
        <div className="w-1/2 overflow-y-auto">
          <div className="space-y-0">
            <div id="order">
              <OrderForm />
            </div>
            <div id="cancel">
              <CancelForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
