import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/story-haim/")({
  component: StoryHaimIndex,
});

function StoryHaimIndex() {
  return (
    <div className="prose-hebrew">
      <h2>הקדמה</h2>
      <p>
        כאן יתחיל הסיפור של חיים. ניתן להוסיף כאן את הטקסט המלא מתוך מסמכי Google Docs.
        הטקסט ייראה נקי ומעוצב בצורה נוחה לקריאה.
      </p>
      <p>
        לחצו על אחד הפרקים בתפריט כדי לנווט בין חלקי הסיפור.
        כל פרק תומך בטקסט ארוך, תמונות בין פסקאות, וכיתובים לתמונות.
      </p>
    </div>
  );
}
