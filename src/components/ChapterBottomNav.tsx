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

  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="not-prose mt-16 border-t border-stone-200 pt-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="text-right">
          {nextChapter && (
            <Link
              to={nextChapter.to}
              onClick={handleNavigate}
              className="group inline-block"
            >
              <div className="text-sm font-medium text-stone-500 transition group-hover:text-stone-700">
                לפרק הבא ←
              </div>
              <div className="mt-1 text-base font-semibold text-stone-900 transition group-hover:text-stone-700">
                {nextChapter.title}
              </div>
            </Link>
          )}
        </div>

        <div className="text-left">
          {prevChapter && (
            <Link
              to={prevChapter.to}
              onClick={handleNavigate}
              className="group inline-block"
            >
              <div className="text-sm font-medium text-stone-500 transition group-hover:text-stone-700">
                → לפרק הקודם
              </div>
              <div className="mt-1 text-base font-semibold text-stone-900 transition group-hover:text-stone-700">
                {prevChapter.title}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
