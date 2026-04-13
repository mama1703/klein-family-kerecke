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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
       

        <div className="flex gap-12">
          <ChapterSidebar chapters={storyHaimChapters} />
          <div className="flex-1 min-w-0">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
