הנה הקוד המלא המעודכן:

```jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Film, FileText } from "lucide-react";

const sections = [
  { title: "הסיפור של חיים", description: "סיפור חייו, פרק אחר פרק", to: "/story-haim", icon: BookOpen },
  { title: "הסיפור של הרשי", description: "זיכרונות וסיפורים", to: "/story-hershi", icon: BookOpen },
  { title: "הסיפור של חדווה", description: "סיפורה של חדווה", to: "/story-hadva", icon: BookOpen },
  { title: "הסיפור של אווי", description: "עדות מצולמת", to: "/story-avi", icon: Film },
  { title: "חיים מאמרים", description: "כתבים ומאמרים", to: "/articles", icon: FileText },
];

export default function HomePage() {
  return (
    <div>
      {/* Banner */}
      <div className="w-full">
        <img
          src="/klein-family-kerecke/images/website_banner_1920x750.png"
          alt="קרצקי – קהילה חרבה"
          className="w-full block max-h-[220px] sm:max-h-none object-cover object-center"
        />
      </div>

      <section className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-7 sm:py-10 text-center">
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
            className="w-16 h-0.5 bg-primary mx-auto mt-4"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            ספר המשפחה שלנו – סיפורים, זיכרונות ועדויות.
          </motion.p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-right leading-relaxed">
        <p className="mb-4">
          באתר זה, תוכלו למצוא את עזבונו של סבי, לצד עדויות וסיפורים של בני המשפחה.
        </p>
        <p className="mb-4">
          בחלק הראשון, העליתי את ספרו של סבי, חיים אלטר קליין, שנולד בשנת 1923.
          הספר יצא לאור בשנת 1993, בהיותו בן 70. סבי ז"ל נפטר ב-17.02.2016,
          בהיותו בן 93 שנה.
        </p>
        <p className="mb-4">
          בספר ניתן לקרוא גם שני פרקים נוספים שהוא אסף כעדות מאימו הגדולה
          ובמאורעות הצעירה, ששודרו יחד עמו ועלו ארצה.
        </p>
        <p className="mb-4">
          בחלק השני, העליתי את עדותה המצולמת של סבתי האהובה, רחל (אווי) קליין,
          שנולדה בשנת 1928 ונפטרה ב-2023, בשיבה טובה, בהיותה בת 94.
        </p>
        <p className="mb-4">ניתן לראות פה את אתר ההנצחה שהוקם לזכרם.</p>
        <p className="mt-4 font-semibold">יפעת דניאלי</p>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <img
              src="/klein-family-kerecke/images/book-side1.jpeg"
              alt="שער פנימי מתוך הספר"
              className="w-full h-auto block"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <img
              src="/klein-family-kerecke/images/book-side2.jpeg"
              alt="עמוד נוסף מתוך הספר"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
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
                    <p className="mt-1 text-sm text-muted-foreground">
                      {section.description}
                    </p>
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
```

השינוי היחיד מהקוד המקורי שלך הוא הוספת ה-`div` עם הבאנר בראש הדף.
