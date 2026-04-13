import { Link, useLocation } from "react-router-dom";
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
  currentChapterId?: string;
}

export function ChapterSidebar({
  chapters,
  currentChapterId,
}: ChapterSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const activeChapterId = useMemo(() => {
    if (currentChapterId) return currentChapterId;

    const matchedChapter = chapters.find((ch) => {
      const normalizedPath = location.pathname.replace(/\/+$/, "");
      const normalizedTo = ch.to.replace(/\/+$/, "");
      return normalizedPath === normalizedTo;
    });

    return matchedChapter?.id;
  }, [currentChapterId, chapters, location.pathname]);

  const activeChapter = chapters.find((ch) => ch.id === activeChapterId);

  return (
    <>
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24">
          <h3 className="font-heading text-sm font-semibold text-muted-foreground mb-3">
            פרקים
          </h3>

          <nav className="space-y-0.5">
            {chapters.map((ch) => {
              const isActive = activeChapterId === ch.id;

              return (
                <Link
                  key={ch.id}
                  to={ch.to}
                  className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                    isActive
                      ? "bg-accent text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {ch.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      <div className="lg:hidden mb-6">
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="w-full flex items-center justify-between px-4 py-3 bg-card border border-border rounded-lg text-sm font-medium"
          aria-expanded={mobileOpen}
          aria-label="פתחי תפריט פרקים"
        >
          <span className="flex items-center gap-2">
            <List size={16} />
            <span>{activeChapter?.title || "פרקים"}</span>
          </span>

          <ChevronDown
            size={16}
            className={`transition-transform ${mobileOpen ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border border-t-0 border-border rounded-b-lg bg-card"
            >
              <div className="p-2 space-y-0.5">
                {chapters.map((ch) => {
                  const isActive = activeChapterId === ch.id;

                  return (
                    <Link
                      key={ch.id}
                      to={ch.to}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                        isActive
                          ? "bg-accent text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {ch.title}
                    </Link>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
