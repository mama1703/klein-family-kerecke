import { Outlet } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { ChapterSidebar } from "../components/ChapterSidebar";
import { storyHaimChapters } from "./storyHaimChapters";

export default function StoryHaimLayout() {
  return (
    <div>
      <PageHeader
        title="הסיפור של חיים"
        subtitle="ילדות עד הגעה לארץ ישראל"
        breadcrumbs={[
          { label: "דף הבית", to: "/" },
          { label: "הסיפור של חיים" },
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-3 pb-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          <div className="w-full lg:w-64 lg:shrink-0">
            <ChapterSidebar chapters={storyHaimChapters} />
          </div>
          <div className="flex-1 min-w-0 w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
