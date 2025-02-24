import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RefObject } from 'react';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

// Set default GSAP settings for consistency
gsap.defaults({
  ease: 'power2.out',
  duration: 0.75,
});

// Hero section animations
export const animateHero = (containerRef: RefObject<HTMLElement | null>) => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline();
    
    // Animate profile image
    tl.from('.hero-image', {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
    });
    
    // Animate name and title
    tl.from('.hero-title', {
      y: 20,
      opacity: 0,
      duration: 0.6,
    }, '-=0.4');
    
    tl.from('.hero-subtitle', {
      y: 20,
      opacity: 0,
      duration: 0.6,
    }, '-=0.4');
    
    // Animate bio paragraphs
    tl.from('.hero-bio p', {
      y: 20,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
    }, '-=0.2');
    
    // Animate social links
    tl.from('.hero-social-links li', {
      x: -20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
    }, '-=0.3');
  }, containerRef);
  
  return ctx;
};

// Projects section animations
export const animateProjects = (containerRef: RefObject<HTMLElement | null>) => {
  const ctx = gsap.context(() => {
    // Animate section title
    gsap.from('.projects-title', {
      y: 30,
      opacity: 0,
      scrollTrigger: {
        trigger: '.projects-title',
        start: 'top bottom-=100',
        toggleActions: 'play none none none',
      },
    });
    
    // Animate project cards with stagger
    gsap.from('.project-card', {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.project-card',
        start: 'top bottom-=50',
        toggleActions: 'play none none none',
      },
    });
  }, containerRef);
  
  return ctx;
};

// Work experience timeline animations
export const animateWork = (containerRef: RefObject<HTMLElement | null>) => {
  const ctx = gsap.context(() => {
    // Animate section title
    gsap.from('.work-title', {
      y: 30,
      opacity: 0,
      scrollTrigger: {
        trigger: '.work-title',
        start: 'top bottom-=100',
        toggleActions: 'play none none none',
      },
    });
    
    // Animate work items with stagger
    gsap.from('.work-item', {
      x: -30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.7,
      scrollTrigger: {
        trigger: '.work-item',
        start: 'top bottom-=50',
        toggleActions: 'play none none none',
      },
    });
  }, containerRef);
  
  return ctx;
};

// Skills section animations
export const animateSkills = (containerRef: RefObject<HTMLElement | null>) => {
  const ctx = gsap.context(() => {
    // Animate section title
    gsap.from('.skills-title', {
      y: 30,
      opacity: 0,
      scrollTrigger: {
        trigger: '.skills-title',
        start: 'top bottom-=100',
        toggleActions: 'play none none none',
      },
    });
    
    // Animate skill items with stagger
    gsap.from('.skill-item', {
      scale: 0.8,
      opacity: 0,
      stagger: 0.05,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.skill-item',
        start: 'top bottom-=50',
        toggleActions: 'play none none none',
      },
    });
  }, containerRef);
  
  return ctx;
};

// Header animations
export const animateHeader = (containerRef: RefObject<HTMLElement | null>) => {
  const ctx = gsap.context(() => {
    // Initial animation for header
    gsap.from('header', {
      y: -50,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
    });
    
    // Scroll-based animation for header
    ScrollTrigger.create({
      start: 'top top',
      end: 99999,
      toggleClass: { className: 'header-scrolled', targets: 'header' }
    });
  }, containerRef);
  
  return ctx;
};

// Page transition animation
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
}; 