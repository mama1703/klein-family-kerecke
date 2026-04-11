import { PageHeader } from "../components/PageHeader";

export default function StoryHadva() {
  return (
    <div>
      <PageHeader title="הסיפור של חדווה" subtitle="סיפורה של חדווה" breadcrumbs={[{ label: "דף הבית", to: "/" }, { label: "הסיפור של חדווה" }]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="prose-hebrew">
          <p>כאן ניתן להוסיף את הסיפור של חדווה.</p>
        </div>
      </div>
    </div>
  );
}
