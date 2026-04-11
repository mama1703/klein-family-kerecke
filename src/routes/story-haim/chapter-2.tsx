import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/story-haim/chapter-2")({
  component: Chapter2,
});

function Chapter2() {
  return (
    <div className="prose-hebrew">
      <h2>פרק ב׳ — נעורים</h2>
      <p>כאן ניתן להדביק את תוכן פרק ב׳.</p>
    </div>
  );
}
