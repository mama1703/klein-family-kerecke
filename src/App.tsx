import { Routes, Route, Outlet, Link } from "react-router-dom";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { ScrollToTop } from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import StoryHaimLayout from "./pages/StoryHaimLayout";
import StoryHershi from "./pages/StoryHershi";
import StoryHadva from "./pages/StoryHadva";
import StoryAvi from "./pages/StoryAvi";
import ArticlesPage from "./pages/ArticlesPage";
import { storyHaimChapters } from "./pages/storyHaimChapters";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground font-heading">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">הדף לא נמצא</h2>
        <p className="mt-2 text-sm text-muted-foreground">הדף שחיפשת אינו קיים או הועבר.</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/story-haim" element={<StoryHaimLayout />}>
          {storyHaimChapters.map((chapter) => {
            const Component = chapter.element;

            if (chapter.index) {
              return <Route key={chapter.id} index element={<Component />} />;
            }

            return (
              <Route
                key={chapter.id}
                path={chapter.routePath}
                element={<Component />}
              />
            );
          })}
        </Route>

        <Route path="/story-hershi" element={<StoryHershi />} />
        <Route path="/story-hadva" element={<StoryHadva />} />
        <Route path="/story-avi" element={<StoryAvi />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
