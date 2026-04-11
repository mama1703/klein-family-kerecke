import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/story-hadva")({
  head: () => ({
    meta: [
      { title: "הסיפור של חדווה — ספר המשפחה" },
      { name: "description", content: "סיפורה של חדווה" },
      { property: "og:title", content: "הסיפור של חדווה — ספר המשפחה" },
      { property: "og:description", content: "סיפורה של חדווה" },
    ],
  }),
  component: StoryHadva,
});

function StoryHadva() {
  return (
    <div>
      <PageHeader
        title="הסיפור של חדווה"
        subtitle="סיפורה של חדווה"
        breadcrumbs={[{ label: "דף הבית", to: "/" }, { label: "הסיפור של חדווה" }]}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="prose-hebrew">
          <p>כאן ניתן להוסיף את הסיפור של חדווה.</p>
        </div>
      </div>
    </div>
  );
}
