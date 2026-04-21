import { Link } from "react-router-dom";
import { BookOpen, Film } from "lucide-react";

interface StoryNavProps {
  prev?: { to: string; title: string; icon?: "book" | "film" };
  next?: { to: string; title: string; icon?: "book" | "film" };
}

export function StoryNav({ prev, next }: StoryNavProps) {
  const Icon = ({ type }: { type?: "book" | "film" }) =>
    type === "film" ? <Film size={16} /> : <BookOpen size={16} />;

  return (
    <div className="not-prose mt-16 border-t border-stone-200 pt-8">
      <p className="text-xs font-semibold text-muted-foreground mb-4 text-center">
        סיפורים נוספים במשפחה
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {next && (
          <Link
            to={next.to}
            className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 hover:border-primary/30 hover:shadow-sm transition-all"
          >
            <div className="p-2 rounded-lg bg-accent text-accent-foreground group-hover:bg-primary/10 transition-colors shrink-0">
              <Icon type={next.icon} />
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground mb-0.5">הסיפור הבא ←</p>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {next.title}
              </p>
            </div>
          </Link>
        )}
        {prev && (
          <Link
            to={prev.to}
            className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 hover:border-primary/30 hover:shadow-sm transition-all"
          >
            <div className="p-2 rounded-lg bg-accent text-accent-foreground group-hover:bg-primary/10 transition-colors shrink-0">
              <Icon type={prev.icon} />
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground mb-0.5">→ הסיפור הקודם</p>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {prev.title}
              </p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
