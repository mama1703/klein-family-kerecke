import { createFileRoute, Outlet } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { ChapterSidebar, type Chapter } from "../components/ChapterSidebar";

export const Route = createFileRoute("/story-haim")({
  head: () => ({
    meta: [
      { title: "הסיפור של חיים — ספר המשפחה" },
      { name: "description", content: "סיפור חייו של חיים, פרק אחר פרק" },
      { property: "og:title", content: "הסיפור של חיים — ספר המשפחה" },
      { property: "og:description", content: "סיפור חייו של חיים, פרק אחר פרק" },
    ],
  }),
  component: StoryHaimLayout,
});

const chapters: Chapter[] = [
  { id: "intro", title: "הקדמה", to: "/story-haim" },
  { id: "chapter-1", title: "פרק א׳ — ילדות", to: "/story-haim/chapter-1" },
  { id: "chapter-2", title: "פרק ב׳ — נעורים", to: "/story-haim/chapter-2" },
  { id: "chapter-3", title: "פרק ג׳ — חיים חדשים", to: "/story-haim/chapter-3" },
];

function StoryHaimLayout() {
  return (
    <div>
      <PageHeader
        title="הסיפור של חיים"
        subtitle="סיפור חייו, פרק אחר פרק"
        breadcrumbs={[{ label: "דף הבית", to: "/" }, { label: "הסיפור של חיים" }]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex gap-12">
          <ChapterSidebar chapters={chapters} currentChapterId="intro" />
          <div className="flex-1 min-w-0">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
