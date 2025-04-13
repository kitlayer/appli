import { component$, $, useVisibleTask$ } from '@builder.io/qwik';
import './hero.css';

export default component$(() => {
  const scrollToBadges = $(() => {
    console.log('Explore Resources button clicked!');
    const badgeSection = document.getElementById('badge-section');
    const header = document.querySelector('header');

    console.log('Badge-section element:', badgeSection);
    console.log('Header element:', header);

    if (badgeSection) {
      const headerHeight = header ? header.offsetHeight : 0; // Header yoksa 0 kullan
      const offset = badgeSection.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      console.log('Scrolling to badge-section. Header height:', headerHeight, 'Offset:', offset);
    } else {
      console.error('Badge-section not found! Please ensure an element with id="badge-section" exists.');
    }
  });

  useVisibleTask$(() => {
    console.log('Hero component is visible on client');
    const badgeSection = document.getElementById('badge-section');
    const header = document.querySelector('header');
    console.log('Badge-section on Hero load:', badgeSection);
    console.log('Header on Hero load:', header);
  });

  return (
    <section class="hero">
      <div class="hero-support-container">
        <div class="hero-support-images">
          <img src="/images/profile1.svg" alt="Person 1" class="support-image" />
          <img src="/images/profile2.svg" alt="Person 2" class="support-image" />
          <img src="/images/profile3.svg" alt="Person 3" class="support-image" />
        </div>
        <span class="hero-support-text">
          Supporting over 100,000+ designers worldwide
        </span>
      </div>
      <h1 class="hero-title">
        Fuel Your Creativity with the Right Resources
      </h1>
      <p class="hero-description">
        Gather all the design resources you need, inspirational tools, and unique materials in one platform to make your creative projects more efficient.
      </p>
      <div class="hero-buttons">
        <a href="#" class="btn btn-secondary" onClick$={scrollToBadges} preventdefault:click>
          Explore Resources
        </a>
      </div>
    </section>
  );
});