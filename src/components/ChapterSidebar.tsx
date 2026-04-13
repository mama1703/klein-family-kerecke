import { NavLink, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import { ChevronDown, List } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface Chapter {
  id: string;
  title: string;
  to: string;
}

interface ChapterSidebarProps {
  chapters: Chapter[];
}

export function ChapterSidebar({ chapters }: ChapterSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const activeChapter = useMemo(() => {
    const currentPath = location.pathname.replace(/\/$/, "") || "/";
    return (
      chapters.find((ch) => {
        const chapterPath = ch.to.replace(/\/$/, "") || "/";
        return chapterPath === currentPath;
      }) ?? chapters[0]
    );
  }, [chapters, location.pathname]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24">
          <h3 className="font-heading text-sm font-semibold text-muted-foreground mb-3">
            פרקים
          </h3>

          <nav className="space-y-0.5">
            {chapters.map((ch) => (
              <NavLink
                key={ch.id}
                to={ch.to}
                end
                className={({ isActive }) =>
                  `block px-3 py-2 text-sm rounded-md transition-colors ${
                    isActive
                      ? "bg-accent text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`
                }
              >
                {ch.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile chapters menu */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="w-full flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-4 text-right"
          aria-expanded={mobileOpen}
          aria-label="פתחי תפריט פרקים"
        >
          <span className="flex items-center gap-2 shrink-0 text-muted-foreground">
            <List size={18} />
            <span className="text-sm font-medium">פרקים</span>
          </span>

          <span className="flex-1 text-sm font-semibold text-foreground truncate">
            {activeChapter?.title}
          </span>

          <ChevronDown
            size={18}
            className={`shrink-0 transition-transform ${mobileOpen ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <nav className="mt-2 rounded-2xl border border-border bg-card p-2 space-y-1">
                {chapters.map((ch) => (
                  <NavLink
                    key={ch.id}
                    to={ch.to}
                    end
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-3 text-sm transition-colors ${
                        isActive
                          ? "bg-accent text-foreground font-medium"
                          : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                      }`
                    }
                  >
                    {ch.title}
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
