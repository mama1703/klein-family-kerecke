import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "חיים מאמרים — ספר המשפחה" },
      { name: "description", content: "כתבים ומאמרים של חיים" },
      { property: "og:title", content: "חיים מאמרים — ספר המשפחה" },
      { property: "og:description", content: "כתבים ומאמרים של חיים" },
    ],
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
  return (
    <div>
      <PageHeader
        title="חיים מאמרים"
        subtitle="כתבים ומאמרים"
        breadcrumbs={[{ label: "דף הבית", to: "/" }, { label: "חיים מאמרים" }]}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="prose-hebrew">
          <p>כאן ניתן להוסיף מאמרים וכתבים של חיים.</p>
        </div>
      </div>
    </div>
  );
}
