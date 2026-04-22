import { Suspense, lazy } from 'react';
import HeroBanner from '../components/HeroBanner';
import FloatingTallyBtn from '../components/FloatingTallyBtn';

// Lazy load heavy components below the fold
const ProjectOverview = lazy(() => import('../components/ProjectOverview'));
const LocationSection = lazy(() => import('../components/LocationSection'));
const IconicWorks = lazy(() => import('../components/IconicWorks'));
const FloorPlanSection = lazy(() => import('../components/FloorPlanSection'));
const PotentialSection = lazy(() => import('../components/PotentialSection'));
const ProgressSection = lazy(() => import('../components/ProgressSection'));
const FaqSection = lazy(() => import('../components/FaqSection'));
const NewsSection = lazy(() => import('../components/NewsSection'));

// Simple loading fallback
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Load Hero immediately for LCP optimization */}
      <HeroBanner />

      {/* Defer loading of other sections until they are needed / in background */}
      <Suspense fallback={<SectionLoader />}>
        <ProjectOverview />
        <LocationSection />
        <IconicWorks />
        <FloorPlanSection />
        <PotentialSection />
        <ProgressSection />
        <FaqSection />
        <NewsSection />
      </Suspense>

      {/* Floating Tally Button - Thay 'YOUR_FORM_ID' bằng ID form Tally thực tế của bạn */}
      <FloatingTallyBtn formId="44Ne8k" />
    </main>
  );
}
