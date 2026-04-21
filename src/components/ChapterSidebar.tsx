import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";

export interface Chapter {
  id: string;
  title: string;
  to: string;
}

interface ChapterSidebarProps {
  chapters: Chapter[];
}

export function ChapterSidebar({ chapters }: ChapterSidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const activeChapter = useMemo(() => {
    const currentPath = location.pathname.replace(/\/$/, "") || "/";
    return (
      chapters.find((ch) => {
        const chapterPath = ch.to.replace(/\/$/, "") || "/";
        return chapterPath === currentPath;
      }) ?? chapters[0]
    );
  }, [chapters, location.pathname]);

  const handleNav = (to: string) => {
    navigate(to);
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
  };

  return (
    <>
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24">
          <h3 className="font-heading text-sm font-semibold text-muted-foreground mb-3">
            פרקים
          </h3>
          <nav className="space-y-0.5">
            {chapters.map((ch) => {
              const isActive = location.pathname.replace(/\/$/, "") === ch.to.replace(/\/$/, "");
              return (
                <button
                  key={ch.id}
                  onClick={() => handleNav(ch.to)}
                  className={`block w-full text-right px-3 py-2 text-sm rounded-md transition-colors ${
                    isActive
                      ? "bg-accent text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  {ch.title}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      <div className="lg:hidden mb-6">
        <p className="text-xs font-semibold text-muted-foreground mb-3 px-1">פרקים</p>
        <div className="grid grid-cols-2 gap-2">
          {chapters.map((ch) => {
            const isActive = location.pathname.replace(/\/$/, "") === ch.to.replace(/\/$/, "");
            return (
              <button
                key={ch.id}
                onClick={() => handleNav(ch.to)}
                className={`rounded-xl border px-3 py-3 text-sm transition-colors leading-snug text-right ${
                  isActive
                    ? "border-primary/40 bg-accent text-foreground font-semibold"
                    : "border-border bg-card text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {ch.title}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
