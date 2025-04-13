// Footer.tsx
import { component$ } from '@builder.io/qwik';
import './footer.css';

export const Footer = component$(() => {
  return (
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-left">
          <span class="footer-copyright">© Kitlayer Inc</span>
          <span class="footer-divider">—</span>
          <a href="#" class="footer-link">Contributing</a>
          <a href="#" class="footer-link">Help</a>
          <a href="#" class="footer-link">Terms of Use</a>
          <a href="#" class="footer-link">Privacy Policy</a>
          <a href="#" class="footer-link">Communication</a>
        </div>
        <div class="footer-socials">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="footer-social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="footer-social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <circle cx="18.5" cy="5.5" r="1" />
            </svg>
          </a>
          <a href="https://figma.com" target="_blank" rel="noopener noreferrer" class="footer-social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="8" cy="5" r="3" />
              <circle cx="8" cy="12" r="3" />
              <circle cx="8" cy="19" r="3" />
              <circle cx="15" cy="5" r="3" />
              <path d="M15 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
});