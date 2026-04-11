import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BookOpen, Film, FileText } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ספר המשפחה" },
      { name: "description", content: "ספר משפחה דיגיטלי – סיפורים, זיכרונות ועדויות" },
      { property: "og:title", content: "ספר המשפחה" },
      { property: "og:description", content: "ספר משפחה דיגיטלי – סיפורים, זיכרונות ועדויות" },
    ],
  }),
  component: HomePage,
});

const sections = [
  {
    title: "הסיפור של חיים",
    description: "סיפור חייו, פרק אחר פרק",
    to: "/story-haim" as const,
    icon: BookOpen,
  },
  {
    title: "הסיפור של הרשי",
    description: "זיכרונות וסיפורים",
    to: "/story-hershi" as const,
    icon: BookOpen,
  },
  {
    title: "הסיפור של חדווה",
    description: "סיפורה של חדווה",
    to: "/story-hadva" as const,
    icon: BookOpen,
  },
  {
    title: "הסיפור של אווי",
    description: "עדות מצולמת",
    to: "/story-avi" as const,
    icon: Film,
  },
  {
    title: "חיים מאמרים",
    description: "כתבים ומאמרים",
    to: "/articles" as const,
    icon: FileText,
  },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
          >
            ספר המשפחה
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-16 h-0.5 bg-primary mx-auto mt-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            סיפורים, זיכרונות ועדויות של המשפחה שלנו.
            <br />
            כל פרק הוא חלון לעולם שהיה, לאנשים שאהבנו ולרגעים שעיצבו אותנו.
          </motion.p>
        </div>
      </section>

      {/* Chapter cards */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map((section, i) => (
            <motion.div
              key={section.to}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <Link
                to={section.to}
                className="group block p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-accent text-accent-foreground group-hover:bg-primary/10 transition-colors">
                    <section.icon size={22} />
                  </div>
                  <div>
                    <h2 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">{section.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
