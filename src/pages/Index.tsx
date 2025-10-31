import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import OrderForm from "@/components/OrderForm";
import FeedbackForm from "@/components/FeedbackForm";
import CancelForm from "@/components/CancelForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <OrderForm />
      <FeedbackForm />
      <CancelForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
