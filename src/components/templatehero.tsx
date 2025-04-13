import { component$ } from '@builder.io/qwik';
import './hero.css';

export default component$(() => {
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
      Streamline Your Workflow with Professional Design Templates</h1>
      <p class="hero-description">
      Browse a curated collection of templates that help you start faster, stay consistent, and deliver polished results every time.</p>
      <div class="hero-buttons">
        <a href="#" class="btn btn-secondary">Explore Templates</a>
      </div>
    </section>
  );
});