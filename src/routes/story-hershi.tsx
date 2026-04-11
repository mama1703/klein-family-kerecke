import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/story-hershi")({
  head: () => ({
    meta: [
      { title: "הסיפור של הרשי — ספר המשפחה" },
      { name: "description", content: "הסיפור של הרשי – זיכרונות וסיפורים" },
      { property: "og:title", content: "הסיפור של הרשי — ספר המשפחה" },
      { property: "og:description", content: "הסיפור של הרשי – זיכרונות וסיפורים" },
    ],
  }),
  component: StoryHershi,
});

function StoryHershi() {
  return (
    <div>
      <PageHeader
        title="הסיפור של הרשי"
        subtitle="זיכרונות וסיפורים"
        breadcrumbs={[{ label: "דף הבית", to: "/" }, { label: "הסיפור של הרשי" }]}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="prose-hebrew">
          <p>כאן ניתן להוסיף את הסיפור של הרשי. הטקסט מעוצב לקריאה נוחה בעברית.</p>
        </div>
      </div>
    </div>
  );
}
