// Subscription.tsx
import { component$ } from '@builder.io/qwik';
import './subscription.css';

export const Subscription = component$(() => {
  return (
    <div class="subscription-section">
      <h2 class="subscription-title">Discover the Latest Innovations in the World of Design</h2>
      <p class="subscription-description">
      Subscribe to our newsletter to follow the latest UI/UX resources and trends and make a difference in your business.
      </p>
      <div class="subscription-form">
        <input
          type="email"
          placeholder="Enter your email"
          class="subscription-input"
        />
        <button class="subscription-button">Subscribe</button>
      </div>
    </div>
  );
});