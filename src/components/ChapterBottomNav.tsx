import { Link, useLocation } from "react-router-dom";
import { storyHaimChapters } from "../pages/storyHaimChapters";

export function ChapterBottomNav() {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/$/, "") || "/";

  const currentIndex = storyHaimChapters.findIndex((chapter) => {
    const chapterPath = chapter.to.replace(/\/$/, "") || "/";
    return chapterPath === currentPath;
  });

  if (currentIndex === -1) return null;

  const prevChapter = currentIndex > 0 ? storyHaimChapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < storyHaimChapters.length - 1
      ? storyHaimChapters[currentIndex + 1]
      : null;

  return (
    <div className="not-prose mt-16 border-t border-stone-200 pt-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          {prevChapter && (
            <Link
              to={prevChapter.to}
              className="block rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-stone-400 hover:shadow-sm"
            >
              <div className="text-sm text-stone-500">לפרק הקודם</div>
              <div className="mt-1 font-semibold text-stone-900">
                {prevChapter.title}
              </div>
            </Link>
          )}
        </div>

        <div>
          {nextChapter && (
            <Link
              to={nextChapter.to}
              className="block rounded-2xl border border-stone-200 bg-white p-5 text-right transition hover:border-stone-400 hover:shadow-sm"
            >
              <div className="text-sm text-stone-500">לפרק הבא</div>
              <div className="mt-1 font-semibold text-stone-900">
                {nextChapter.title}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
