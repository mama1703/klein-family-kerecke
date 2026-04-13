import { PageHeader } from "../components/PageHeader";

export default function StoryAvi() {
  const sections = [
    {
      title: "חלק 1",
      src: "https://www.youtube.com/embed/CcoWo-SkEdw",
    },
    {
      title: "חלק 2",
      src: "https://www.youtube.com/embed/L59pazOH0Aw",
    },
    {
      title: "חלק 3",
      src: "https://www.youtube.com/embed/HmdWTe9obcY",
    },
    {
      title: "חלק 4",
      src: "https://www.youtube.com/embed/D2a6-7xn390",
    },
    {
      title: "חלק 5",
      src: "https://www.youtube.com/embed/U4pc0GQD7V0",
    },
    {
      title: "חלק 6",
      src: "https://www.youtube.com/embed/WIjWZ-n3xSI",
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
        <div className="relative">
          <div className="absolute right-4 top-0 bottom-0 hidden w-px bg-stone-300 md:block" />

          <div className="space-y-14">
            {sections.map((section, index) => (
              <section key={section.title} className="relative">
                <div className="absolute right-[9px] top-3 hidden h-3 w-3 rounded-full bg-stone-700 md:flex" />

                <div className="md:pr-12">
                  <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                    <div className="px-6 pt-6 pb-4">
                      <div className="flex items-center gap-3">
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
