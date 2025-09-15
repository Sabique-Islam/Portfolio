"use client";
import { useEffect } from "react";

export default function ScrollToTopOnReload() {
  useEffect(() => {
    // Disable browser's scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Add smooth scrolling for all internal links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}