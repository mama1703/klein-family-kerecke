import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/story-haim/chapter-3")({
  component: Chapter3,
});

function Chapter3() {
  return (
    <div className="prose-hebrew">
      <h2>פרק ג׳ — חיים חדשים</h2>
      <p>כאן ניתן להדביק את תוכן פרק ג׳.</p>
    </div>
  );
}
