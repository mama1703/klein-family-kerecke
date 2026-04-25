import { Outlet } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { ChapterSidebar } from "../components/ChapterSidebar";
import { storyHaimChapters } from "./storyHaimChapters";

export default function StoryHaimLayout() {
  return (
    <div>
      {/* Banner */}
      <div className="w-full">
        <picture>
          <source
            media="(min-width: 640px)"
            srcSet="/klein-family-kerecke/images/haim-banner-1920x250.png"
          />
          <img
            src="/klein-family-kerecke/images/haim-mobile-625x350.png"
            alt="הסיפור של חיים"
            className="w-full block"
          />
        </picture>
      </div>

      <PageHeader
        title="הסיפור של חיים"
        subtitle="ילדות עד הגעה לארץ ישראל"
        breadcrumbs={[
          { label: "דף הבית", to: "/" },
          { label: "הסיפור של חיים" },
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-0 pb-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
          <div className="w-full lg:w-64 lg:shrink-0 lg:pt-8">
            <ChapterSidebar chapters={storyHaimChapters} />
          </div>
          <div className="flex-1 min-w-0 w-full lg:pt-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
