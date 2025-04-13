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
      Plugins That Supercharge Your Design Workflow
      </h1>
      <p class="hero-description">
      Discover plugin tools designed to accelerate your design process, enhance your workflow, and help you achieve greater efficiency in every stage of your project </p>
      <div class="hero-buttons">
        <a href="#" class="btn btn-secondary">Explore Plugins</a>
      </div>
    </section>
  );
});