import { ChapterBottomNav } from "../components/ChapterBottomNav";
import { ImageBlock } from "../components/ImageBlock";
import { StoryNav } from "../components/StoryNav";

export default function Chapter8() {
  return (
    <div className="prose-hebrew">
      <h2 className="text-4xl font-bold mb-10 text-center">
        נספח - תמונות ממפגש הנוער הציוני בארץ
      </h2>

      <ImageBlock
        src="/klein-family-kerecke/images/with-yona.png"
        alt="מפגש עליית הנוער 1998"
        caption={'מפגש חברי עליית הנוער, 1998 - חיים ואווי קליין ובאמצע יונה אמתי (אילוב)'}
      />

      <ImageBlock
        src="/klein-family-kerecke/images/with-shayo.png"
        alt="מפגש עליית הנוער עם שעיו"
        caption={'משמאל לימין: מאיר לדרמן, חיים קליין, שעיו (מאחור), פיש ארנה, קאין מאיר וליסטמן'}
      />

      <ImageBlock
        src="/klein-family-kerecke/images/with-yehudit.png"
        alt="יהודית ריצר דוורית המחתרת"
        caption={'מפגש בישראל, לאחר 50 שנה, עם יהודית ריצ\'ר, דוורית של המחתרת הציונית בבית הזכוכית שנסעה איתי לבוקרשט, רומניה'}
      />

      <ChapterBottomNav />

      <StoryNav
        next={{ to: "/story-hershi", title: "הסיפור של הרשי", icon: "book" }}
      />
    </div>
  );
}
