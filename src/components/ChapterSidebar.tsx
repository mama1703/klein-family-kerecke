import { NavLink, useLocation, Link } from "react-router-dom";
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

      {/* Mobile: grid of chapter cards */}
      <div className="lg:hidden mb-6">
        <p className="text-xs font-semibold text-muted-foreground mb-3 px-1">פרקים</p>
        <div className="grid grid-cols-2 gap-2">
          {chapters.map((ch) => {
            const isActive = location.pathname.replace(/\/$/, "") === ch.to.replace(/\/$/, "");
            return (
              <Link
                key={ch.id}
                to={ch.to}
                className={`rounded-xl border px-3 py-3 text-sm transition-colors leading-snug ${
                  isActive
                    ? "border-primary/40 bg-accent text-foreground font-semibold"
                    : "border-border bg-card text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {ch.title}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
