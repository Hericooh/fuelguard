import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="FuelGuard" className="h-6 w-6" />
            <span className="font-bold text-foreground">
              Fuel<span className="text-gradient">Guard</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 FuelGuard. Fuel intelligence for heavy equipment operations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
