import Hero from "@/components/Hero";
import OrderForm from "@/components/OrderForm";
import CancelForm from "@/components/CancelForm";

const Index = () => {
  return (
    <div className="min-h-screen">
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
  );
};

export default Index;
