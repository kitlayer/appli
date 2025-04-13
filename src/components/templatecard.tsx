import { component$ } from '@builder.io/qwik';
import './templatecard.css';

interface TemplateCardProps {
  backgroundImage: string;
  title: string;
  description: string;
  badge?: 'Free' | 'Premium';
  link?: string;
}

export const TemplateCard = component$<TemplateCardProps>(
  ({ backgroundImage, title, description, badge, link }) => {
    return (
      <a
        href={link || '#'}
        target="_blank"
        rel="noopener noreferrer"
        class="templatecard-link-wrapper"
      >
        <div class="templatecard">
          <div
            class="templatecard-background"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            {badge && (
              <div class={`templatecard-badge ${badge.toLowerCase()}`}>
                {badge}
              </div>
            )}
          </div>
          <div class="templatecard-content">
            <div class="templatecard-text">
              <h3 class="templatecard-title">{title}</h3>
              <p class="templatecard-description">{description}</p>
            </div>
            <div class="templatecard-arrow">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#888888"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="arrow-icon"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17L17 7" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    );
  }
);

export default component$(() => {
  const cards: TemplateCardProps[] = [
    {
      backgroundImage: "/images/card/good.webp",
      title: "Brand Visionaries 2024",
      description: "Digital Product",
      badge: "Free",
      link: "https://www.cufonfonts.com/",
    },
    {
      backgroundImage: "/images/card/good.webp",
      title: "Brand Visionaries 2024",
      description: "Digital Product",
      badge: "Premium",
      link: "https://fonts.google.com/",
    },
    {
        backgroundImage: "/images/card/good.webp",
        title: "Brand Visionaries 2024",
        description: "Digital Product",
        badge: "Premium",
        link: "https://fonts.google.com/",
      },
      {
        backgroundImage: "/images/card/good.webp",
        title: "Brand Visionaries 2024",
        description: "Digital Product",
        badge: "Premium",
        link: "https://fonts.google.com/",
      },
      {
        backgroundImage: "/images/card/good.webp",
        title: "Brand Visionaries 2024",
        description: "Digital Product",
        badge: "Premium",
        link: "https://fonts.google.com/",
      },
      {
        backgroundImage: "/images/card/good.webp",
        title: "Brand Visionaries 2024",
        description: "Digital Product",
        badge: "Premium",
        link: "https://fonts.google.com/",
      },
      {
        backgroundImage: "/images/card/good.webp",
        title: "Brand Visionaries 2024",
        description: "Digital Product",
        badge: "Premium",
        link: "https://fonts.google.com/",
      },
      {
        backgroundImage: "/images/card/good.webp",
        title: "Brand Visionaries 2024",
        description: "Digital Product",
        badge: "Premium",
        link: "https://fonts.google.com/",
      },
      {
        backgroundImage: "/images/card/good.webp",
        title: "Brand Visionaries 2024",
        description: "Digital Product",
        badge: "Premium",
        link: "https://fonts.google.com/",
      },
      {
        backgroundImage: "/images/card/good.webp",
        title: "Brand Visionaries 2024",
        description: "Digital Product",
        badge: "Premium",
        link: "https://fonts.google.com/",
      },
      {
        backgroundImage: "/images/card/good.webp",
        title: "Brand Visionaries 2024",
        description: "Digital Product",
        badge: "Premium",
        link: "https://fonts.google.com/",
      },
      {
        backgroundImage: "/images/card/good.webp",
        title: "Brand Visionaries 2024",
        description: "Digital Product",
        badge: "Premium",
        link: "https://fonts.google.com/",
      },
      {
        backgroundImage: "/images/card/good.webp",
        title: "Brand Visionaries 2024",
        description: "Digital Product",
        badge: "Premium",
        link: "https://fonts.google.com/",
      }, {
        backgroundImage: "/images/card/good.webp",
        title: "Brand Visionaries 2024",
        description: "Digital Product",
        badge: "Premium",
        link: "https://fonts.google.com/",
      },
      {
        backgroundImage: "/images/card/good.webp",
        title: "Brand Visionaries 2024",
        description: "Digital Product",
        badge: "Premium",
        link: "https://fonts.google.com/",
      },
      
  ];

  return (
    <div class="templatecards-container">
      {cards.map((card, index) => (
        <TemplateCard
          key={index}
          backgroundImage={card.backgroundImage}
          title={card.title}
          description={card.description}
          badge={card.badge}
          link={card.link}
        />
      ))}
    </div>
  );
});
