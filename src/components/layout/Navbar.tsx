import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-narrow mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-heading font-extrabold tracking-tight text-foreground">
          {siteConfig.name}
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                location.pathname === item.href ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-md bg-gold px-5 py-2.5 text-sm font-bold text-gold-foreground transition-colors hover:bg-gold/90"
          >
            Book Strategy Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-4 pb-6 pt-4 md:hidden animate-fade-in">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-md bg-gold px-5 py-2.5 text-center text-sm font-bold text-gold-foreground"
          >
            Book Strategy Call
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
