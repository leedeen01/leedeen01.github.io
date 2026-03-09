"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InteractiveElements() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Tracks the current page URL

  // 1. GLOBAL CURSOR LOGIC (Runs once on initial load)
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");
    let mx = 0, my = 0, rx = 0, ry = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursor) {
        cursor.style.left = mx + "px";
        cursor.style.top = my + "px";
      }
    };

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring) {
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
      }
      animationFrameId = requestAnimationFrame(animRing);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animRing();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // 2. DOM-DEPENDENT LOGIC (Re-runs every time you navigate to a new page)
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");

    // Hover states for custom cursor
    const handleMouseEnter = () => {
      if (cursor) { cursor.style.width = "16px"; cursor.style.height = "16px"; }
      if (ring) { ring.style.width = "52px"; ring.style.height = "52px"; }
    };
    const handleMouseLeave = () => {
      if (cursor) { cursor.style.width = "10px"; cursor.style.height = "10px"; }
      if (ring) { ring.style.width = "36px"; ring.style.height = "36px"; }
    };

    const interactables = document.querySelectorAll("a, button");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Reveal Animations
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.transitionDelay = i * 0.05 + "s";
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));

    // Timeline & Sub-Timeline Toggles
    const handleTimelineClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const tlHeader = target.closest('.tl-header');
      if (tlHeader) {
        const item = tlHeader.parentElement;
        const isOpen = item?.classList.contains('open');
        document.querySelectorAll('.tl-item.open').forEach(el => el.classList.remove('open'));
        if (!isOpen && item) item.classList.add('open');
      }

      const subTlItem = target.closest('.sub-tl-item');
      if (subTlItem && !target.closest('a')) {
         subTlItem.classList.toggle('open');
      }
    };
    document.addEventListener('click', handleTimelineClick);

    // Smooth Scroll for anchor links on the same page
    const handleSmoothScroll = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('/#') && pathname === '/') {
        const targetId = href.substring(2);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            e.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('nav')!.offsetHeight,
                behavior: 'smooth'
            });
        }
      }
    };

    const hashLinks = document.querySelectorAll('a[href^="/#"]');
    hashLinks.forEach(link => link.addEventListener('click', handleSmoothScroll));

    // Cleanup function when navigating away
    return () => {
      document.removeEventListener("click", handleTimelineClick);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      hashLinks.forEach(link => link.removeEventListener('click', handleSmoothScroll));
      observer.disconnect();
    };
  }, [pathname]); // <-- This array tells React to re-run this block on route changes

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>
      <div className="grid-bg"></div>

      <nav>
        <Link href="/#home" className="nav-logo"> &lt;/LeeDeEn&gt; </Link>

        <div 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span><span></span><span></span>
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link href="/#home" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link href="/#about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
          <li><Link href="/#timeline" onClick={() => setIsMobileMenuOpen(false)}>Journey</Link></li>
          <li><Link href="/#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link></li>
          <li><Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
          <li><Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}