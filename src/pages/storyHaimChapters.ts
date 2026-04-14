import type { ComponentType } from "react";
import type { Chapter } from "../components/ChapterSidebar";

import StoryHaimIndex from "./StoryHaimIndex";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";
import Chapter3 from "./Chapter3";
import Chapter4 from "./Chapter4";
import Chapter5 from "./Chapter5";
import Chapter6 from "./Chapter6";
import Chapter7 from "./Chapter7";
import Chapter7 from "./Chapter8";

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
  {
    id: "chapter-5",
    title: "פרק ה׳ - יום שחרורים מסכנת ההשמדה של הנאצים",
    to: "/story-haim/chapter-5",
    routePath: "chapter-5",
    element: Chapter5,
  },
  {
    id: "chapter-6",
    title: "פרק ו׳ - סוף למלחמה",
    to: "/story-haim/chapter-6",
    routePath: "chapter-6",
    element: Chapter6,
  },
  {
    id: "chapter-7",
    title: 'נספח - מתוך "קדושי שבע קהילות"',
    to: "/story-haim/chapter-7",
    routePath: "chapter-7",
    element: Chapter7,
  },
  {
    id: "chapter-8",
    title: 'נספח - תמונות ממפגש הנוער הציוני בארץ"',
    to: "/story-haim/chapter-8",
    routePath: "chapter-8",
    element: Chapter8,
  },
];
