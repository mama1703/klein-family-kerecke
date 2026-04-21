import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { to: "/", label: "דף הבית" },
  { to: "/story-haim", label: "הסיפור של חיים" },
  { to: "/story-hershi", label: "הסיפור של הרשי" },
  { to: "/story-hadva", label: "הסיפור של חדווה" },
  { to: "/story-avi", label: "הסיפור של אווי" },
  { to: "/articles", label: "חיים מאמרים" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center h-16 relative">

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-foreground bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden absolute left-0 p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="תפריט"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border overflow-hidden bg-background"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "text-foreground bg-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
