import type { ComponentType } from "react";
import type { Chapter } from "../components/ChapterSidebar";

import StoryHaimIndex from "./StoryHaimIndex";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";
import Chapter3 from "./Chapter3";
import Chapter4 from "./Chapter4";

export type StoryHaimChapterRoute = Chapter & {
  index?: boolean;
  element: ComponentType;
  routePath?: string;
};

export const storyHaimChapters: StoryHaimChapterRoute[] = [
  {
    id: "intro",
    title: "הקדמה",
    to: "/story-haim",
    index: true,
    element: StoryHaimIndex,
  },
  {
    id: "chapter-1",
    title: "פרק א׳ - ילדות",
    to: "/story-haim/chapter-1",
    routePath: "chapter-1",
    element: Chapter1,
  },
  {
    id: "chapter-2",
    title: "פרק ב׳ - קורות משפחתי",
    to: "/story-haim/chapter-2",
    routePath: "chapter-2",
    element: Chapter2,
  },
  {
    id: "chapter-3",
    title: "פרק ג׳ - חברים שלי מהחיידר",
    to: "/story-haim/chapter-3",
    routePath: "chapter-3",
    element: Chapter3,
  },
  {
    id: "chapter-4",
    title: "פרק ד׳ - תנועת הנוער הציוני בבודפשט בימי שלטון הנאצים",
    to: "/story-haim/chapter-4",
    routePath: "chapter-4",
    element: Chapter4,
  },
];
