const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://i.ibb.co/0jCFVpNX/Gemini-Generated-Image-bxxjvtbxxjvtbxxj-removebg-preview.png"
              alt="SPIT Canteen Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-raleway font-bold">SPIT Canteen</span>
              <span className="text-sm opacity-80 font-nunito">
                Hygienic & Homely Food
              </span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm opacity-90 font-nunito">
              © {new Date().getFullYear()} SPIT Institute. All rights reserved.
            </p>
            <p className="text-xs opacity-70 mt-1 font-montserrat">
              Managed by Ms. Megha Sawant
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
