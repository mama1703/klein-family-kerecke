import { PageHeader } from "../components/PageHeader";

export default function StoryAvi() {
  const sections = [
    {
      title: "חלק 1",
      src: "https://www.youtube.com/embed/CcoWo-SkEdw",
      summary:
        "כאן ייכנס תקציר קצר של החלק הראשון. אפשר לכתוב 2-4 שורות שמתארות מה יש בסרטון.",
      transcriptPlaceholder: "כאן ייכנס התמלול של חלק 1...",
    },
    {
      title: "חלק 2",
      src: "https://www.youtube.com/embed/L59pazOH0Aw",
      summary:
        "כאן ייכנס תקציר קצר של החלק השני. אפשר להדגיש את הנושא המרכזי או התקופה שבה עוסק הסרטון.",
      transcriptPlaceholder: "כאן ייכנס התמלול של חלק 2...",
    },
    {
      title: "חלק 3",
      src: "https://www.youtube.com/embed/HmdWTe9obcY",
      summary: "כאן ייכנס תקציר קצר של החלק השלישי.",
      transcriptPlaceholder: "כאן ייכנס התמלול של חלק 3...",
    },
    {
      title: "חלק 4",
      src: "https://www.youtube.com/embed/D2a6-7xn390",
      summary: "כאן ייכנס תקציר קצר של החלק הרביעי.",
      transcriptPlaceholder: "כאן ייכנס התמלול של חלק 4...",
    },
    {
      title: "חלק 5",
      src: "https://www.youtube.com/embed/U4pc0GQD7V0",
      summary: "כאן ייכנס תקציר קצר של החלק החמישי.",
      transcriptPlaceholder: "כאן ייכנס התמלול של חלק 5...",
    },
    {
      title: "חלק 6",
      src: "https://www.youtube.com/embed/WIjWZ-n3xSI",
      summary: "כאן ייכנס תקציר קצר של החלק השישי.",
      transcriptPlaceholder: "כאן ייכנס התמלול של חלק 6...",
    },
  ];

  return (
    <div>
      <PageHeader
        title="הסיפור של אווי"
        subtitle="עדות מצולמת"
        breadcrumbs={[
          { label: "דף הבית", to: "/" },
          { label: "הסיפור של אווי" },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="prose-hebrew max-w-none mb-12">
          <p>
            בעמוד זה מרוכזת עדותה המצולמת של אווי, המחולקת לשישה חלקים.
            בהמשך יתווספו גם תמלולים מלאים לכל חלק, כדי לאפשר קריאה, חיפוש
            ושימור של העדות לדורות הבאים.
          </p>
        </div>

        <div className="relative">
          <div className="absolute right-4 top-0 bottom-0 hidden w-px bg-stone-300 md:block" />

          <div className="space-y-14">
            {sections.map((section, index) => (
              <section key={section.title} className="relative">
                <div className="absolute right-[9px] top-3 hidden h-3 w-3 rounded-full bg-stone-700 md:flex" />

                <div className="md:pr-12">
                  <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                    <div className="px-6 pb-2 pt-6">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-stone-900 text-sm font-bold text-white">
                          {index + 1}
                        </span>
                        <div>
                          <h2 className="text-2xl font-bold text-stone-900">
                            {section.title}
                          </h2>
                          <p className="text-sm text-stone-500">עדות מצולמת</p>
                        </div>
                      </div>

                      <p className="mb-5 leading-8 text-stone-700">
                        {section.summary}
                      </p>
                    </div>

                    <div className="px-6 pb-6">
                      <div
                        className="relative w-full overflow-hidden rounded-2xl shadow-md"
                        style={{ paddingTop: "56.25%" }}
                      >
                        <iframe
                          className="absolute left-0 top-0 h-full w-full"
                          src={section.src}
                          title={section.title}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>

                    <div className="border-t border-stone-200 bg-stone-50 px-6 py-6">
                      <h3 className="mb-3 text-lg font-bold text-stone-900">
                        תמלול
                      </h3>
                      <div className="prose-hebrew max-w-none text-stone-700">
                        <p>{section.transcriptPlaceholder}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
