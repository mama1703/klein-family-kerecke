import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

interface Breadcrumb {
  label: string;
  to?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

export function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5 sm:py-7">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronLeft size={14} className="mx-1" />}
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-foreground transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">{title}</h1>
        {subtitle && <p className="mt-2 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
      </div>
    </div>
  );
}
