import { PageHeader } from "../components/PageHeader";
import { VideoBlock } from "../components/ContentBlock";

export default function StoryAvi() {
  return (
    <div>
      <PageHeader title="הסיפור של אווי" subtitle="עדות מצולמת" breadcrumbs={[{ label: "דף הבית", to: "/" }, { label: "הסיפור של אווי" }]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <VideoBlock src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="עדות מצולמת של אווי" />
        <div className="prose-hebrew mt-8">
          <p>כאן ניתן להוסיף תיאור טקסטואלי מתחת לסרטון. הסרטון למעלה הוא מקום שמור — יש להחליף את הכתובת בקישור לסרטון האמיתי.</p>
        </div>
      </div>
    </div>
  );
}
