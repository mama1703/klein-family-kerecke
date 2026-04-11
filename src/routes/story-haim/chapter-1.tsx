import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/story-haim/chapter-1")({
  component: Chapter1,
});

function Chapter1() {
  return (
    <div className="prose-hebrew">
      <h2>פרק א׳ — ילדות</h2>
      <p>
        כאן ניתן להדביק את תוכן הפרק מתוך Google Docs.
        העיצוב מותאם לקריאה ארוכה בעברית עם ריווח נוח בין השורות ובין הפסקאות.
      </p>
      <p>
        ניתן להוסיף תמונות בין הפסקאות בקלות, פשוט על ידי שימוש ברכיב התמונה.
      </p>
      {/* דוגמה להוספת תמונה:
      <figure>
        <img src="/images/haim-childhood.jpg" alt="חיים בילדותו" />
        <figcaption>חיים בילדותו, שנות ה-40</figcaption>
      </figure>
      */}
    </div>
  );
}
