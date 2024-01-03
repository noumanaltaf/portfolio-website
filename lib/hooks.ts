import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleMediaQueryChange = (event: any) => {
      setMatches(event.matches);
    };

    // Initial check
    setMatches(mediaQueryList.matches);

    // Add listener for changes
    mediaQueryList.addEventListener('change', handleMediaQueryChange);

    // Clean up listener on component unmount
    return () => {
      mediaQueryList.removeEventListener('change', handleMediaQueryChange);
    };
  }, [query]);

  return matches;
};
